'use client';

import React from 'react';
import { 
  SiSharp, SiJavascript, SiPython, SiGooglecloud, 
  SiDotnet, SiReact, SiGitlab, SiPostgresql, SiDocker, 
  SiKubernetes, SiAnsible, SiTypescript, SiNodedotjs 
} from 'react-icons/si';
import { motion } from 'framer-motion';

const iconMap: Record<string, any> = {
  'C#': SiSharp,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'Python': SiPython,
  'AZ/GCP': SiGooglecloud,
  '.NET': SiDotnet,
  'React/React Native': SiReact,
  'GitLab/DevOps Pipelines': SiGitlab,
  'SQL/NoSQL': SiPostgresql,
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'Ansible': SiAnsible,
  'Node.js': SiNodedotjs,
};

interface SkillData {
  name: string;
  totalYears: number;
}

export const SkillIconGrid = ({ skills }: { skills: SkillData[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl mx-auto">
      {skills.map((skill, index) => {
        const Icon = iconMap[skill.name] || SiJavascript;
        return (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group relative p-6 border border-neutral-200 dark:border-neutral-800 rounded-sm bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm shadow-[4px_4px_0px_rgba(0,0,0,0.1)] dark:shadow-[4px_4px_0px_var(--color-cyber-blue)] hover:border-cyber-blue transition-all flex flex-col items-center justify-center text-center"
          >
            <div className="text-4xl mb-3 text-neutral-600 dark:text-neutral-400 group-hover:text-cyber-blue transition-colors">
              <Icon />
            </div>
            <h4 className="font-mono text-xs uppercase tracking-widest font-bold mb-1 group-hover:text-cyber-blue transition-colors">
              {skill.name}
            </h4>
            <div className="font-mono text-[10px] text-neutral-500">
              {skill.totalYears} YEARS EXP
            </div>
            
            {/* Experience Bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-cyber-blue transition-all duration-500 ease-out" 
                 style={{ width: `${Math.min((skill.totalYears / 10) * 100, 100)}%` }} 
            />
          </motion.div>
        );
      })}
    </div>
  );
};
