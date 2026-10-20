/** Liana — cada verso pierde una letra, cuelga como bejuco. */
export function Liana({ lines }: { lines: string[] }) {
  return (
    <div className="flex flex-col items-center gap-1.5 font-mono-lt text-sm sm:text-base text-ink">
      {lines.map((l, i) => (
        <span
          key={i}
          className="poem-cell px-2 py-0.5"
          style={{
            opacity: 1 - i * 0.08,
            letterSpacing: `${0.05 + i * 0.12}em`,
          }}
        >
          {l}
          {i < lines.length - 1 && <span className="blink">·</span>}
        </span>
      ))}
    </div>
  );
}
