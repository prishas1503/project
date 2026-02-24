"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts"

interface WeightChartProps {
  currentWeight: number
  currentWeek: number
}

export function WeightChart({ currentWeight, currentWeek }: WeightChartProps) {
  // Simulated weight progression data based on current weight and week
  const baseWeight = currentWeight - (currentWeek * 0.3)
  const data = Array.from({ length: Math.min(currentWeek, 40) }, (_, i) => {
    const week = i + 1
    let gain = 0
    if (week <= 12) gain = week * 0.1
    else if (week <= 27) gain = 1.2 + (week - 12) * 0.25
    else gain = 1.2 + 15 * 0.25 + (week - 27) * 0.35
    return {
      week,
      weight: Math.round((baseWeight + gain) * 10) / 10,
      recommended: Math.round((baseWeight + gain * 0.95) * 10) / 10,
    }
  })

  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e9d5ff" />
        <XAxis
          dataKey="week"
          tick={{ fontSize: 11, fill: "#6b5b7b" }}
          label={{ value: "Week", position: "bottom", fontSize: 11, fill: "#6b5b7b" }}
        />
        <YAxis
          tick={{ fontSize: 11, fill: "#6b5b7b" }}
          label={{ value: "kg", angle: -90, position: "insideLeft", fontSize: 11, fill: "#6b5b7b" }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#ffffff",
            border: "1px solid #e9d5ff",
            borderRadius: 12,
            fontSize: 12,
          }}
        />
        <ReferenceLine x={currentWeek} stroke="#7c3aed" strokeDasharray="4 4" label="" />
        <Line
          type="monotone"
          dataKey="weight"
          stroke="#7c3aed"
          strokeWidth={2}
          dot={false}
          name="Your Weight"
        />
        <Line
          type="monotone"
          dataKey="recommended"
          stroke="#c084fc"
          strokeWidth={1.5}
          strokeDasharray="5 5"
          dot={false}
          name="Recommended"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
