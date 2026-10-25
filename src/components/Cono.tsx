/** Cono — embudo que condensa el sentido en una sílaba o palabra final. */
export function Cono({ lines }: { lines: string[] }) {
  return (
    <div className="flex flex-col items-center font-mono-lt text-xs sm:text-sm text-ink">
      {lines.map((l, i) => (
        <span
          key={i}
          className="poem-cell px-2 py-0.5 whitespace-nowrap"
          style={{ opacity: 1 - i * 0.1 }}
        >
          {l.trim()}
        </span>
      ))}
      <span className="mt-1 text-[#f4b6c2]">▼</span>
    </div>
  );
}
