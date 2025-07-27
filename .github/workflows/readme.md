# Azure Authentication Setup for GitHub Actions

This guide walks you through setting up Azure authentication for GitHub Actions to deploy to Azure Web App.

## Prerequisites

- Azure CLI installed and configured
- GitHub repository with appropriate permissions
- An Azure subscription with a resource group and web app

## Step 1: Initial Azure Setup

### Login to Azure CLI

```bash
az login
```

### Create the App Registration

```bash
az ad app create --display-name "GitHub-Actions-OnlineCV" --query appId -o tsv
```

**📝 Important:** Save the output (Application/Client ID) - you'll need this for subsequent steps.

### Get Required Azure Information

```bash
# Get your tenant ID
az account show --query tenantId -o tsv

# Get your subscription ID
az account show --query id -o tsv
```

**📝 Important:** Save both the tenant ID and subscription ID for later use.

## Step 2: Create Service Principal

Replace `<APP_ID>` with the Application ID from Step 1:

```bash
az ad sp create --id <APP_ID>
```

## Step 3: Create Federated Credentials

Check if the application has already some federated-credentials created:
```bash
az ad app federated-credential list --id <APP_ID>
```

Replace the following values with your actual information:

- `<APP_ID>`: Application ID from Step 1
- `your-github-username`: Your actual GitHub username

```bash
az ad app federated-credential create \
  --id <APP_ID> \
  --parameters '{
    "name": "GitHub-Actions-OnlineCV",
    "issuer": "https://token.actions.githubusercontent.com",
    "subject": "repo:franciscosuca/onlineCv:environment:production",
    "description": "GitHub Actions deployment from main branch",
    "audiences": ["api://AzureADTokenExchange"]
  }'
```

## Step 4: Assign Azure Permissions

### Option A: Resource Group Level Permissions (Recommended)

Replace the following values:

- `<SUBSCRIPTION_ID>`: Your subscription ID from Step 1
- `your-resource-group-name`: Your actual resource group name

```bash
# Set your resource group name
RESOURCE_GROUP="your-resource-group-name"

# Get the service principal object ID
SP_OBJECT_ID=$(az ad sp list --display-name "GitHub-Actions-OnlineCV" --query [0].id -o tsv)

# Assign Contributor role to the resource group
az role assignment create \
  --assignee $SP_OBJECT_ID \
  --role Contributor \
  --scope /subscriptions/<SUBSCRIPTION_ID>/resourceGroups/$RESOURCE_GROUP
```

### Option B: Web App Specific Permissions (More Restrictive)

Replace `<WEBAPP_NAME>` with your actual web app name:

```bash
az role assignment create \
  --assignee $SP_OBJECT_ID \
  --role "Website Contributor" \
  --scope /subscriptions/<SUBSCRIPTION_ID>/resourceGroups/$RESOURCE_GROUP/providers/Microsoft.Web/sites/<WEBAPP_NAME>
```

## Step 5: Configure GitHub Repository Secrets

In your GitHub repository:

1. Go to **Settings** > **Secrets and variables** > **Actions**
2. Create the following repository secrets:

| Secret Name | Value | Description |
|-------------|-------|-------------|
| `AZURE_CLIENT_ID` | Application (Client) ID from Step 1 | Azure App Registration ID |
| `AZURE_TENANT_ID` | Tenant ID from Step 1 | Azure tenant identifier |
| `AZURE_SUBSCRIPTION_ID` | Subscription ID from Step 1 | Azure subscription identifier |

## Step 6: Update Workflow Configuration

Update the `AZURE_WEBAPP_NAME` environment variable in your GitHub Actions workflow file with your actual Azure Web App name.
