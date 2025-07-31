import { CosmosClient, Database, Container } from '@azure/cosmos';

// Check if we're in build mode or runtime mode
const isBuildTime = process.env.NODE_ENV === undefined || process.env.NEXT_PHASE === 'phase-production-build';

// Debug logging
console.log('CosmosDB Debug Info:');
console.log('- isBuildTime:', isBuildTime);
console.log('- NODE_ENV:', process.env.NODE_ENV);
console.log('- COSMOS_CONNECTION_STRING:', process.env.COSMOS_CONNECTION_STRING ? 'SET' : 'NOT SET');
console.log('- COSMOS_ENDPOINT:', process.env.COSMOS_ENDPOINT ? 'SET' : 'NOT SET');
console.log('- COSMOS_KEY:', process.env.COSMOS_KEY ? 'SET' : 'NOT SET');
console.log('- COSMOS_DATABASE:', process.env.COSMOS_DATABASE);
console.log('- COSMOS_CONTAINER:', process.env.COSMOS_CONTAINER);

// Clean environment variables (remove quotes if present)
const cleanConnectionString = process.env.COSMOS_CONNECTION_STRING?.replace(/^"(.*)"$/, '$1');
const cleanEndpoint = process.env.COSMOS_ENDPOINT?.replace(/^"(.*)"$/, '$1');
const cleanKey = process.env.COSMOS_KEY?.replace(/^"(.*)"$/, '$1');
const cleanDatabase = process.env.COSMOS_DATABASE?.replace(/^"(.*)"$/, '$1');
const cleanContainer = process.env.COSMOS_CONTAINER?.replace(/^"(.*)"$/, '$1');

console.log('Cleaned values:');
console.log('- cleanConnectionString:', cleanConnectionString ? 'SET' : 'NOT SET');
console.log('- cleanConnectionString length:', cleanConnectionString?.length);
console.log('- cleanEndpoint:', cleanEndpoint);
console.log('- cleanEndpoint length:', cleanEndpoint?.length);
console.log('- cleanKey length:', cleanKey?.length);
console.log('- cleanDatabase:', cleanDatabase);
console.log('- cleanContainer:', cleanContainer);

// Test network connectivity
async function testNetworkConnectivity() {
  console.log('Testing network connectivity...');
  try {
    // Test basic internet connectivity
    const response = await fetch('https://httpbin.org/get', { 
      method: 'GET',
      signal: AbortSignal.timeout(5000) // 5 second timeout
    });
    console.log('Basic internet test:', response.ok ? 'SUCCESS' : 'FAILED');
    
    // Test Azure connectivity (401 is expected without auth)
    if (cleanEndpoint) {
      const azureUrl = new URL(cleanEndpoint);
      const testUrl = `https://${azureUrl.hostname}`;
      console.log('Testing Azure endpoint reachability:', testUrl);
      
      const azureResponse = await fetch(testUrl, { 
        method: 'GET',
        signal: AbortSignal.timeout(10000) // 10 second timeout
      });
      console.log('Azure endpoint test:', azureResponse.status === 401 ? 'SUCCESS (401 expected)' : `Status: ${azureResponse.status}`);
    }
  } catch (error) {
    console.error('Network connectivity test failed:', error);
  }
}

// Test CosmosDB client connectivity
async function testCosmosDBConnection() {
  console.log('Testing CosmosDB client connection...');
  
  // Try connection string first, then fallback to endpoint/key
  let testClient: CosmosClient | null = null;
  
  if (cleanConnectionString) {
    console.log('Using connection string for CosmosDB client...');
    try {
      testClient = new CosmosClient(cleanConnectionString);
      console.log('CosmosDB client created with connection string');
    } catch (error) {
      console.error('Failed to create client with connection string:', error);
    }
  } else if (cleanEndpoint && cleanKey) {
    console.log('Using endpoint/key for CosmosDB client...');
    try {
      testClient = new CosmosClient({
        endpoint: cleanEndpoint,
        key: cleanKey,
        connectionPolicy: {
          requestTimeout: 10000,
        }
      });
      console.log('CosmosDB client created with endpoint/key');
    } catch (error) {
      console.error('Failed to create client with endpoint/key:', error);
    }
  } else {
    console.log('Cannot test CosmosDB - missing credentials');
    return;
  }
  
  if (!testClient) {
    console.log('No CosmosDB client available for testing');
    return;
  }
  
  try {
    console.log('CosmosDB test client created, testing database access...');
    const database = testClient.database(cleanDatabase || 'onlineCv');
    
    // Try to read database info (this should work if credentials are valid)
    const { resource } = await database.read();
    console.log('CosmosDB connection test: SUCCESS - Database accessible');
    console.log('Database ID:', resource?.id);
    
    // Test container access
    const container = database.container(cleanContainer || 'experience');
    const containerInfo = await container.read();
    console.log('Container test: SUCCESS - Container accessible');
    console.log('Container ID:', containerInfo.resource?.id);
    
    // Test a basic query during setup
    try {
      // Discover partition keys in the database using the correct field name "type"
    console.log('Query test: Attempting to find items in database...');
    const partitionKeyQuery = `SELECT TOP 5 c.id, c.type FROM c`;
    const { resources: sampleItems } = await container.items.query(partitionKeyQuery).fetchAll();
    
    if (sampleItems.length > 0) {
      console.log(`Query test: SUCCESS - Found ${sampleItems.length} items in first page`);
      console.log('Available items and their "type" values:', JSON.stringify(sampleItems, null, 2));
      
      // Show unique type values
      const typeValues = sampleItems.map(item => item.type).filter(Boolean);
      const uniqueTypes = Array.from(new Set(typeValues));
      console.log('Unique "type" values found:', uniqueTypes);
    } else {
      console.log('Query test: No items found in the container');
    }
    } catch (queryError) {
      console.log('Query test: FAILED -', queryError);
    }
    
  } catch (error) {
    console.error('CosmosDB connection test FAILED:', error);
    if (error.code) {
      console.log('Error code:', error.code);
    }
    if (error.substatus) {
      console.log('Error substatus:', error.substatus);
    }
  }
}

