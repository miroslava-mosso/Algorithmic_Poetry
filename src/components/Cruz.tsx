
/** Cruz — verso horizontal y vertical que se cruzan en una letra compartida. */
export function Cruz({ lines }: { lines: string[] }) {
  const horizontalIndex = lines.findIndex(
    (line) => line.trim() === 'de mi país el destierro'
  );

  const mid = horizontalIndex >= 0
    ? horizontalIndex
    : Math.floor(lines.length / 2);

  const horizontal = lines[mid];
  const top = lines.slice(0, mid);
  const bottom = lines.slice(mid + 1);

  return (
    <div className="flex flex-col items-center font-mono-lt text-xs sm:text-sm text-ink">
      {top.map((l, i) => (
        <span key={`t${i}`} className="poem-cell px-2 py-0.5 tracking-[0.2em]">
          {l.trim() === '' ? '\u00A0' : l.trim()}
        </span>
      ))}      
<span className="poem-cell w-max max-w-none px-1 py-0.5 text-xs sm:text-sm tracking-[0.06em] whitespace-nowrap">

        <span className="pink-underline-thin">
          {horizontal.trim() === '' ? '\u00A0' : l.trim()}
        </span>
      </span>

      {bottom.map((l, i) => (
        <span key={`b${i}`} className="poem-cell px-2 py-0.5 tracking-[0.2em]">
          {l.trim() === '' ? '\u00A0' : l.trim()}
        </span>
      ))}
    </div>
  );
}
