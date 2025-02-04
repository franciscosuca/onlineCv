import { formatDate, getVolunteerPosts  } from 'app/utils/utils'

let posts = getVolunteerPosts();

export default function Page() {
    return (
        <section>
            
            {/*
                1. ✅ understand the format of the data used in app/posts
                2. ✅ Mock a file similar to app/posts
                3. ✅ implement a function that reads the data in app/volunteer/posts
                4. 🚧 change structure for 'metadata' and loop through the different volunteering posts
                5. 🚧 display the data in the page with a more readable style.
            */}

            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                My Volunteering
            </h1>
            {posts.map((post, index) => (
                <div key={index} className="flex flex-col space-y-2 mb-4">
                    <p>Title:{post.metadata.title}</p>
                    <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                        {formatDate(post.metadata.publishedAt)}
                    </p>
                    <h1>Location: {post.metadata.title}</h1>
                    <p>Position: {post.metadata.title}</p>
                    <article className="prose">
                        {post.metadata.summary}
                    </article>
                </div>
            ))}
        </section>
    )
}