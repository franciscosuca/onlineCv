// import { getSkills } from "app/utils/utils";
import {GraphBarComponent} from "app/components/graphBarComponent";


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

// TODO-1: define method to get data from skills for the graph above
// TODO-2: create seconds graph for the technologies
// TODO-3: create a npm package for the graph component?

export default function Page() {
    return (
        // TODO: Change the grid size for the cols below when using XL screen (greater than 1280 px)
        <section className="grid xl:grid-cols-2 w-full gap-10 max-w-[1400px]">
            <h1  className="mb-8 text-2xl font-semibold tracking-tighter">Skills</h1>
            <p>In the graph below you can find the years of experience that I have collected per programming language on each company that I have work for.</p>

            <GridItem title="Programming Experience">
                <GraphBarComponent skillData={testProgramingExperience} />
            </GridItem>
        </section>
    );
    {/* <ul>
        {getSkills().map((skill) => (
            <li key={skill}>{skill}</li>
        ))}
    </ul> */}
}

function GridItem({ title, children }) {
    return (
        <div className="flex flex-col items-center justify-center p-4 border border-slate-900 bg-slate-900/1 rounded-xl h-[400px]">
        <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
        {children}
      </div>
    );
}