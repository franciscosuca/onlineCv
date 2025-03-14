import { PostContent } from "app/components/postContent";
import { getPosts } from "app/utils/utils";

// This function gets called at build time
export async function generateStaticParams(){
    let workPosts = await getPosts("workExperience");
    return workPosts.map(post => ({
          slug: post.metadata.company 
    }));
}

export default async function Page({ params }) {
    const { slug } = await params;
    let workPosts = await getPosts("workExperience");
    let workPost = workPosts.find(post =>
        post.metadata.company === slug);
    
    return (
        <div>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Experience at {slug}
            </h1>
            {workPost ? (
                <PostContent workPost={workPost} slug={slug} />
            ) : (
                <p>Post not found</p>
            )}
        </div>
    );
}