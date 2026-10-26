
type EspiralProps = {
  lines: string[];
};

export function Espiral({ lines }: EspiralProps) {
  const verse = lines.join(' ').trim();

  const spiralPath =
    'M 35 78 C 43 28 126 8 207 29 C 294 51 300 137 239 174 C 176 210 86 185 86 119 C 86 69 141 57 187 77 C 227 94 210 139 168 140 C 137 141 122 121 137 103 C 148 89 166 92 166 108 C 166 119 156 123 151 116';

  return (
    <svg
      viewBox="0 0 320 210"
      className="w-full max-w-sm"
      aria-label="Poema en forma de espiral"
    >
      <defs>
        <path id="poem-spiral-path" d={spiralPath} />
      </defs>

      <use
        href="#poem-spiral-path"
        fill="none"
        stroke="#f4b6c2"
        strokeWidth="0.8"
        strokeOpacity="0.65"
      />

      <text
        className="font-mono-lt"
        fontSize="9.5"
        fill="#0d0d0d"
        letterSpacing="0.45"
      >
        <textPath href="#poem-spiral-path" startOffset="0%">
          {verse}
        </textPath>
      </text>
    </svg>
  );
}
