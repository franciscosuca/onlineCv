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

//TEST

export interface Experience {
  id: string;
  partitionKey: string;
  sdate: string;
  edate: string;
  company: string;
  location: string;
  jobTitle: string;
  summary: string;
  skills: string;
}
export const sampleExperience: Experience = {
  id: "0694d7ef-eec2-4706-a2a7-29c68257685b",
  partitionKey: "research",
  sdate: "05.2022",
  edate: "10.2022",
  company: "Hochschule RHEIN-WAAL",
  location: "Deutschland",
  jobTitle: "Test",
  summary: "Research that modernized the IoT architecture that a company owns, by adapting state of the art technology to their solution, such as: a container orchestration technology that runs in devices with limited resources; a monitoring system that allows the visualization of metrics collected from edge devices; and a CICD pipeline that improves the delivery of applications.",
  skills: "K3s;Prometheus;GitLab"
};
//

async function initializeCosmosDB() {
  if (!databaseInstance || !containerInstance) {
    try {
      databaseInstance = client.database(databaseId);
      console.log(`Connected to database ${databaseId}`);

      containerInstance = databaseInstance.container(containerId);
      console.log(`Connected to container ${containerId}`);
    } catch (error) {
      console.error('Error connecting to database:', error);
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

// export async function queryItems<T>(query: string): Promise<T[]> {
//   databaseInstance = client.database(databaseId);
//   console.log(`Connected to database ${databaseId}`);

//   let container = databaseInstance.container(containerId);
//   console.log(`Connected to container ${containerId}`);
//   const { resources } = await container.items
//     .query({ query })
//     .fetchAll();
//   return resources as T[];
// }

// export async function queryItems2(query: string): Promise<any[]> {
//   // const { container } = await initializeCosmosDB();
//   databaseInstance = client.database(databaseId);
//   console.log(`Connected to database ${databaseId}`);

//   let container = databaseInstance.container(containerId);
//   console.log(`Connected to container ${containerId}`);
//   const { resources } = await container.items
//     .query({ query })
//     .fetchAll();
//   return resources;
// }

// export async function createItem<T extends { id: string; partitionKey: string }>(item: T): Promise<T> {
//   // const { container } = await initializeCosmosDB();
//   databaseInstance = client.database(databaseId);
//   console.log(`Connected to database ${databaseId}`);

//   let container = databaseInstance.container(containerId);
//   console.log(`Connected to container ${containerId}`);
//   try {
//     const { resource } = await container.items.create(item);
//     console.log(`Successfully created item with id: ${item.id}`);
//     return resource as T;
//   } catch (error) {
//     console.error('Error creating item:', error);
//     throw new Error(`Failed to create item: ${(error as Error).message}`);
//   }
// }

// // Example function to create a new experience
// export async function createExperience(experience: Omit<Experience, 'id'>): Promise<Experience> {
//   const newExperience: Experience = {
//     ...experience,
//     id: crypto.randomUUID() // Generate a new UUID for the item
//   };
//   return createItem(newExperience);
}

// export async function updateItem<T>(id: string, partitionKey: string, item: T): Promise<T> {
//   const { resource } = await container.item(id, partitionKey).replace(item);
//   return resource as T;
// }

// export async function deleteItem(id: string, partitionKey: string): Promise<void> {
//   await container.item(id, partitionKey).delete();
// }
