import React from "react";
import { Experience } from "app/types/Experience";
import { EmbededLinks } from "./embededLinks";

interface PostsDetailsProps {
  posts: Experience[];
}

export function PostList({ posts }: PostsDetailsProps) {
  return (
    <div>
      {posts.map((prop, index) => {
        return (
          <div key={index} className="flex flex-col space-y-2 mb-4">
            <h1 className="text-xl font-semibold">
              {prop.jobTitle}
            </h1>
            <span className="text-neutral-600 dark:text-neutral-400 tabular-nums">
              {prop.location}, {prop.company}<br />
              {prop.sdate} - {prop.edate}
            </span>
            <article className="prose">{prop.summary}</article>
                {prop.link ? (
                    <EmbededLinks url = { prop.link } />
                ): null}
          </div>
        );
      })}
    </div>
  );
}
