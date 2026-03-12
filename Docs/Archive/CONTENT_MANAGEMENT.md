# Content Generation - Cosmos DB Version

## How to add data for the projects/volunteering/workExperience pages

### Overview

Content is now managed through **Azure Cosmos DB**. Each item is stored as a JSON document in the Cosmos DB container.

### Required JSON Document Format

Each document in Cosmos DB must follow this structure:

```json
{
  "id": "unique-identifier",
  "type": "workexperience|project|volunteering",
  "sdate": "MM.YYYY",
  "edate": "MM.YYYY|Present",
  "company": "Company/Organization Name",
  "location": "City, Country",
  "title": "Position/Project Title",
  "summary": "Description of the role/project",
  "skills": "Comma-separated skills used",
  "link": "https://optional-external-link.com"
}
```

### Field Descriptions

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `id` | string | ✅ | Unique identifier for the document | `"work-gea-2022"` |
| `type` | string | ✅ | Category of content (determines which page it appears on) | `"workexperience"`, `"project"`, `"volunteering"` |
| `sdate` | string | ✅ | Start date in MM.YYYY format | `"02.2022"` |
| `edate` | string | ✅ | End date in MM.YYYY format or "Present" | `"Present"` or `"08.2024"` |
| `company` | string | ✅ | Company or organization name | `"GEA"` |
| `location` | string | ✅ | Location (City, Country format recommended) | `"Germany"` |
| `title` | string | ✅ | Job title, project name, or role | `"IoT Software Engineer"` |
| `summary` | string | ✅ | Detailed description of responsibilities/achievements | `"Built systems for device health monitoring..."` |
| `skills` | string | ✅ | Technologies, tools, or skills used | `"IoT, Azure, Node.js, Docker"` |
| `link` | string | ❌ | Optional external link (portfolio, GitHub, etc.) | `"https://github.com/user/project"` |

### How to Add New Content

1. **Access Azure Cosmos DB**: Use Azure Portal, Azure CLI, or Cosmos DB SDK
2. **Navigate to your container**: Access your configured database and container
3. **Create new document**: Add a new JSON document with the required fields
4. **Set the correct type**: Ensure the `type` field matches the page where you want it to appear
5. **Save the document**: The content will automatically appear on your website

### Environment Variables Required

```bash
COSMOS_CONNECTION_STRING="your-cosmos-connection-string"
# OR alternatively:
COSMOS_ENDPOINT="https://your-account.documents.azure.com:443/"
COSMOS_KEY="your-cosmos-primary-key"
COSMOS_DATABASE="your-database-name"
COSMOS_CONTAINER="your-container-name"
```
