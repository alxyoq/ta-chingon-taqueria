const flagColors = [
  "bg-brand-secondary",
  "bg-brand-primary",
  "bg-brand-accent",
  "bg-brand-secondary",
  "bg-brand-primary",
] as const;

const flagIds = [
  "papel-green-1",
  "papel-red-1",
  "papel-yellow-1",
  "papel-green-2",
  "papel-red-2",
  "papel-green-3",
  "papel-red-3",
  "papel-yellow-2",
  "papel-green-4",
  "papel-red-4",
  "papel-green-5",
  "papel-red-5",
  "papel-yellow-3",
  "papel-green-6",
  "papel-red-6",
  "papel-green-7",
  "papel-red-7",
  "papel-yellow-4",
  "papel-green-8",
  "papel-red-8",
] as const;

export default function PapelPicado({
  className = "",
}: { className?: string }) {
  return (
    <div
      className={`flex h-10 w-full items-start justify-center overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {flagIds.map((flagId, index) => (
        <span
          key={flagId}
          className={`flag-shape relative -mx-px block h-10 min-w-14 border-x border-white/20 ${flagColors[index % flagColors.length]}`}
        >
          <span className="absolute left-1/2 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white/70" />
          <span className="absolute bottom-2 left-2 h-1.5 w-1.5 rotate-45 border border-white/60" />
          <span className="absolute bottom-2 right-2 h-1.5 w-1.5 rotate-45 border border-white/60" />
        </span>
      ))}
    </div>
  );
}
