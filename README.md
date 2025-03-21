# Portfolio Starter

This is my starter portfolio that I worked on based on the template from [Vercel](https://portfolio-blog-starter.vercel.app).

## Versioning

I follow the format from [semantic-release](https://semantic-release.gitbook.io/semantic-release).

## Demo

Demonstration of the original website cloned from Vercel, with the blogs pages.

https://portfolio-blog-starter.vercel.app

**NOTE**: This URL will be updated with a website that relies on the code used by this project.

## How to Use

Clone this repository and then run:
```bash
pnpm install
```

Afterwards
```bash
pnpm dev
```

## Test build before triggering Github actions

````
pnpm build
````

**Not using pnpm?** Check [pnpm's website](https://pnpm.io/installation) to know how to install it.

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