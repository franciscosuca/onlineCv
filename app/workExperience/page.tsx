import { PostsDetails } from "app/components/postsDetails"
import { getPosts } from "app/utils/utils";

let workPosts = getPosts("workExperience");

export default function Page() {
    return (
        <section>
            <h1>Work Experience</h1>
            <PostsDetails posts={ workPosts } />
        </section>
    );
}