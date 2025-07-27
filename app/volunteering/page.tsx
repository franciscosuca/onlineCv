import { PostList } from 'app/components/postsList'
import { Experience } from 'app/types/Experience';
import { queryItems } from 'app/utils/cosmosDB'

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