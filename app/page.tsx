import { Timeline } from "./components/timeline";
import { PostList } from "./components/postsList";
import { SkillIconGrid } from "./components/skillIconGrid";
import { Experience } from "./types/Experience";

import workExperienceData from "./data/workExperience.json";
import projectsData from "./data/projects.json";
import volunteeringData from "./data/volunteering.json";

const programmingExperience = [
    { name: 'Python', totalYears: 6 },
    { name: 'JavaScript', totalYears: 4 },
    { name: 'C#', totalYears: 1 },
];

const techStackExperience = [
    { name: '2G/3G/4G/5G', totalYears: 6 },
    { name: 'AZ/GCP', totalYears: 5 },
    { name: 'GitLab/DevOps Pipelines', totalYears: 5 },
    { name: 'SQL/NoSQL', totalYears: 4 },
    { name: 'Docker', totalYears: 4 },
    { name: 'React/React Native', totalYears: 3 },
    { name: '.NET', totalYears: 3 },
    { name: 'Ansible', totalYears: 2 },
    { name: 'Kubernetes', totalYears: 1 },
];

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

      {/* Skills Section */}
      <section id="skills" className="space-y-12">
        <header className="space-y-4">
            <h1 className="text-3xl font-mono font-bold tracking-tighter border-b border-cyber-blue pb-2 inline-block">
                SKILLS & TECH STACK
            </h1>
        </header>
        <div className="space-y-10">
            <div>
                <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-500 mb-8 flex items-center">
                    <span className="mr-2">&gt;</span> CORE PROGRAMMING
                </h2>
                <SkillIconGrid skills={programmingExperience} />
            </div>
            <div>
                <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-500 mb-8 flex items-center">
                    <span className="mr-2">&gt;</span> INFRASTRUCTURE & TOOLS
                </h2>
                <SkillIconGrid skills={techStackExperience} />
            </div>
        </div>
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