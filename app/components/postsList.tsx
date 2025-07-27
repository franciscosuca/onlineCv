import React from "react";
import { Experience } from "app/types/Experience";
import { EmbededLinks } from "./embededLinks";

interface PostsDetailsProps {
  posts: Experience[];
}

// Order the post by start date
const orderPostsByDate = (posts: Experience[]) => {
  return posts.sort((a, b) => {
    // Parse dates in MM.YYYY format, handle "Present" case
    const parseDate = (dateStr: string): Date => {
      if (dateStr.toLowerCase() === 'present') {
        return new Date(); // Current date for "Present"
      }
      
      // Split MM.YYYY format
      const [month, year] = dateStr.split('.');
      // Create date with first day of the month (day=1)
      return new Date(parseInt(year), parseInt(month) - 1, 1);
    };
    
    const dateA = parseDate(a.sdate);
    const dateB = parseDate(b.sdate);
    return dateB.getTime() - dateA.getTime(); // Sort in descending order (newest first)
  });
}

export function PostList({ posts }: PostsDetailsProps) {
  const orderedPosts = orderPostsByDate(posts);
  return (
    <div>
      {orderedPosts.map((prop, index) => {
        return (
          <div key={index} className="flex flex-col space-y-2 mb-4">
            <h1 className="text-xl font-semibold">
              {prop.title}
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
