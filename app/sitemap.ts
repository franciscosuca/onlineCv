import { getPosts } from 'app/utils/utils'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export const dynamic = 'force-static'

export default async function sitemap() {
    let posts = getPosts('workExperience').map((post) => ({
      url: `${baseUrl}/workExperience/${post.slug}`,
      lastModified: post.metadata.company,
    }))

    let routes = ['', '/blog'].map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    }))

    return [...routes, ...posts]
}