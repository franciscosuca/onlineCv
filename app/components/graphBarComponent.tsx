'use client';

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend, CartesianGrid, Tooltip } from 'recharts';

//* TODO-0: make the graph stacked
//* TODO-1: adapt the graph to work with the data from the skills page
//* TODO-2: add a legend to the graph
//* TODO-3: add a tooltip to the graph
// TODO-4: define dataset for the graph: programming languages, years of experience and companies

interface skillData {
    name: string;
    totalYears: number;
    yearsAtCompany: object;
}

interface GraphBarComponentProps {
    skillData: skillData[];
}

export function GraphBarComponent({ skillData }: GraphBarComponentProps) {

    // Get all unique companies names from the data
    const companies = Array.from(new Set(skillData.flatMap(item => Object.keys(item.yearsAtCompany))));
    // Define colors for the bars
    const colors = ['#3674B5', '#578FCA', '#A1E3F9'];
    
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={600} height={300} data={skillData}>
                <CartesianGrid strokeDasharray="2 10" />
                <XAxis dataKey="name"/>
                <YAxis dataKey="totalYears"/>
                <Legend />
                <Tooltip />
                {companies.map((company, index) => (
                    <Bar key={company} dataKey={`yearsAtCompany.${company}`} stackId="1" fill={colors[index % colors.length]} name={company} />
                ))}

            </BarChart>
        </ResponsiveContainer>
    );
}