"use client"

interface RiskMeterProps {
  score: number
  level: "low" | "moderate" | "high"
}

export function RiskMeter({ score, level }: RiskMeterProps) {
  const color =
    level === "high"
      ? "bg-red-500"
      : level === "moderate"
        ? "bg-amber-500"
        : "bg-emerald-500"

  const bgColor =
    level === "high"
      ? "bg-red-100"
      : level === "moderate"
        ? "bg-amber-100"
        : "bg-emerald-100"

  const textColor =
    level === "high"
      ? "text-red-700"
      : level === "moderate"
        ? "text-amber-700"
        : "text-emerald-700"

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between text-xs">
        <span className={`font-semibold capitalize ${textColor}`}>{level}</span>
        <span className="text-muted-foreground">{score}/100</span>
      </div>
      <div className={`h-2.5 overflow-hidden rounded-full ${bgColor}`}>
        <div
          className={`h-full rounded-full ${color} transition-all duration-1000`}
          style={{ width: `${score}%` }}
        />
      </div>
      {/* Color legend */}
      <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
        <span className="flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" /> Low
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded-full bg-amber-500" /> Moderate
        </span>
        <span className="flex items-center gap-1">
          <span className="inline-block h-2 w-2 rounded-full bg-red-500" /> High
        </span>
      </div>
    </div>
  )
}
