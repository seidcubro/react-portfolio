import type { SkillGroup } from "../data/skills"

export default function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6">
      <h3 className="text-base font-semibold tracking-tight">{group.title}</h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-800/60 px-3 py-1 text-xs text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
