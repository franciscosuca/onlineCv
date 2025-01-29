import { formatDate } from 'app/utils/utils'

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                My Volunterring
            </h1>
            {/* TODO: use the same format as app/blog/[slug]/page.tsx 
                or enable a link for each entry to redirect the user 
                to another page with all the details about the volunteering experience.
            */}
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate('2022-01-01')}
                </p>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {`Position`}
                </p>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {`Location`}
                </p>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {`Description of the volunteering experience.`}
                </p>
            </div>
        </section>
    )
}