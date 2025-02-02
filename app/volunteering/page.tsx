import { formatDate, getVolunteerPosts  } from 'app/utils/utils'

let test = getVolunteerPosts()[0];

export default function Page() {
    return (
        <section>
            
            {/*
                1. ✅ understand the format of the data used in app/posts
                2. ✅ Mock a file similar to app/posts
                3. ✅ implement a function that reads the data in app/volunteer/posts
                4. 🕐 change structure for 'metadata' and loop through the different volunteering posts
            */}

            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                My Volunteering
            </h1>
            //TODO: loop through all the volunteering posts
            <div className="flex flex-col space-y-2 mb-4">
                <p>Test:{test.metadata.title}</p>
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                    {formatDate(test.metadata.publishedAt)}
                </p>
                <h1>Location: {test.metadata.title}</h1>
                <p>Position: {test.metadata.title}</p>
                <article className="prose">
                    {test.metadata.summary}
                </article>
            </div>
        </section>
    )
}