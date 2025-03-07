'use client';

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

// TODO-1: create graph component for languages (x: languages, y: years, legend: companies)
// TODO-2: define method to get data from skills for the graph above
// TODO-3: create seconds graph for the technologies
// TODO-4: create a npm package for the graph component?

export function GraphComponent({ sData }) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={600} height={300} data={sData}>
                <XAxis dataKey="date"/>
                <YAxis dataKey="value" />
                <Line dataKey="value"/>
            </LineChart>
        </ResponsiveContainer> 
    );
}   