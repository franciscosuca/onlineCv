'use client';

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export function GraphBarComponent({sData}) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={600} height={300} data={sData}>
                <XAxis dataKey="name"/>
                <YAxis dataKey="value" />
                <Bar dataKey="value"/>
            </BarChart>
        </ResponsiveContainer>
    );
}