import { PostList } from '../components/postsList'
import { Experience } from '../types/Experience';
import { queryItems } from '../utils/cosmosDB'

// Force this page to be dynamic and not statically generated
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Page() {
    let volunteering = await queryItems<Experience>('volunteering'); // Assuming 'volunteering' is the partition key for volunteering posts
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                My Volunteering
            </h1>
            <PostList posts={volunteering}/>
        </section>
    )
}