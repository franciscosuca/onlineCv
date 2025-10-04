# Azure Container Apps Setup Guide

## Prerequisites
1. Azure CLI installed
2. Azure subscription with appropriate permissions
3. Resource group created

## Step 1: Create Container Apps Environment with Consumption Plan

```bash
# Login to Azure
az login

# Set your subscription (replace with your subscription ID)
az account set --subscription "your-subscription-id"

# Create a resource group (if not exists)
az group create --name "your-resource-group" --location "East US"

# Create Container Apps Environment with Consumption plan
az containerapp env create \
  --name "your-container-env" \
  --resource-group "your-resource-group" \
  --location "East US" \
  --enable-workload-profiles false
```

## Step 2: Create the Container App with Scale-to-Zero

```bash
# Create the container app with scale-to-zero capability
az containerapp create \
  --name "your-app-name" \
  --resource-group "your-resource-group" \
  --environment "your-container-env" \
  --image "your-registry/your-image:latest" \
  --target-port 80 \
  --ingress external \
  --cpu 0.25 \
  --memory 0.5Gi \
  --min-replicas 0 \
  --max-replicas 10 \
  --env-vars \
    COSMOS_CONNECTION_STRING="your-cosmos-connection-string" \
    COSMOS_DATABASE="your-database" \
    COSMOS_CONTAINER="your-container"
```

## Step 3: Configure Auto-Scaling (Scale-to-Zero)

The `--min-replicas 0` parameter enables scale-to-zero functionality. This means:
- When there's no traffic, the app scales down to 0 replicas (no cost)
- When traffic arrives, it automatically scales up
- You only pay for the compute time when the app is running

## Step 4: GitHub Repository Secrets & Variables

Add these secrets in your GitHub repository settings:

### Secrets (Settings > Secrets and variables > Actions > Secrets):
- `AZURE_CLIENT_ID` - Service principal client ID
- `AZURE_TENANT_ID` - Azure tenant ID  
- `AZURE_SUBSCRIPTION_ID` - Azure subscription ID
- `AZURE_RESOURCE_GROUP` - Your resource group name
- `DOCKERHUB_REGISTRY` - Your Docker registry (e.g., docker.io)
- `DOCKERHUB_USER` - Docker Hub username
- `DOCKERHUB_TOKEN` - Docker Hub access token
- `DOCKERHUB_IMAGE` - Your Docker image name
- `COSMOS_CONNECTION_STRING` - CosmosDB connection string
- `COSMOS_DATABASE` - CosmosDB database name
- `COSMOS_CONTAINER` - CosmosDB container name

### Variables (Settings > Secrets and variables > Actions > Variables):
- `AZURE_CONTAINER_APP_NAME` - Your container app name
- `AZURE_CONTAINER_APP_ENVIRONMENT` - Your container environment name

## Step 5: Create Service Principal for GitHub Actions

```bash
# Create service principal for GitHub Actions
az ad sp create-for-rbac \
  --name "github-actions-sp" \
  --role "Contributor" \
  --scopes "/subscriptions/your-subscription-id/resourceGroups/your-resource-group" \
  --sdk-auth

# This will output JSON with client_id, tenant_id, and subscription_id
# Use these values for your GitHub secrets
```

## Step 6: Verify Container Apps Extension

```bash
# Install Container Apps extension (if not already installed)
az extension add --name containerapp --upgrade

# Check if environment supports scale-to-zero
az containerapp env show \
  --name "your-container-env" \
  --resource-group "your-resource-group" \
  --query "properties.workloadProfiles"
```

## Benefits of This Setup

1. **Cost Optimization**: Scale-to-zero means you only pay when your app is handling requests
2. **Automatic Scaling**: Handles traffic spikes automatically
3. **Serverless Experience**: No need to manage underlying infrastructure
4. **Cold Start**: ~1-2 seconds to wake up from zero replicas
5. **Integration**: Works seamlessly with Azure services

## Monitoring and Management

```bash
# View app status
az containerapp show \
  --name "your-app-name" \
  --resource-group "your-resource-group"

# View logs
az containerapp logs show \
  --name "your-app-name" \
  --resource-group "your-resource-group" \
  --follow

# Update app configuration
az containerapp update \
  --name "your-app-name" \
  --resource-group "your-resource-group" \
  --min-replicas 0 \
  --max-replicas 10
```

## Notes
- The Consumption plan automatically provides scale-to-zero capability
- No need for a separate App Service Plan
- Cold starts are typically 1-2 seconds for Node.js apps
- You can monitor costs in the Azure Cost Management portal