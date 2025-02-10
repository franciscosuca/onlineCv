import { PostList } from 'app/components/postsList';
import { getPosts  } from 'app/utils/utils'

let volunteeringPosts = getPosts('volunteering');

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                My Volunteering
            </h1>
            <PostList posts={volunteeringPosts}/>
        </section>
    )
}