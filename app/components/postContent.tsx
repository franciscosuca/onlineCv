import Link from "next/link";

interface PostContentProps {
  workPost: {
    metadata: { //TODO: this type is duplicated in app/utils/utils.ts
      date: string;
      location: string;
      company: string;
      jobTitle: string;
      summary: string;
    };
    content: string;
    slug: string;
  }
}

export function PostContent( {workPost} : PostContentProps) {
  return (
    <div>
      <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
          {workPost.metadata.date}
      </p>
      <p>{workPost.metadata.location}, {workPost.metadata.company}</p>
      <p className="italic-text">{workPost.metadata.jobTitle}</p>
      {workPost.content.split('*').map((task, index) => (
        index === 0 ? null:
          <div> <br />
            <article key={index} className="prose">- {task}</article>
          </div>
        ))
      }
      <br />
      <Link
        href={`/workExperience`}
        className="flex flex-col space-y-1 mb-4 underline">
        Back to Work Experiences
      </Link>
    </div>
  );
}