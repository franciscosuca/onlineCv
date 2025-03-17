// import { getSkills } from "app/utils/utils";
import {GraphBarVer, GraphBarHor} from "app/components/graphBar";

// Temporary data for the graph
const testProgramingExperience = [
    {
        name: 'Java',
        totalYears: 1,
        yearsAtCompany: {
            'Livello/HSRW': 1,
        }
    },
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

// Excel / PBI	2G/3G/4G/5G	AZ/GCP/AWS	React	Pipelines	Docker	Kubernetes	Ansible	Grafana	VPN
// WIND	2	2				0				
// Huawei	3	3				0				
// Livello / HSRW			3	2	3	2	1	2	2	2
// GEA	1		3	1	2	3			2	3

const testTechStackExperience = [
        {
            name: '2G/3G/4G/5G',
            totalYears: 6,
            yearsAtCompany: {
                'WIND': 2,
                'Huawei': 4,
            }
        },
        {
            name: 'AZ/GCP/AWS',
            totalYears: 6,
            yearsAtCompany: {
                'Livello/HSRW': 3,
                'GEA': 3,
            }
        },
        {
            name: 'React',
            totalYears: 3,
            yearsAtCompany: {
                'Livello/HSRW': 2,
                'GEA': 1,
            }
        },
        {
            name: 'Pipelines',
            totalYears: 5,
            yearsAtCompany: {
                'Livello/HSRW': 3,
                'GEA': 2,
            }
        },
        {
            name: 'Docker',
            totalYears: 3,
            yearsAtCompany: {
                'Livello/HSRW': 2,
                'GEA': 1,
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

//* TODO-1: define method to get data from skills for the graph above
// TODO-2: create seconds graph for the technologies
// TODO-3: create a npm package for the graph component?

export default function Page() {
    return (
        // TODO: Change the grid size for the cols below when using XL screen (greater than 1280 px)
        <section className="grid xl:grid-cols-2 w-full gap-10 max-w-[1600px]">
            <h1  className="mb-8 text-2xl font-semibold tracking-tighter">Skills</h1>
            <p>In the graph below you can find the years of experience that I have collected per programming language on each company that I have work for.</p>

            <GridItem title="Programming Experience">
                <GraphBarVer skillData={testProgramingExperience} />
            </GridItem>
            <GridItem title="Technology Stack">
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
        <div className="flex flex-col items-center justify-center p-4 border border-slate-900 bg-slate-900/1 rounded-xl h-[400px] w-[600px]">
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">{title}</h3>
        {children}
      </div>
    );
}