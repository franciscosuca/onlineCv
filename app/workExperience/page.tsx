import { PostList } from "../components/postsList"
import { queryItems } from "../utils/cosmosDB"
import { Experience } from "../types/Experience"

// Force this page to be dynamic and not statically generated
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function WorkExperience() {
  try {
    const workExperience = await queryItems<Experience>("workexperience");
    return (
      <div>
        <h1>Work Experience</h1>
        <PostList posts={workExperience} />
      </div>
    );
  } catch (error) {
    return (
      <div>
        <h1>Work Experience</h1>
        <p>Error loading work experience: {error.message}</p>
      </div>
    );
  }
}