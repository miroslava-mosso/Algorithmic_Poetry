/** Pajarito — morfograma de Queneau: dos alas, cuerpo, cola que se disipa. */
export function Pajarito({ lines }: { lines: string[] }) {
  return (
    <div className="flex flex-col items-center font-mono-lt text-sm sm:text-base text-ink">
      {lines.map((l, i) => (
        <span
          key={i}
          className="poem-cell px-2 py-0.5 flap"
          style={{ animationDelay: `${i * 0.4}s` }}
        >
          {l}
        </span>
      ))}
      <svg width="120" height="14" viewBox="0 0 120 14" className="mt-1 opacity-60">
        <path d="M2 7 Q 60 1, 118 7" stroke="#0d0d0d" strokeWidth="0.8" fill="none" />
      </svg>
    </div>
  );
}
