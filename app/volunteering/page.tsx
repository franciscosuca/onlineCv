import { PostList } from '../components/postsList'
import { Experience } from '../types/Experience';
import { queryItems } from '../utils/cosmosDB'

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