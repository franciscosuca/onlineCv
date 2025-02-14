import { getPosts } from 'app/utils/utils'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
    let posts = getPosts('workExperience').map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.metadata.company,
    }))
    return [...posts]
  }