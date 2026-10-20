/** Cruz — verso horizontal y vertical que se cruzan en una letra compartida. */
export function Cruz({ lines }: { lines: string[] }) {
  // lines: [top vertical..., horizontal, bottom vertical...]
  const mid = Math.floor(lines.length / 2);
  const horizontal = lines[mid];
  const top = lines.slice(0, mid);
  const bottom = lines.slice(mid + 1);
  return (
    <div className="flex flex-col items-center font-mono-lt text-xs sm:text-sm text-ink">
      {top.map((l, i) => (
        <span key={`t${i}`} className="poem-cell px-2 py-0.5 tracking-[0.2em]">
          {l.trim()}
        </span>
      ))}
      <span className="poem-cell px-2 py-0.5 tracking-[0.18em] whitespace-nowrap pink-underline-thin">
        {horizontal.trim()}
      </span>
      {bottom.map((l, i) => (
        <span key={`b${i}`} className="poem-cell px-2 py-0.5 tracking-[0.2em]">
          {l.trim()}
        </span>
      ))}
    </div>
  );
}
