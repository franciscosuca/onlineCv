import React from "react";
import { Experience } from "../types/Experience";
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

import { FiExternalLink, FiFileText, FiGithub } from "react-icons/fi";

export function PostList({ posts }: PostsDetailsProps) {
  const orderedPosts = orderPostsByDate(posts);
  return (
    <div className="space-y-8">
      {orderedPosts.map((item, index) => {
        return (
          <div key={index} className="group p-6 border border-neutral-200 dark:border-neutral-800 rounded-sm bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm shadow-[4px_4px_0px_rgba(0,0,0,0.1)] dark:shadow-[4px_4px_0px_var(--color-cyber-blue)] hover:border-cyber-blue transition-all">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="font-mono text-xs text-cyber-blue uppercase tracking-widest">{item.sdate} — {item.edate}</span>
                <h2 className="text-xl font-mono font-bold mt-1 text-black dark:text-white uppercase tracking-tight">{item.title}</h2>
                <p className="text-sm font-medium opacity-70 italic">{item.company} · {item.location}</p>
              </div>
            </div>
            
            <article className="prose prose-sm dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              {item.summary}
            </article>

            {/* Resource Hub */}
            {(item.link || (item.resources && item.resources.length > 0)) && (
              <div className="border-t border-neutral-100 dark:border-neutral-800 pt-4 mt-4">
                <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-3">Resource Hub</h4>
                <div className="flex flex-wrap gap-4">
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs font-mono text-cyber-blue hover:underline">
                      <FiExternalLink className="mr-1" /> ORIGIN
                    </a>
                  )}
                  {item.resources?.map((res, i) => (
                    <a key={i} href={res.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-xs font-mono text-cyber-blue hover:underline">
                      {res.label.toLowerCase().includes('github') || res.label.toLowerCase().includes('repo') ? <FiGithub className="mr-1" /> : <FiFileText className="mr-1" />}
                      {res.label.toUpperCase()}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
