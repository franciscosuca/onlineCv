'use client';

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

//* TODO-1: make the graph stacked
// TODO-2: add a legend to the graph
// TODO-3: add a tooltip to the graph?
// TODO-4: define dataset for the graph: programming languages, years of experience and companies

export function GraphBarComponent({sData}) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={600} height={300} data={sData}>
                <XAxis dataKey="name"/>
                <YAxis dataKey="pv" />
                <Bar dataKey="pv" stackId="1" fill='green' />
                <Bar dataKey="amt" stackId="1" fill='blue'/>
            </BarChart>
        </ResponsiveContainer>
    );
}