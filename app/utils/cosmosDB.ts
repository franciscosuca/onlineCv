import { CosmosClient, Database, Container } from '@azure/cosmos';

// Check if we're in build mode or runtime mode
const isBuildTime = process.env.NODE_ENV === undefined || process.env.NEXT_PHASE === 'phase-production-build';

// Initialize client only if not in build time and env vars are available
let client: CosmosClient | null = null;
if (!isBuildTime && process.env.COSMOS_ENDPOINT && process.env.COSMOS_KEY) {
  client = new CosmosClient({
    endpoint: process.env.COSMOS_ENDPOINT,
    key: process.env.COSMOS_KEY,
  });
}

const databaseId = process.env.COSMOS_DATABASE || 'onlineCv';
const containerId = process.env.COSMOS_CONTAINER || 'experience';
let databaseInstance: Database | null = null;
let containerInstance: Container | null = null;

async function initializeCosmosDB() {
  if (!client) {
    throw new Error('Cosmos DB client not initialized. Missing environment variables.');
  }
  
  if (!databaseInstance || !containerInstance) {
    try {
      databaseInstance = client.database(databaseId);
      containerInstance = databaseInstance.container(containerId);
    } catch (error) {
      throw new Error('Failed to connect to database or container. Make sure they exist.');
    }
  }
  return { database: databaseInstance, container: containerInstance };
}

export async function getItem<T>(id: string, partitionKey: string): Promise<T | null> {
  if (!client) {
    return null; // Return null during build time
  }
  
  const { container } = await initializeCosmosDB();
  try {
    const { resource } = await container.item(id, partitionKey).read();
    return resource as T;
  } catch (error) {
    if ((error as any).code === 404) {
      return null;
    }
    throw error;
  }
}

export async function queryItems<T>(partitionKey: string): Promise<T[]> {
  if (!client) {
    return []; // Return empty array during build time
  }
  
  const { container } = await initializeCosmosDB();
  const { resources } = await container.items
    .query("SELECT * FROM c", {
      partitionKey: partitionKey, // type is the partitionKey used for this project on CosmosDB
      maxItemCount: 100,
    }).fetchAll();
  return resources as T[];
}