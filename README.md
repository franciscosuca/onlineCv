# Portfolio Blog Starter

This is a porfolio site template complete with a blog. Includes:

- MDX and Markdown support
- Optimized for SEO (sitemap, robots, JSON-LD schema)
- RSS Feed
- Dynamic OG images
- Syntax highlighting
- Tailwind v4
- Vercel Speed Insights / Web Analytics
- Geist font

## Demo

https://portfolio-blog-starter.vercel.app

## How to Use

You can choose from one of the following two methods to use this repository:

### Deploy

Then, run Next.js in development mode:

```bash
pnpm dev
```

## How to generate data for the volunteering page

### Create a file 

On the path '/app/volunteering/posts', create a file with any name but in format '.mdx'

### Populate the file

On the file created on the previous step, fill the file with the following format:

``` 
---
date: '<month.year>'
company: '<company_name>'
location: '<location>'
jobTitle: '<jot_title>'
---

<Description about the position.>
```

Deploy it to the cloud with [Vercel](https://vercel.com/templates) ([Documentation](https://nextjs.org/docs/app/building-your-application/deploying)).
