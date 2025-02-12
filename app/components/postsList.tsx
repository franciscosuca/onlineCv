import Link from 'next/link';
import React from 'react';
import { ArrowIcon } from 'app/components/arrowIcon';
import { Post } from 'app/utils/utils';

interface PostsDetailsProps {
    posts: Post[];
}

export function PostList({ posts }: PostsDetailsProps) {
    return (
        <div>
            {posts.map((prop, index) => {
                return (
                    <div key={index} className="flex flex-col space-y-2 mb-4">
                        <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                            {prop.metadata.sdate} - {prop.metadata.edate}
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
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
}