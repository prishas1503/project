"use client"

import { useState } from "react"
import {
  Activity,
  AlertTriangle,
  CheckCircle,
  FileText,
  Heart,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollAnimate } from "@/components/scroll-animate"
import { RiskMeter } from "./risk-meter"
import { WeightChart } from "./weight-chart"
import { NutrientChart } from "./nutrient-chart"
import { TrimesterTimeline } from "./trimester-timeline"

interface HealthData {
  weight: number
  bp_systolic: number
  bp_diastolic: number
  glucose: number
  hemoglobin: number
  week: number
}

interface RiskResult {
  gestationalDiabetes: { level: "low" | "moderate" | "high"; score: number; message: string }
  anemia: { level: "low" | "moderate" | "high"; score: number; message: string }
  hypertension: { level: "low" | "moderate" | "high"; score: number; message: string }
  overall: "low" | "moderate" | "high"
}

function assessRisks(data: HealthData): RiskResult {
  // Gestational Diabetes
  let gdScore = 0
  if (data.glucose > 140) gdScore = 85
  else if (data.glucose > 120) gdScore = 55
  else if (data.glucose > 95) gdScore = 30
  else gdScore = 10

  // Anemia
  let aScore = 0
  if (data.hemoglobin < 10) aScore = 80
  else if (data.hemoglobin < 11) aScore = 50
  else if (data.hemoglobin < 12) aScore = 25
  else aScore = 10

  // Hypertension
  let hScore = 0
  if (data.bp_systolic > 140 || data.bp_diastolic > 90) hScore = 85
  else if (data.bp_systolic > 130 || data.bp_diastolic > 85) hScore = 50
  else if (data.bp_systolic > 120 || data.bp_diastolic > 80) hScore = 25
  else hScore = 10

  function getLevel(score: number): "low" | "moderate" | "high" {
    if (score >= 70) return "high"
    if (score >= 40) return "moderate"
    return "low"
  }

  const gd = {
    level: getLevel(gdScore),
    score: gdScore,
    message:
      gdScore >= 70
        ? "Glucose levels are elevated. Please consult your doctor for a glucose tolerance test."
        : gdScore >= 40
          ? "Glucose levels are slightly above normal. Monitor your diet and recheck."
          : "Glucose levels are within a healthy range. Keep up the good work!",
  }

  const anemia = {
    level: getLevel(aScore),
    score: aScore,
    message:
      aScore >= 70
        ? "Hemoglobin is low. Consider iron supplements and iron-rich foods. Consult your doctor."
        : aScore >= 40
          ? "Hemoglobin is borderline. Increase iron-rich foods like spinach, lentils, and red meat."
          : "Hemoglobin levels are healthy. Continue with your current diet.",
  }

  const hypertension = {
    level: getLevel(hScore),
    score: hScore,
    message:
      hScore >= 70
        ? "Blood pressure is elevated. This may indicate preeclampsia risk. See your doctor immediately."
        : hScore >= 40
          ? "Blood pressure is slightly elevated. Reduce sodium, manage stress, and monitor regularly."
          : "Blood pressure is within a normal range. Excellent!",
  }

  const maxScore = Math.max(gdScore, aScore, hScore)
  const overall = getLevel(maxScore)

  return { gestationalDiabetes: gd, anemia, hypertension, overall }
}

