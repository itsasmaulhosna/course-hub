"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", students: 120, courses: 8 },
  { month: "Feb", students: 180, courses: 12 },
  { month: "Mar", students: 260, courses: 16 },
  { month: "Apr", students: 340, courses: 21 },
  { month: "May", students: 430, courses: 28 },
  { month: "Jun", students: 540, courses: 35 },
];

export default function AnalyticsChart() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow dark:bg-slate-900">

      <div className="mb-6">

        <h2 className="text-2xl font-bold">
          Course Analytics
        </h2>

        <p className="text-slate-500">
          Student growth over the last six months.
        </p>

      </div>

      <div className="h-96">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="colorStudents"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="5%"
                  stopColor="#2563eb"
                  stopOpacity={0.4}
                />

                <stop
                  offset="95%"
                  stopColor="#2563eb"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="students"
              stroke="#2563eb"
              strokeWidth={3}
              fill="url(#colorStudents)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}