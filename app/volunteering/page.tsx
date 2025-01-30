import { formatDate } from 'app/utils/utils'

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                My Volunteering
            </h1>
            {/* TODO: create a function that populates the page based on the 
                amount of volunteering experiences the user has
            */}
            <div className="flex flex-col space-y-2 mb-4">
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                    {formatDate('2022-01-01')}
                </p>
                <h1>Location</h1>
                <p>Position</p>
                <article className="prose">
                    Description of the volunteering experience.
                </article>
            </div>

            <div className="flex flex-col space-y-2 mb-4">
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                    {formatDate('2022-01-01')}
                </p>
                <h1>Location</h1>
                <p>Position</p>
                <article className="prose">
                    Description of the volunteering experience.
                </article>
            </div>
        </section>
    )
}