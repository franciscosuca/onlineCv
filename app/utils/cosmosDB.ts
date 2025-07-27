import { CosmosClient, Database, Container } from '@azure/cosmos';

if (!process.env.COSMOS_ENDPOINT || !process.env.COSMOS_KEY) {
  throw new Error('Missing required environment variables for Cosmos DB');
}

const client = new CosmosClient({
  endpoint: process.env.COSMOS_ENDPOINT,
  key: process.env.COSMOS_KEY,
});

const databaseId = process.env.COSMOS_DATABASE || 'onlineCv';
const containerId = process.env.COSMOS_CONTAINER || 'experience';
let databaseInstance: Database | null = null;
let containerInstance: Container | null = null;

async function initializeCosmosDB() {
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
  const { container } = await initializeCosmosDB();
  const { resources } = await container.items
    .query("SELECT * FROM c", {
      partitionKey: partitionKey, // type is the partitionKey used for this project on CosmosDB
      maxItemCount: 100,
    }).fetchAll();
  return resources as T[];
}