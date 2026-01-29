import type { SkillGroup } from "../data/skills"

export default function SkillGroupCard({ group }: { group: SkillGroup }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
      <h3 className="text-base font-semibold tracking-tight">{group.title}</h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/80"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
