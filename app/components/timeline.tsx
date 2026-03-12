'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../types/Experience';
import { TechBadge } from './techBadge';

interface TimelineProps {
  items: Experience[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  // Sort items by date descending (newest first)
  const sortedItems = [...items].sort((a, b) => {
    const parseDate = (d: string) => {
      if (d.toLowerCase() === 'present') return new Date();
      const [m, y] = d.split('.');
      return new Date(parseInt(y), parseInt(m) - 1);
    };
    return parseDate(b.sdate).getTime() - parseDate(a.sdate).getTime();
  });

  return (
    <div className="relative py-12 px-4 md:px-0">
      {/* Central Vertical Line (Visible on md+) */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/50 dark:via-cyber-blue/30 to-transparent -translate-x-1/2 hidden md:block" />
      
      {/* Left-side Vertical Line (Mobile) */}
      <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-cyan-500/30 dark:bg-cyber-blue/20 md:hidden" />

      <div className="space-y-16">
        {sortedItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
            className={`relative flex items-center justify-between md:justify-normal group ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Pulsing Dot */}
            <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-cyber-blue rounded-full -translate-x-1/2 z-20 shadow-[0_0_10px_var(--color-cyber-blue)] group-hover:scale-150 transition-transform duration-500">
              <div className="absolute inset-0 bg-cyber-blue rounded-full animate-ping opacity-75" />
            </div>

            {/* Content Card */}
            <div className={`w-[calc(100%-3rem)] md:w-[45%] ml-10 md:ml-0 overflow-hidden relative group`}>
              {/* Terminal-like Header */}
              <div className="bg-neutral-100 dark:bg-neutral-800/50 px-4 py-1.5 flex items-center justify-between border-x border-t border-neutral-200 dark:border-neutral-800 rounded-t-sm">
                <div className="flex space-x-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-400/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                  <div className="w-2 h-2 rounded-full bg-green-400/50" />
                </div>
                <span className="font-mono text-[10px] text-neutral-600 dark:text-neutral-400 uppercase tracking-tighter">
                  {item.company} // v{sortedItems.length - index}.0
                </span>
              </div>

              {/* Main Body */}
              <div className="p-6 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-hacker-black/80 backdrop-blur-sm group-hover:border-cyber-blue/50 transition-all duration-500 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] group-hover:shadow-[0_0_15px_rgba(0,243,255,0.1)]">
                <div className="flex flex-col mb-4">
                  <span className="font-mono text-[11px] text-cyber-blue tracking-widest uppercase mb-1">
                    [{item.sdate} &gt;&gt; {item.edate}]
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 uppercase">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-neutral-700 dark:text-neutral-500 mt-1 italic">
                    {item.location}
                  </p>
                </div>
                
                <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-400 border-l-2 border-neutral-300 dark:border-neutral-800 pl-4 py-1">
                  {item.summary}
                </p>

                {item.stack && item.stack.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                )}

                {/* Cyber Accents */}
                <div className="absolute bottom-1 right-1 font-mono text-[8px] opacity-20 group-hover:opacity-100 transition-opacity text-cyber-blue">
                  0x{item.id.substring(0, 4).toUpperCase()}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
