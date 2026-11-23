import { Fragment } from "react"
import type { CSSProperties } from "react"

/**
 * A row of stages with a pulse that travels from the first to the last.
 * On phones the stages sit in a 3-column grid and light up in order.
 */
export default function Pipeline({ steps, label }: { steps: string[]; label: string }) {
  const step = 3.2 / (steps.length + 1)

  return (
    <div
      role="img"
      aria-label={`${label}: ${steps.join(", then ")}`}
      className="rounded-2xl border border-white/8 bg-black/30 p-3 sm:p-5"
    >
      <div className="grid grid-cols-3 gap-2 sm:flex sm:items-center sm:gap-0">
        {steps.map((s, i) => (
          <Fragment key={s}>
            <div
              className="node rounded-lg border border-white/14 bg-white/[0.03] px-2.5 py-2 text-center font-mono text-[11px] whitespace-nowrap text-white/85 xl:px-3 xl:text-xs"
              style={{ "--d": `${i * step}s` } as CSSProperties}
            >
              {s}
            </div>
            {i < steps.length - 1 ? (
              <div
                className="wire hidden min-w-3 flex-1 sm:block"
                style={{ "--d": `${i * step + step / 2}s` } as CSSProperties}
              />
            ) : null}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
