import { ArrowIcon } from './arrowIcon';

export default function Footer() {
  return (
    <footer className="mb-16 border-t border-neutral-200 dark:border-neutral-800 pt-8 text-center md:text-left">
      <p className="mt-8 text-xs font-mono text-neutral-500 dark:text-neutral-600 uppercase tracking-tighter">
        © {new Date().getFullYear()} / MIT LICENSED / BY FRANCISCO
      </p>
    </footer>
  )
}
