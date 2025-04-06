import { PostList } from 'app/components/postsList'
import { getPosts } from 'app/utils/utils'
import { useEffect } from 'react'

let projectPosts = getPosts('projects')

export default function page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Projects
            </h1>
            <PostList posts={projectPosts} />
        </section>
    )
}