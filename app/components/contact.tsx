'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaStackOverflow } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const contactOptions = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/franciscosusana/',
    icon: <FaLinkedin className="text-2xl" />,
    color: 'hover:text-[#0077b5]',
    borderColor: 'hover:border-[#0077b5]',
    description: 'Professional network & career updates'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/franciscosuca',
    icon: <FaGithub className="text-2xl" />,
    color: 'hover:text-[#333] dark:hover:text-white',
    borderColor: 'hover:border-[#333] dark:hover:border-white',
    description: 'Code repositories & open source projects'
  },
  {
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/5208441/imlearningdontjudgeme',
    icon: <FaStackOverflow className="text-2xl" />,
    color: 'hover:text-[#f48024]',
    borderColor: 'hover:border-[#f48024]',
    description: 'Technical questions & contributions'
  }
];

export function Contact() {
  return (
    <section id="contact" className="space-y-8">
      <h1 className="text-3xl font-mono font-bold tracking-tighter border-b border-cyber-blue pb-2 inline-block uppercase">
        Contact Me
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactOptions.map((option, index) => (
          <motion.a
            key={option.name}
            href={option.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group block p-6 border border-neutral-200 dark:border-neutral-800 rounded-sm bg-white dark:bg-hacker-black/80 backdrop-blur-sm transition-all duration-500 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] group-hover:shadow-[0_0_15px_rgba(0,243,255,0.1)] group-hover:border-cyber-blue/50"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`transition-all duration-500 text-neutral-600 dark:text-neutral-400 ${option.color}`}>
                {option.icon}
              </div>
              <FiArrowUpRight className="text-neutral-400 group-hover:text-cyber-blue transition-colors duration-500" />
            </div>
            
            <h3 className="font-mono font-bold text-xl mb-2 uppercase tracking-tight text-black dark:text-white">
              {option.name}
            </h3>
            
            <p className="font-mono text-sm text-neutral-700 dark:text-neutral-400 italic">
              {option.description}
            </p>
          </motion.a>
        ))}
      </div>

      <div className="text-center mt-12 p-8 border border-neutral-200 dark:border-neutral-800 rounded-sm bg-white dark:bg-hacker-black/80 backdrop-blur-sm shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)]">
        <p className="font-mono text-sm text-neutral-800 dark:text-neutral-400">
          Feel free to reach out on any of these platforms. I'm always open to discussing new opportunities, creative ideas or collaborations.
        </p>
      </div>
    </section>
  );
}
