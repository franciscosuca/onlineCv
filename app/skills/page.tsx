// import { getSkills } from "app/utils/utils";
import {GraphBarVer, GraphBarHor} from "app/components/graphBar";

// Temporary data for the graph
const testProgramingExperience = [
    {
        name: 'C#',
        totalYears: 1,
        yearsAtCompany: {
            'GEA': 3,
        }
    },
    {
        name: 'JavaScript',
        totalYears: 4,
        yearsAtCompany: {
            'Livello/HSRW': 2,
            'GEA': 2
        }
    },
    {
        name: 'Python',
        totalYears: 6,
        yearsAtCompany: {
            'Livello/HSRW': 2,
            'GEA': 3,
            'Huawei': 1
        }
    },
]
// temporary technology data
const testTechStackExperience = [
        {
            name: 'AZ/GCP',
            totalYears: 5,
            yearsAtCompany: {
                'GEA': 3,
                'Livello/HSRW': 2,
            }
        },
        {
            name: '.NET',
            totalYears: 3,
            yearsAtCompany: {
                'GEA': 3,
            }
        },
        {
            name: 'React/React Native',
            totalYears: 3,
            yearsAtCompany: {
                'Livello/HSRW': 2,
                'GEA': 1,
            }
        },
        {
            name: '2G/3G/4G/5G',
            totalYears: 6,
            yearsAtCompany: {
                'Huawei': 3.5,
                'WIND': 2,
            }
        },
        {
            name: 'GitLab/DevOps Pipelines',
            totalYears: 5,
            yearsAtCompany: {
                'Livello/HSRW': 3,
                'GEA': 2,
            }
        },
        {
            name: 'SQL/NoSQL',
            totalYears: 4,
            yearsAtCompany: {
                'Livello/HSRW': 2,
                'GEA': 2,
            }
        },
        {
            name: 'Docker',
            totalYears: 4,
            yearsAtCompany: {
                'Livello/HSRW': 2,
                'GEA': 2,
            }
        },
        {
            name: 'Kubernetes',
            totalYears: 1,
            yearsAtCompany: {
                'Livello/HSRW': 1,
            }
        },
        {
            name: 'Ansible',
            totalYears: 2,
            yearsAtCompany: {
                'Livello/HSRW': 2,
            }
        }
]

export default function Page() {
    return (
        <section className="grid w-full gap-10 max-w-[1600px]">
            <h1  className="mb-8 text-2xl font-semibold tracking-tighter">Skills</h1>
            <p>In the graph below you can find the years of experience that I have collected per programming language on each company that I have work for.</p>

            <GridItem title="Main Programming Experience">
                <GraphBarVer skillData={testProgramingExperience} />
            </GridItem>
            <GridItem title="Main Technology Stack">
                <GraphBarHor skillData={testTechStackExperience} />
            </GridItem>

        </section>
    );
    // TODO: Enable the code below when the getSkills method is defined
    {/* <ul>
        {getSkills().map((skill) => (
            <li key={skill}>{skill}</li>
        ))}
    </ul> */}
}

function GridItem({ title, children }) {
    return (
        <div className="flex flex-col items-center justify-center p-4 border border-slate-900 bg-slate-900/1 rounded-xl h-[400px] w-[700px]">
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">{title}</h3>
        {children}
      </div>
    );
}