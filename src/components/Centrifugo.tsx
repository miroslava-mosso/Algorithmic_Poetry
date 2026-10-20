/** Centrífugo — el sentido sale del centro hacia los bordes. */
export function Centrifugo({ lines }: { lines: string[] }) {
  const mid = Math.floor(lines.length / 2);
  return (
    <div className="flex flex-col items-center font-mono-lt text-xs sm:text-sm text-ink">
      {lines.map((l, i) => {
        const isCenter = i === mid;
        return (
          <span
            key={i}
            className={`poem-cell px-2 py-0.5 whitespace-nowrap ${isCenter ? 'pink-underline-thin' : ''}`}
          >
            {l}
          </span>
        );
      })}
      <svg width="160" height="20" viewBox="0 0 160 20" className="mt-1 opacity-50">
        {[20, 80, 140].map((x) => (
          <line key={x} x1="80" y1="10" x2={x} y2="10" stroke="#0d0d0d" strokeWidth="0.5" />
        ))}
        <circle cx="80" cy="10" r="1.6" fill="#f4b6c2" />
      </svg>
    </div>
  );
}
