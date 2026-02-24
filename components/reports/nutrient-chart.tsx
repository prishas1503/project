"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

interface NutrientChartProps {
  data: {
    hemoglobin: number
    glucose: number
    bp_systolic: number
    bp_diastolic: number
  }
}

export function NutrientChart({ data }: NutrientChartProps) {
  const chartData = [
    {
      name: "Hemoglobin",
      yours: data.hemoglobin,
      recommended: 12.5,
    },
    {
      name: "Glucose",
      yours: data.glucose / 10,
      recommended: 9,
    },
    {
      name: "BP (Sys)",
      yours: data.bp_systolic / 10,
      recommended: 12,
    },
    {
      name: "BP (Dia)",
      yours: data.bp_diastolic / 10,
      recommended: 8,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e9d5ff" />
        <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#6b5b7b" }} />
        <YAxis tick={{ fontSize: 11, fill: "#6b5b7b" }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#ffffff",
            border: "1px solid #e9d5ff",
            borderRadius: 12,
            fontSize: 12,
          }}
        />
        <Legend wrapperStyle={{ fontSize: 11 }} />
        <Bar dataKey="yours" fill="#7c3aed" name="Your Value" radius={[4, 4, 0, 0]} />
        <Bar dataKey="recommended" fill="#d8b4fe" name="Recommended" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
