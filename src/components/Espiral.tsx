export function Espiral({ lines }: { lines: string[] }) {
  const verse = lines.length
    ? lines.join(' · ')
    : 'afuera · gira · la palabra · hacia adentro · calla';
  const spiralPath = 'M 28 78 C 36 20 126 -2 214 22 C 312 48 316 146 244 186 C 172 226 76 194 76 116 C 76 60 140 48 194 72 C 244 94 218 150 166 150 C 126 150 112 120 132 98 C 148 80 174 86 174 108 C 174 123 156 128 148 116';

  return (
    <svg viewBox="0 0 320 210" className="w-full max-w-sm" aria-label="Poema en forma de espiral">
      <defs>
        <path id="poem-spiral-path" d={spiralPath} />
      </defs>
      <use href="#poem-spiral-path" fill="none" stroke="#f4b6c2" strokeWidth="0.8" strokeOpacity="0.65" />
      <text className="font-mono-lt" fontSize="9.5" fill="#0d0d0d" letterSpacing="0.45">
        <textPath href="#poem-spiral-path" startOffset="0%">
          {verse} · {verse} · {verse} · {verse}
        </textPath>
      </text>
      <circle cx="148" cy="116" r="2" fill="#f4b6c2" />
    </svg>
  );
}
