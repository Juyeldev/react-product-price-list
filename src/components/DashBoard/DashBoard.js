import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashBoard = () => {
    let students = [
        {
            id: 1,
            name: "Student 1",
            physics: 82,
            chemistry: 75,
            math: 89
        },
        {
            id: 2,
            name: "Student 2",
            physics: 68,
            chemistry: 81,
            math: 77
        },
        {
            id: 3,
            name: "Student 3",
            physics: 91,
            chemistry: 87,
            math: 92
        },
        {
            id: 4,
            name: "Student 4",
            physics: 77,
            chemistry: 84,
            math: 75
        },
        {
            id: 5,
            name: "Student 5",
            physics: 85,
            chemistry: 80,
            math: 93
        },
        {
            id: 6,
            name: "Student 6",
            physics: 79,
            chemistry: 76,
            math: 81
        },
        {
            id: 7,
            name: "Student 7",
            physics: 90,
            chemistry: 92,
            math: 88
        },
        {
            id: 8,
            name: "Student 8",
            physics: 73,
            chemistry: 67,
            math: 72
        },
        {
            id: 9,
            name: "Student 9",
            physics: 86,
            chemistry: 83,
            math: 89
        },
        {
            id: 10,
            name: "Student 10",
            physics: 94,
            chemistry: 95,
            math: 97
        }
    ];




    return (
        <div>
            <LineChart
                width={600}
                height={300}
                data={students}>
                <Line dataKey={'physics'}></Line>
                <Line stroke="#82ca9d" dataKey={'chemistry'}></Line>
                <Line stroke="#8884d8" dataKey={'math'}></Line>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
            </LineChart>
        </div>
    );
};

export default DashBoard;