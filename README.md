# Portfolio Starter

This is my starter portfolio that I worked on based on the template from [Vercel](https://portfolio-blog-starter.vercel.app).

## Progress

- 🕐Adapt pipeline
- 🚧Test container in the cloud
- ✅Solve issue to fetch experiences from container
- ✅Solve styles missed when running container

## Versioning

I follow the format from [semantic-release](https://semantic-release.gitbook.io/semantic-release).

## Demo

Demonstration of the original website cloned from Vercel, with the blogs pages.

https://portfolio-blog-starter.vercel.app

**NOTE**: This URL will be updated with a website that relies on the code used by this project.

## How to Use

Clone this repository and then run:
```bash
npm install --legacy-peer-deps
```

Afterwards
```bash
npm run dev
```

## Test build before triggering Github actions

```bash
npm run build
```

## Run with Docker

To run the application using Docker:

### Build the Docker image

```bash
docker build -t online-cv .
```

### Run the Docker container

```bash
docker run -p 3000:8080 
  -e COSMOS_ENDPOINT=https://your-cosmos-account.documents.azure.com:443/ 
  -e COSMOS_KEY=your_cosmos_key_here 
  -e COSMOS_DATABASE=onlineCv 
  -e COSMOS_CONTAINER=experience 
  -e NODE_ENV=production 
  online-cv
```

**Important**: Do not use quotes around the environment variable values when using `-e` flag.

**Environment Variables:**

- `COSMOS_ENDPOINT`: Your Azure Cosmos DB endpoint URL (without quotes)
- `COSMOS_KEY`: Your Azure Cosmos DB access key (without quotes)
- `COSMOS_DATABASE`: Database name (defaults to "onlineCv")
- `COSMOS_CONTAINER`: Container name (defaults to "experience")
- `NODE_ENV`: Set to "production" for production builds

**Alternative with .env file:**

Create a `.env` file with these variables (without quotes):
```env
COSMOS_ENDPOINT=https://your-cosmos-account.documents.azure.com:443/
COSMOS_KEY=your_cosmos_key_here
COSMOS_DATABASE=onlineCv
COSMOS_CONTAINER=experience
NODE_ENV=production
```

Then run:
```bash
docker run -p 3000:8080 --env-file .env online-cv
```

The application will be available at `http://localhost:3000`

## How to generate data for the projects/volunteering/workExperience page(s)

### Create a file 

On the path '/app/<folder>/posts', create a file with any name but in format '.mdx'

### Populate the file

On the file created on the previous step, fill the file with the following format:

``` 
---
sdate: '<start_month.year>'
edate: '<end_month.year>'
company: '<company_name>'
location: '<location>'
jobTitle: '<jot_title>'
---

* <Description about the position.>
```


## Contact

Please initiate an issue to report any problems with this project.