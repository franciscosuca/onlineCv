import { getSkills } from "app/utils/utils";
import {GraphComponent} from "app/components/graphComponent";
import {GraphBarComponent} from "app/components/graphBarComponent";

const testData = [
    { date: '2021-01-01', value: 2400 },
    { date: '2021-01-02', value: 1398 },
    { date: '2021-01-03', value: 9800 },
    { date: '2021-01-04', value: 3908 },
]

const testDataBar = [
    {
      name: 'Page A',
      value: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      value: 3000,
      pv: 1398,
      amt: 2210,
    },]

export default function Page() {
    return (
        <section className="grid xl:grid-cols-3 lg:grid-cols-2 w-full gap-10 max-w-[1400px]">
            <h1  className="mb-8 text-2xl font-semibold tracking-tighter">Skills</h1>
            <p>Here is a list of my skills:</p>
            <GridItem title="Languages">
                <GraphBarComponent sData={testData} />
            </GridItem>

            <GridItem title="Skills">
                <GraphComponent sData={testData} />
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