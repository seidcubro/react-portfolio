import { useEffect, useState } from "react"
import { useReducedMotion } from "framer-motion"
import { introDelay } from "../lib/motion"

const COMMAND = "systemctl list-timers 'priorline@*'"

const ROWS: [string, string, string][] = [
  ["hourly :05", "closing", "buy prices, rebuild board"],
  ["daily 08:00", "daily", "ingest, grade, calibrate"],
  ["daily 17:00", "board", "injuries, projections"],
  ["Fri 09:00", "early", "price Sunday's slate"],
  ["Tue 01:00", "weekly", "retrain all 11 models"],
]

/** A terminal that types the command that lists PriorLine's real scheduled jobs. */
export default function Terminal() {
  const reduce = useReducedMotion()
  const [typed, setTyped] = useState(0)
  const [rows, setRows] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (reduce) return
    const timers: number[] = []
    const startDelay = 1300 + introDelay * 1000

    for (let i = 1; i <= COMMAND.length; i++) {
      timers.push(window.setTimeout(() => setTyped(i), startDelay + i * 34))
    }
    const afterTyping = startDelay + COMMAND.length * 34 + 350
    for (let r = 1; r <= ROWS.length; r++) {
      timers.push(window.setTimeout(() => setRows(r), afterTyping + r * 130))
    }
    timers.push(window.setTimeout(() => setDone(true), afterTyping + ROWS.length * 130 + 500))

    return () => timers.forEach(clearTimeout)
  }, [reduce])

  const typedCount = reduce ? COMMAND.length : typed
  const rowCount = reduce ? ROWS.length : rows
  const isDone = reduce || done

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#070a14]/90 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur">
      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--red)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--teal)]" />
        <span className="ml-3 font-mono text-[11px] text-white/45">seid@priorline: ~</span>
      </div>

      <div className="min-h-[228px] p-4 font-mono text-[11px] leading-relaxed sm:text-xs" aria-hidden="true">
        <p className="text-white/90">
          <span className="text-[var(--teal)]">$</span> {COMMAND.slice(0, typedCount)}
          {typedCount < COMMAND.length ? <span className="caret ml-0.5" /> : null}
        </p>

        <div className="mt-3 space-y-1">
          {ROWS.slice(0, rowCount).map(([when, unit, job]) => (
            <p key={unit} className="grid grid-cols-[88px_1fr] gap-x-3 sm:grid-cols-[96px_72px_1fr]">
              <span className="text-white/45">{when}</span>
              <span className="hidden text-[var(--red)] sm:block">{unit}</span>
              <span className="text-white/80">{job}</span>
            </p>
          ))}
        </div>

        {isDone ? (
          <>
            <p className="mt-3 text-white/90">
              <span className="text-[var(--teal)]">$</span> python audit_freshness.py
            </p>
            <p className="text-[var(--teal)]">✓ all inputs fresh · exit 0</p>
            <p className="mt-1 text-white/90">
              <span className="text-[var(--teal)]">$</span> <span className="caret" />
            </p>
          </>
        ) : null}
      </div>

      <p className="sr-only">
        A terminal listing PriorLine's five scheduled jobs: closing prices hourly, a daily ingest and grade, a daily
        board refresh, early pricing on Fridays, and a weekly retrain of all 11 models, followed by a passing data
        freshness audit.
      </p>
    </div>
  )
}
