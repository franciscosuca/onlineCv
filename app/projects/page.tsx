import { PostList } from '../components/postsList'
import { Experience } from '../types/Experience';
import { queryItems } from '../utils/cosmosDB'

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