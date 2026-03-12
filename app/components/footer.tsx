import { ArrowIcon } from './arrowIcon';

export default function Footer() {
  return (
    <footer className="mb-16 border-t border-neutral-200 dark:border-neutral-800 pt-8">
      <ul className="font-mono text-xs uppercase tracking-widest flex flex-col space-x-0 space-y-2 text-neutral-500 md:flex-row md:space-x-6 md:space-y-0 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center transition-all hover:text-cyber-blue"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/franciscosusana/"
          >
            <ArrowIcon />
            <p className="ml-2">LinkedIn</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-cyber-blue"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/franciscosuca"
          >
            <ArrowIcon />
            <p className="ml-2">GitHub</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-cyber-blue"
            rel="noopener noreferrer"
            target="_blank"
            href="https://stackoverflow.com/users/5208441/imlearningdontjudgeme "
          >
            <ArrowIcon />
            <p className="ml-2">Stackoverflow</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-xs font-mono text-neutral-500 dark:text-neutral-600 uppercase tracking-tighter">
        © {new Date().getFullYear()} / MIT LICENSED / BY FRANCISCO
      </p>
    </footer>
  )
}
