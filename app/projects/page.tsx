import { PostList } from '../components/postsList'
import { Experience } from '../types/Experience';
import { queryItems } from '../utils/cosmosDB'

// Force this page to be dynamic and not statically generated
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function page() {
    let projecExperience = await queryItems<Experience>('project');
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Projects
            </h1>
            <PostList posts={projecExperience} />
        </section>
    )
}