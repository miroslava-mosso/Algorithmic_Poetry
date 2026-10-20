/** Pirámide — cima, dos hombros, tres cimientos. */
export function Piramide({ lines }: { lines: string[] }) {
  return (
    <div className="flex flex-col items-center font-mono-lt text-xs sm:text-sm text-ink">
      {lines.map((l, i) => (
        <span
          key={i}
          className="poem-cell px-2 py-0.5 whitespace-nowrap"
          style={{ marginTop: i === 0 ? 0 : '0.4rem' }}
        >
          {l}
        </span>
      ))}
    </div>
  );
}
