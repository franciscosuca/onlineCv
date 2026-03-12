import { Timeline } from "./components/timeline";
import { PostList } from "./components/postsList";
import { Experience } from "./types/Experience";

import workExperienceData from "./data/workExperience.json";
import projectsData from "./data/projects.json";
import volunteeringData from "./data/volunteering.json";

export default function Page() {
  const workExperience = workExperienceData as Experience[];
  const projects = projectsData as Experience[];
  const volunteering = volunteeringData as Experience[];

  return (
    <div className="flex flex-col space-y-24 pb-20">
      {/* About Section */}
      <section id="about" className="space-y-8 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-mono font-bold tracking-tighter uppercase mb-2">
          Francisco Susana
        </h1>
        <p className="text-sm font-mono text-cyber-blue uppercase tracking-[0.4em] mb-10">
          Software Engineer & Architecture Enthusiast
        </p>
        <div className="prose prose-neutral dark:prose-invert max-w-none font-mono text-sm leading-relaxed tracking-tight text-left">
          <p>
            {`Software Engineer with a background in telecommunications. I specialize in building robust digital systems and have a deep passion for solving complex architectural challenges.`}
          </p>
          <p>
            {`This portfolio serves as a central hub for my professional growth, technical experiments, and career journey. Stay tuned as I continue to push the boundaries of my craft.`}
          </p>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="space-y-8">
        <h1 className="text-3xl font-mono font-bold tracking-tighter border-b border-cyber-blue pb-2 inline-block uppercase">
          Work Experience
        </h1>
        <Timeline items={workExperience} />
      </section>

      {/* Projects Section */}
      <section id="projects" className="space-y-8">
        <h1 className="text-3xl font-mono font-bold tracking-tighter border-b border-cyber-blue pb-2 inline-block uppercase">
          Projects
        </h1>
        <PostList posts={projects} />
      </section>

      {/* Volunteering Section */}
      <section id="volunteering" className="space-y-8">
        <h1 className="text-3xl font-mono font-bold tracking-tighter border-b border-cyber-blue pb-2 inline-block uppercase">
          Volunteering
        </h1>
        <PostList posts={volunteering} />
      </section>
    </div>
  )
}