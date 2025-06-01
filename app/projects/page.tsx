import { PostList } from 'app/components/postsList'
import { Experience } from 'app/types/Experience';
import { queryItems } from 'app/utils/cosmosDB'

export default async function page() {
    let projecExperience = await queryItems<Experience>('research'); //TODO: change the partitionKey to the one used for projects in CosmosDB
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Projects
            </h1>
            <PostList posts={projecExperience} />
        </section>
    )
}