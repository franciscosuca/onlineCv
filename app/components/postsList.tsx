import Link from 'next/link';
import React from 'react';
import { ArrowIcon } from 'app/components/arrowIcon';

interface Post {
    metadata: {
        date: string;
        location: string;
        company: string;
        jobTitle: string;
        summary: string
    };
    content: string;
}

interface PostsDetailsProps {
    posts: Post[];
}

export function PostList({ posts }: PostsDetailsProps) {
    return (
        <div>
            {posts.map((prop, index) => {
                console.log("slug: ",prop.metadata.company);
                return (
                    <div key={index} className="flex flex-col space-y-2 mb-4">
                        <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                            {prop.metadata.date}
                        </p>
                        <p>{prop.metadata.location}, {prop.metadata.company}</p>
                        <p className="italic-text">{prop.metadata.jobTitle}</p>
                        <article className="prose">
                            {prop.metadata.summary}
                        </article>
                        {prop.content.length > 0 ? (
                            <Link
                                href={`/workExperience/${prop.metadata.company}`}
                                className="flex flex-col space-y-1 mb-4">
                                <div className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-500">
                                    <ArrowIcon />
                                    <p className="ml-2 h-7 underline">
                                        {`More about my experience in ${prop.metadata.company}`}
                                    </p>
                                </div>
                            </Link>
                        ) : (
                            <p></p> //TODO: get rid of this
                        )}
                    </div>
                );
            })}
        </div>
    );
}