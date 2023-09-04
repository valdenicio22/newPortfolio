interface TechBadgeProps {
  name: string
}

export function TechBadge({ name }: TechBadgeProps) {
  return (
    <div className="py-1 px-3 rounded-lg text-sm bg-emerald-900/80 text-emerald-400">
      {name}
    </div>
  )
}
