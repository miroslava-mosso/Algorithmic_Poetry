/** Zurvan, símbolo persa del tiempo infinito y del espacio. */
export function Diamante({ lines }: { lines: string[] }) {
  const mid = Math.floor(lines.length / 2);
  return (
    <div className="flex flex-col items-center font-mono-lt text-xs sm:text-sm text-ink">
      {lines.map((l, i) => {
        const d = Math.abs(i - mid);
        return (
          <span
            key={i}
            className="poem-cell px-2 py-0.5 whitespace-nowrap"
            style={{ paddingLeft: `${d * 1.6}ch`, paddingRight: `${d * 1.6}ch` }}
          >
            {l.trim()}
          </span>
        );
      })}
    </div>
  );
}
