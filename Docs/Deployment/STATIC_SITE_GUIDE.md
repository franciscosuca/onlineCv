# Step-by-Step Guide: Converting Next.js Project to Static Site with API Integration on Azure

## 1. Update Next.js for Static Export
- Ensure all pages use Static Site Generation (`getStaticProps`) or are pure static (no `getServerSideProps`).
- For dynamic data, use client-side fetching (e.g., `fetch` or `axios`) to call your API from the browser.

## 2. Remove Direct Database Connections
- Disconnect any server-side database calls in your Next.js code.
- Move all dynamic data fetching to client-side code that calls your API.

## 3. Configure Next.js for Static Export
- In `next.config.js`, add or update:
  ```js
  module.exports = {
    output: 'export',
  }
  ```
- This enables `next export` to generate static files.

## 4. Build and Export Static Files
- Run:
  ```sh
  npm run build
  npx next export
  ```
- This creates an `out` directory with your static site.

## 5. Prepare for Azure Static Web Apps
- Ensure your static files are in the `out` directory.
- Remove any server-specific files (like `api` folder in Next.js).

## 6. Deploy to Azure Static Web Apps
- Go to Azure Portal and create a Static Web App.
- Connect your GitHub repo or upload the `out` directory.
- Set the app artifact location to `out`.

## 7. Update Environment Variables (if needed)
- If your API requires keys or endpoints, set them in Azure Static Web Apps settings.

## 8. Test Your Static Site
- After deployment, visit your site and ensure client-side API calls work.

---

## Main Difference: API Calls vs. Direct DB Calls

- **Direct DB Method Calls:**
  - Your app connects directly to the database (e.g., CosmosDB) using credentials.
  - Usually done server-side (Node.js, Next.js API routes).
  - Requires backend/server, exposes DB credentials, and is not possible in static hosting.

- **API Calls:**
  - Your app sends HTTP requests to an API endpoint (e.g., Azure Function, REST API).
  - The API server handles DB connections securely and returns only the needed data.
  - Works with static sites, keeps DB credentials hidden, and is more secure and scalable.

**Summary:**
- Both are ways to get data, but direct DB calls require a backend, while API calls allow your static site to fetch data securely from a remote service.
- For static hosting, always use API calls.