// Run network test (but don't block initialization)
testNetworkConnectivity().catch(console.error);

// Run CosmosDB connection test
testCosmosDBConnection().catch(console.error);

// Initialize client only if not in build time and env vars are available
let client: CosmosClient | null = null;
let clientInitialized = false;

function getCosmosClient(): CosmosClient | null {
  if (clientInitialized) {
    return client;
  }
  
  if (isBuildTime) {
    console.log('Cannot initialize CosmosDB client - in build time');
    clientInitialized = true;
    return null;
  }
  
  console.log('About to initialize CosmosDB client...');
  try {
    // Try connection string first, then fallback to endpoint/key
    if (cleanConnectionString) {
      console.log('Using connection string to create CosmosDB client...');
      client = new CosmosClient(cleanConnectionString);
      console.log('CosmosDB client created successfully with connection string');
    } else if (cleanEndpoint && cleanKey) {
      console.log('Using endpoint/key to create CosmosDB client...');
      client = new CosmosClient({
        endpoint: cleanEndpoint,
        key: cleanKey,
        connectionPolicy: {
          requestTimeout: 10000, // 10 second timeout
        }
      });
      console.log('CosmosDB client created successfully with endpoint/key');
    } else {
      console.log('Cannot initialize CosmosDB client - missing credentials');
      console.log('- Has cleanConnectionString:', !!cleanConnectionString);
      console.log('- Has cleanEndpoint:', !!cleanEndpoint);
      console.log('- Has cleanKey:', !!cleanKey);
      client = null;
    }
  } catch (error) {
    console.error('Error creating CosmosDB client:', error);
    client = null;
  }
  
  clientInitialized = true;
  return client;
}
console.log('Initial setup complete');
const databaseId = cleanDatabase || 'onlineCv';
const containerId = cleanContainer || 'experience';
let databaseInstance: Database | null = null;
let containerInstance: Container | null = null;

async function initializeCosmosDB() {
  const cosmosClient = getCosmosClient();
  if (!cosmosClient) {
    console.error('CosmosDB client is null!');
    throw new Error('Cosmos DB client not initialized. Missing environment variables.');
  }
  
  if (!databaseInstance || !containerInstance) {
    try {
      console.log(`Connecting to database: ${databaseId}`);
      databaseInstance = cosmosClient.database(databaseId);
      console.log(`Connecting to container: ${containerId}`);
      containerInstance = databaseInstance.container(containerId);
      console.log('Database and container initialized successfully');
    } catch (error) {
      console.error('Failed to initialize database/container:', error);
      throw new Error('Failed to connect to database or container. Make sure they exist.');
    }
  }
  return { database: databaseInstance, container: containerInstance };
}

export async function getItem<T>(id: string, partitionKey: string): Promise<T | null> {
  const cosmosClient = getCosmosClient();
  if (!cosmosClient) {
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
  console.log('queryItems called with partitionKey:', partitionKey);
  
  const cosmosClient = getCosmosClient();
  console.log('client exists:', !!cosmosClient);
  
  if (!cosmosClient) {
    console.log('No client available, returning empty array');
    return []; // Return empty array during build time
  }
  
  try {
    console.log('Attempting to query CosmosDB...');
    console.log('Database ID:', databaseId);
    console.log('Container ID:', containerId);
    
    const { container } = await initializeCosmosDB();
    
    console.log('About to execute query: SELECT * FROM c with flexible filtering');
    
    // Try different approaches since partition key structure is unclear
    console.log('Attempting to query all items first to understand data structure...');
    const { resources: allResources } = await container.items
      .query("SELECT * FROM c", {
        maxItemCount: 100,
      }).fetchAll();
    
    console.log(`Found ${allResources.length} total items in container`);
    
    // Filter items based on potential field names that might match the partitionKey
    let filteredResources = allResources.filter(item => {
      return item.type === partitionKey || 
             item.category === partitionKey || 
             item.partitionKey === partitionKey ||
             item.kind === partitionKey;
    });
    
    // If no filtered results, return all items for debugging
    const resources = filteredResources.length > 0 ? filteredResources : allResources;
    
    console.log(`After filtering for "${partitionKey}": ${filteredResources.length} items`);
    console.log(`Returning ${resources.length} items total`);
    
    console.log('Query completed successfully!');
    console.log('Found', resources.length, 'items for partitionKey:', partitionKey);
    
    if (resources.length > 0) {
      console.log('First item details:');
      console.log('- ID:', resources[0].id);
      console.log('- Type:', resources[0].type);
      console.log('- Keys in item:', Object.keys(resources[0]));
      console.log('Sample item:', JSON.stringify(resources[0], null, 2));
    } else {
      console.log('No items found. This could mean:');
      console.log('1. The partition key "' + partitionKey + '" does not exist');
      console.log('2. The container is empty');
      console.log('3. The partition key format is incorrect');
      
      // Let's also try a query without partition key to see what's actually in the container
      console.log('Trying query without partition key constraint...');
      const { resources: allItems } = await container.items
        .query("SELECT TOP 5 c.id, c.type FROM c")
        .fetchAll();
      console.log('Available items in container (first 5):');
      allItems.forEach((item, index) => {
        console.log(`${index + 1}. ID: ${item.id}, Type: ${item.type || 'undefined'}`);
      });
    }
    
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