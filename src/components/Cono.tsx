
/** Cono — embudo que condensa el sentido en una sílaba o palabra final. */

type ConoProps = {
  lines: string[];
  compact?: boolean;
};

export function Cono({
  lines,
  compact = false,
}: ConoProps) {
  return (
    <div
      className={`flex flex-col items-center font-mono-lt text-ink ${
        compact ? 'w-max max-w-none text-[8px]' : 'text-xs sm:text-sm'
      }`}
    >
      {lines.map((l, i) => (
        <span
          key={i}
          className="poem-cell whitespace-nowrap px-2 py-0.5"
          style={{ opacity: 1 - i * 0.1 }}
        >
          {l.trim()}
        </span>
      ))}

      <span className="mt-1 text-[#f4b6c2]">▼</span>
    </div>
  );
}
