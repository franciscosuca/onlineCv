import { PostList } from "app/components/postsList"
import { getPosts } from "app/utils/utils";

let workPosts = getPosts("workExperience");

export default function Page() {
    return (
        <section>
            <h1>Work Experience</h1>
            <PostList posts={ workPosts } />
        </section>
    );
}