import { CosmosClient, Database, Container } from '@azure/cosmos';

// Clean environment variables (remove quotes if present)
const cleanConnectionString = process.env.COSMOS_CONNECTION_STRING?.replace(/^"(.*)"$/, '$1');
const cleanDatabase = process.env.COSMOS_DATABASE?.replace(/^"(.*)"$/, '$1');
const cleanContainer = process.env.COSMOS_CONTAINER?.replace(/^"(.*)"$/, '$1');

let client: CosmosClient | null = null;
let clientInitialized = false;

function getCosmosClient(): CosmosClient | null {
  if (clientInitialized) {
    return client;
  }
  
  try {
    if (cleanConnectionString) {
      client = new CosmosClient(cleanConnectionString);
    } else {
      throw new Error('Cannot initialize CosmosDB client without the credentials.');
    }
  } catch (error) {
    throw new Error('Failed to create CosmosDB client.');
  }
  
  clientInitialized = true;
  return client;
}

const databaseId = cleanDatabase || 'onlineCv';
const containerId = cleanContainer || 'experience';
let databaseInstance: Database | null = null;
let containerInstance: Container | null = null;

async function initializeCosmosDB() {
  const cosmosClient = getCosmosClient();
  if (!cosmosClient) {
    throw new Error('Cosmos DB client not initialized.');
  }
  
  if (!databaseInstance || !containerInstance) {
    try {
      databaseInstance = cosmosClient.database(databaseId);
      containerInstance = databaseInstance.container(containerId);
    } catch (error) {
      throw new Error('Failed to connect to database or container.');
    }
  }
  return { database: databaseInstance, container: containerInstance };
}

export async function queryItems<T>(partitionKey: string): Promise<T[]> {
  const cosmosClient = getCosmosClient();
  if (!cosmosClient) {
    throw new Error('Cosmos DB client not initialized.');
  }
  
  try {
    const { container } = await initializeCosmosDB();
    const { resources } = await container.items
      .query("SELECT * FROM c", {
        partitionKey: partitionKey,
        maxItemCount: 100,
      }).fetchAll();
    
    return resources as T[];
  } catch (error) {
    console.error('Error querying CosmosDB:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      statusCode: error.statusCode,
      substatus: error.substatus
    });
    throw error;
  }
}