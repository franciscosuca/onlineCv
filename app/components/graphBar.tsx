'use client';

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend, CartesianGrid, Tooltip, ComposedChart } from 'recharts';

interface skillData {
    name: string;
    totalYears: number;
    yearsAtCompany: object;
}

interface GraphBarComponentProps {
    skillData: skillData[];
}

// Define colors for the bars
const colors = ['#3674B5', '#578FCA', '#A1E3F9', '#D1F8EF']

// Get all unique companies names from the data
function flatCompanies(skillData: skillData[]) {
    return Array.from(new Set(skillData.flatMap(item => Object.keys(item.yearsAtCompany))));
}

export function GraphBarVer({ skillData }: GraphBarComponentProps) {

    const companies = flatCompanies(skillData);
    
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={600}
                height={500}
                data={skillData}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
                >
                <XAxis dataKey="name"/>
                <YAxis
                    dataKey="totalYears"
                    domain={[0,6]}/>
                <Legend />
                <Tooltip />
                {companies.map((company, index) => (
                    <Bar
                        key={`${company}-${index}`}
                        dataKey={`yearsAtCompany.${company}`}
                        stackId="1"
                        fill={colors[index % colors.length]}
                        name={company} />
                ))}
            </BarChart>
        </ResponsiveContainer>
    );
}

export function GraphBarHor({ skillData }: GraphBarComponentProps) {

    const companies = flatCompanies(skillData);
    
    return (
        <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
                layout="vertical"
                width={600}
                height={500}
                data={skillData}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
                >
                <XAxis
                    type="number"
                    domain={[0,6]}/>
                <YAxis
                    dataKey="name"
                    type="category"
                    tick={{ fontSize: 10 }}/>
                <Legend />
                <Tooltip />
                {companies.map((company, index) => (
                    <Bar
                        key={`${company}-${index}`}
                        dataKey={`yearsAtCompany.${company}`}
                        stackId="1"
                        fill={colors[index % colors.length]}
                        name={company}
                    />
                ))}
            </ComposedChart>
      </ResponsiveContainer>
    );
}