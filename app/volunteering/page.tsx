import { PostList } from '../components/postsList'
import { Experience } from '../types/Experience';
import volunteeringData from '../data/volunteering.json';

export default function Page() {
    const volunteering = volunteeringData as Experience[];
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                My Volunteering
            </h1>
            <PostList posts={volunteering}/>
        </section>
    )
}