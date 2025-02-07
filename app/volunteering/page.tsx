import { PostsDetails } from 'app/components/postsDetails';
import { getPosts  } from 'app/utils/utils'

let volunteeringPosts = getPosts('volunteering');

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                My Volunteering
            </h1>
            <PostsDetails posts={volunteeringPosts}/>
        </section>
    )
}