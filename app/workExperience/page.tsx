import { PostList } from "../components/postsList"
import { Experience } from "../types/Experience"
import workExperienceData from "../data/workExperience.json"

export default async function WorkExperience() {
  const workExperience = workExperienceData as Experience[];
  return (
    <div>
      <h1>Work Experience</h1>
      <PostList posts={workExperience} />
    </div>
  );
}