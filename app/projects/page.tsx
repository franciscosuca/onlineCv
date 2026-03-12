import { PostList } from '../components/postsList'
import { Experience } from '../types/Experience';
import projectsData from '../data/projects.json';

export default function Page() {
    const projects = projectsData as Experience[];
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Projects
            </h1>
            <PostList posts={projects} />
        </section>
    )
}