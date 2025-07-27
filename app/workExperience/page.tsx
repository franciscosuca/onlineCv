import { PostList } from "app/components/postsList"
import { queryItems } from "app/utils/cosmosDB"
import { Experience } from "app/types/Experience"

export default async function Page() {
  let workExperience = await queryItems<Experience>("workexperience");
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Work Experience
      </h1>
      <PostList posts={workExperience} />
    </section>
  );
}