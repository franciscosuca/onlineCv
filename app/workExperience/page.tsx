import { Timeline } from "../components/timeline"
import { Experience } from "../types/Experience"
import workExperienceData from "../data/workExperience.json"

export default function WorkExperience() {
  const workExperience = workExperienceData as Experience[];
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-mono font-bold tracking-tighter mb-8 border-b border-cyber-blue pb-2 inline-block">
        WORK EXPERIENCE
      </h1>
      <Timeline items={workExperience} />
    </div>
  );
}