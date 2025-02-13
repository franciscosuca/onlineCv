import { GetServerSideProps } from 'next'
import { getPosts } from 'app/utils/utils'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
    let blogs = getPosts('workExperience').map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.metadata.company,
    }))
    let routes = ['', '/blog'].map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    }))
    return [...routes, ...blogs]
  }

// const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//   <url>
//     <loc>${baseUrl}</loc>
//     <changefreq>daily</changefreq>
//     <priority>1.0</priority>
//   </url>
//   ${posts
//     .map((post) => {
//       return `
//     <url>
//         <loc>${baseUrl}/posts/${post.slug}</loc>
//         <changefreq>weekly</changefreq>
//         <priority>0.8</priority>
//     </url>
//   `
//     })
//     .join('')}
// </urlset>`

// export const getServerSideProps: GetServerSideProps = async ({ res }) => {
//   try {
//     const posts = await getPosts('workExperience')
//     const sitemap = createSitemap(posts)

//     res.setHeader('Content-Type', 'text/xml')
//     res.write(sitemap)
//     res.end()

//     return {
//       props: {},
//     }
//   } catch (error) {
//     console.error('Failed to generate sitemap:', error)
//     return {
//       notFound: true,
//     }
//   }
// }

// export default function Sitemap() {
//   return null
// }