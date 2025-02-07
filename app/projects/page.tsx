import { PostsDetails } from 'app/components/postsDetails'
import { getPosts } from 'app/utils/utils'

let projectPosts = getPosts('projects')

export default function page() { 
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Projects
            </h1>
            <PostsDetails posts={projectPosts}/>
        </section>
    )
}