export function ReportsClient() {
  const [formData, setFormData] = useState<HealthData>({
    weight: 65,
    bp_systolic: 120,
    bp_diastolic: 78,
    glucose: 90,
    hemoglobin: 12.5,
    week: 20,
  })
  const [result, setResult] = useState<RiskResult | null>(null)
  const [showResult, setShowResult] = useState(false)

  function handleChange(field: keyof HealthData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: parseFloat(value) || 0 }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = assessRisks(formData)
    setResult(res)
    setShowResult(false)
    requestAnimationFrame(() => setShowResult(true))
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-purple-50 to-background px-4 py-16 text-center md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            <Activity className="h-4 w-4" />
            Health Monitoring
          </div>
          <h1 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
            Health <span className="text-primary">Reports</span>
          </h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Enter your health parameters to visualize trends, assess risk
            factors, and receive personalized guidance throughout your pregnancy.
          </p>
        </div>
      </section>

      {/* Input form */}
      <section className="bg-background px-4 pb-16 md:pb-24">
        <div className="mx-auto max-w-2xl">
          <ScrollAnimate>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-6 shadow-lg md:p-8"
            >
              <h2 className="mb-6 flex items-center gap-2 font-serif text-xl font-bold text-card-foreground">
                <FileText className="h-5 w-5 text-primary" />
                Enter Health Data
              </h2>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="week" className="text-sm font-medium text-card-foreground">
                    Pregnancy Week
                  </Label>
                  <Input
                    id="week"
                    type="number"
                    min={1}
                    max={42}
                    value={formData.week}
                    onChange={(e) => handleChange("week", e.target.value)}
                    className="border-border bg-background text-foreground"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="weight" className="text-sm font-medium text-card-foreground">
                    Weight (kg)
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    step={0.1}
                    value={formData.weight}
                    onChange={(e) => handleChange("weight", e.target.value)}
                    className="border-border bg-background text-foreground"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="bp_sys" className="text-sm font-medium text-card-foreground">
                    BP Systolic (mmHg)
                  </Label>
                  <Input
                    id="bp_sys"
                    type="number"
                    value={formData.bp_systolic}
                    onChange={(e) => handleChange("bp_systolic", e.target.value)}
                    className="border-border bg-background text-foreground"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="bp_dia" className="text-sm font-medium text-card-foreground">
                    BP Diastolic (mmHg)
                  </Label>
                  <Input
                    id="bp_dia"
                    type="number"
                    value={formData.bp_diastolic}
                    onChange={(e) => handleChange("bp_diastolic", e.target.value)}
                    className="border-border bg-background text-foreground"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="glucose" className="text-sm font-medium text-card-foreground">
                    Glucose (mg/dL)
                  </Label>
                  <Input
                    id="glucose"
                    type="number"
                    value={formData.glucose}
                    onChange={(e) => handleChange("glucose", e.target.value)}
                    className="border-border bg-background text-foreground"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="hb" className="text-sm font-medium text-card-foreground">
                    Hemoglobin (g/dL)
                  </Label>
                  <Input
                    id="hb"
                    type="number"
                    step={0.1}
                    value={formData.hemoglobin}
                    onChange={(e) => handleChange("hemoglobin", e.target.value)}
                    className="border-border bg-background text-foreground"
                  />
                </div>
              </div>

              <Button type="submit" size="lg" className="mt-6 w-full shadow-lg shadow-primary/25">
                <TrendingUp className="mr-2 h-4 w-4" />
                Analyze Health Data
              </Button>
            </form>
          </ScrollAnimate>

          {/* Results */}
          {result && showResult && (
            <div className="animate-fade-in-up mt-8 flex flex-col gap-8">
              {/* Risk cards */}
              <div className="grid gap-4 md:grid-cols-3">
                {([
                  { label: "Gestational Diabetes", data: result.gestationalDiabetes },
                  { label: "Anemia", data: result.anemia },
                  { label: "Hypertension", data: result.hypertension },
                ] as const).map((r) => (
                  <div
                    key={r.label}
                    className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                  >
                    <div className="mb-3 flex items-center gap-2">
                      {r.data.level === "high" ? (
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                      ) : r.data.level === "moderate" ? (
                        <AlertTriangle className="h-5 w-5 text-amber-500" />
                      ) : (
                        <CheckCircle className="h-5 w-5 text-emerald-500" />
                      )}
                      <h3 className="text-sm font-bold text-card-foreground">{r.label}</h3>
                    </div>
                    <RiskMeter score={r.data.score} level={r.data.level} />
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {r.data.message}
                    </p>
                  </div>
                ))}
              </div>

              {/* Overall */}
              <div className="rounded-2xl border border-border bg-gradient-to-br from-purple-50 to-card p-6 text-center shadow-lg">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground">
                  <Heart className="h-4 w-4" />
                  Overall Risk Level
                </div>
                <p
                  className={`mt-2 font-serif text-2xl font-bold ${
                    result.overall === "high"
                      ? "text-red-600"
                      : result.overall === "moderate"
                        ? "text-amber-600"
                        : "text-emerald-600"
                  }`}
                >
                  {result.overall === "high"
                    ? "High Risk -- Consult Your Doctor"
                    : result.overall === "moderate"
                      ? "Moderate Risk -- Monitor Closely"
                      : "Low Risk -- Looking Great!"}
                </p>
              </div>

              {/* Charts */}
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <h3 className="mb-4 text-sm font-bold text-card-foreground">Weight Progression</h3>
                  <WeightChart currentWeight={formData.weight} currentWeek={formData.week} />
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <h3 className="mb-4 text-sm font-bold text-card-foreground">
                    Nutrient Intake vs Recommended
                  </h3>
                  <NutrientChart data={formData} />
                </div>
              </div>

              {/* Trimester timeline */}
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <h3 className="mb-4 text-sm font-bold text-card-foreground">Trimester Milestones</h3>
                <TrimesterTimeline currentWeek={formData.week} />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
