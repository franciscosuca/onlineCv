'use client';

import React from 'react';
import { 
  SiSharp, SiJavascript, SiPython, SiGooglecloud, 
  SiDotnet, SiReact, SiGitlab, SiPostgresql, SiDocker, 
  SiKubernetes, SiAnsible, SiTypescript, SiNodedotjs,
  SiCisco, SiMongodb
} from 'react-icons/si';
import { MdCellTower } from "react-icons/md";
import { VscAzure, VscAzureDevops } from 'react-icons/vsc';

const iconMap: Record<string, any> = {
  'C#': SiSharp,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'React': SiReact,
  'Python': SiPython,
  'AZ': VscAzure,
  'GCP': SiGooglecloud,
  '.NET': SiDotnet,
  'DevOps Pipelines': VscAzureDevops,
  'GitLab Pipelines': SiGitlab,
  'SQL': SiPostgresql,
  'NoSQL': SiMongodb,
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'Ansible': SiAnsible,
  'Node.js': SiNodedotjs,
  'Cisco': SiCisco,
  '4G-WiMax': MdCellTower,
  '2G/3G/4G/5G': MdCellTower,
  '2G/3G/4G': MdCellTower,
};

interface TechBadgeProps {
  name: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name }) => {
  const Icon = iconMap[name] || null;

  return (
    <div className="flex items-center space-x-1.5 px-2 py-1 rounded-sm border border-cyan-500/30 bg-cyan-500/5 text-cyan-500 dark:text-cyan-400 group/badge hover:border-cyan-500/60 transition-colors duration-300">
      {Icon && <Icon className="text-xs group-hover/badge:scale-110 transition-transform" />}
      <span className="font-mono text-[10px] uppercase tracking-wider font-bold">
        {name}
      </span>
    </div>
  );
};
