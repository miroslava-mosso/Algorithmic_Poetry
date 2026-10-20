/** Gemelos — dos columnas gemelas que se miran de reojo. */
export function Gemelos({ lines }: { lines: string[] }) {
  return (
    <div className="flex flex-col items-center font-mono-lt text-xs sm:text-sm text-ink">
      {lines.map((l, i) => {
        const [left, right] = l.split(/\s{2,}/);
        return (
          <div key={i} className="poem-cell px-2 py-0.5 flex gap-8 sm:gap-12">
            <span className="text-right">{left}</span>
            <span className="text-left">{right}</span>
          </div>
        );
      })}
    </div>
  );
}
