import { PostList } from '../components/postsList'
import { Experience } from '../types/Experience';
import { queryItems } from '../utils/cosmosDB'

// Force this page to be dynamic and not statically generated
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Page() {
    try {
        let volunteering = await queryItems<Experience>('volunteering');
        return (
            <section>
                <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                    My Volunteering
                </h1>
                <PostList posts={volunteering}/>
            </section>
        )
    } catch (error) {
        return (
            <section>
                <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                    My Volunteering
                </h1>
                <p>Error loading volunteering: {error.message}</p>
            </section>
        );
    }
}