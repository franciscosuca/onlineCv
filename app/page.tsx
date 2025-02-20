"use client";

import { Line, LineChart, XAxis, YAxis } from "recharts";

export default function Page() {
  const data = [
    { date: '2021-01-01', value: 2400 },
    { date: '2021-01-02', value: 1398 },
    { date: '2021-01-03', value: 9800 },
    { date: '2021-01-04', value: 3908 },
  ];
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Welcome to my professional bio
      </h1>
      <p className="mb-4">
        {`With a background in telecommunications and a passion for software development, 
        I've been able to work on a variety of projects that have helped me grow as a professional
        in this software development world.`}
      </p>
      <p className="mb-4">
        {`With this website I am trying to put together a portfolio of my work. Though as of now,
        you will be able to see my experience and some of the projects and jobs I have worked on.
        I am looking forward to adding more projects and experiences to this website, so stay tuned.`}
      </p>
      <h1 className="text-3xl">My first chart</h1>
      <div>
        <LineChart width={600} height={300} data={data}>
            <XAxis dataKey="date"/>
            <YAxis dataKey="value" />
            <Line dataKey="value"/>
          </LineChart>
      </div>
    </section>
  )
}