'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../types/Experience';

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
    <div className="relative py-10">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-800 -translate-x-1/2 hidden md:block" />
      
      <div className="space-y-12">
        {sortedItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex items-center justify-between md:justify-normal group ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Dot Animation */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white dark:bg-hacker-black border-2 border-cyber-blue rounded-full -translate-x-1/2 z-10 group-hover:scale-125 transition-transform" />

            {/* Content Card */}
            <div className={`w-[calc(100%-3rem)] md:w-[45%] ml-12 md:ml-0 p-6 rounded-sm border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm shadow-[4px_4px_0px_rgba(0,0,0,0.1)] dark:shadow-[4px_4px_0px_var(--color-cyber-blue)] hover:border-cyber-blue transition-colors`}>
              <span className="font-mono text-xs text-cyber-blue uppercase tracking-tighter">
                {item.sdate} — {item.edate}
              </span>
              <h3 className="text-xl font-mono font-bold mt-1 mb-1">{item.title}</h3>
              <div className="text-sm font-medium mb-4 opacity-80">
                {item.company} · {item.location}
              </div>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {item.summary}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
