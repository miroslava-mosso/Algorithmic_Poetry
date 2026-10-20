/** Espiral — el verso gira sobre sí mismo, cada vuelta repite con un giro. */
export function Espiral({ lines }: { lines: string[] }) {
  return (
    <div className="flex flex-col items-center font-mono-lt text-xs sm:text-sm text-ink">
      {lines.map((l, i) => (
        <span
          key={i}
          className="poem-cell px-2 py-0.5 whitespace-nowrap"
          style={{ transform: `translateX(${i * 6}px) rotate(${i * 4}deg)` }}
        >
          {l}
        </span>
      ))}
    </div>
  );
}
