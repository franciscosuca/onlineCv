import { SkillIconGrid } from "../components/skillIconGrid";

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
    return (
        <section className="flex flex-col w-full max-w-4xl mx-auto space-y-16">
            <header className="space-y-4">
                <h1 className="text-3xl font-mono font-bold tracking-tighter border-b border-cyber-blue pb-2 inline-block">
                    SKILLS & TECH STACK
                </h1>
                <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest leading-relaxed">
                    A snapshot of my technical arsenal and years of deep-dive experience across various domains.
                </p>
            </header>

            <div className="space-y-12">
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

            <footer className="pt-10">
                <p className="text-[10px] font-mono text-neutral-500 text-center uppercase tracking-[0.2em] opacity-50">
                    // Experience calculated based on professional project lifecycle participation
                </p>
            </footer>
        </section>
    );
}