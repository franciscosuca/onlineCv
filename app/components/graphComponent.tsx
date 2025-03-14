'use client';

import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

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