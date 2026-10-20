/** Ola — versos que se inclinan como una ola que rompe. */
export function Ola({ lines }: { lines: string[] }) {
  return (
    <div className="flex flex-col items-center font-mono-lt text-xs sm:text-sm text-ink">
      {lines.map((l, i) => (
        <span
          key={i}
          className="poem-cell px-2 py-0.5 whitespace-nowrap"
          style={{
            transform: `translateX(${(i - lines.length / 2) * 6}px) rotate(${(i - lines.length / 2) * -2.5}deg)`,
          }}
        >
          {l.trim()}
        </span>
      ))}
    </div>
  );
}
