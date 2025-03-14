'use client';

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';

//* TODO-0: make the graph stacked
//* TODO-1: adapt the graph to work with the data from the skills page
//* TODO-2: add a legend to the graph
// TODO-3: add a tooltip to the graph?
// TODO-4: define dataset for the graph: programming languages, years of experience and companies

// sData sample:
// {
//     name: 'Python',
//     totalYears: 5,
//     yearsAtCompany: {
//         'Company A': 3,
//         'Company B': 2
//     }
// }

export function GraphBarComponent({ sData }) {
    const companies = Array.from(new Set(sData.flatMap(item => Object.keys(item.yearsAtCompany))));

    const colors = ['orange', 'pink', 'violet', 'green', 'blue', 'red'];
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={600} height={300} data={sData}>
                <CartesianGrid strokeDasharray="2 10" />
                <XAxis dataKey="name"/>
                <YAxis dataKey="totalYears" />
                <Legend />
                
                {companies.map((company, index) => (
                    <Bar key={company} dataKey={`yearsAtCompany.${company}`} stackId="1" fill={colors[index % colors.length]} name={company} />
                ))}
                
            </BarChart>
        </ResponsiveContainer>
    );
}