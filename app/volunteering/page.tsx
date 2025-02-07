import { getPosts  } from 'app/utils/utils'

let posts = getPosts('volunteering');

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                My Volunteering
            </h1>
            {posts.map((post, index) => (
                <div key={index} className="flex flex-col space-y-2 mb-4">
                    <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                    {post.metadata.date}</p>
                    <p>{post.metadata.location}, {post.metadata.company}</p>
                    <p className="italic-text">{post.metadata.jobTitle}</p>
                    <article className="prose">
                        {post.content}
                    </article>
                </div>
            ))}
        </section>
    )
}