
interface Post{
    metadata: {
        date: string;
        location: string;
        company: string;
        jobTitle: string;
    };
    content: string;
}

interface PostsDetailsProps{
    posts: Post[];
}

export function PostsDetails({ posts }: PostsDetailsProps) { 
    return (
        <div>
            {posts.map((prop, index) => (
                <div key={index} className="flex flex-col space-y-2 mb-4">
                    <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                    {prop.metadata.date}</p>
                    <p>{prop.metadata.location}, {prop.metadata.company}</p>
                    <p className="italic-text">{prop.metadata.jobTitle}</p>
                    <article className="prose">
                        {prop.content}
                    </article>
                </div>
            ))}
        </div>
    )
}