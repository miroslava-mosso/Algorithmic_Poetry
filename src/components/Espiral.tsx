
type EspiralProps = {
  lines: string[];
};

export function Espiral({ lines }: EspiralProps) {
  const verse = lines.join(' ').trim();

  const centerX = 160;
  const centerY = 105;
  const startRadius = 88;
  const endRadius = 3;

  // Menos vueltas para que el poema termine al colapsar en el centro.
  const turns = Math.max(1.15, verse.length / 100);

  const points = 500;

  const coordinates = Array.from({ length: points + 1 }, (_, i) => {
    const t = i / points;
    const angle = -Math.PI / 2 + t * turns * Math.PI * 2;
    const radius = startRadius * (1 - t) + endRadius * t;

    return [
      centerX + radius * Math.cos(angle),
      centerY + radius * Math.sin(angle),
    ];
  });

  const spiralPath = coordinates
    .map(([x, y], i) =>
      `${i === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`
    )
    .join(' ');

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

      <circle
        cx={centerX}
        cy={centerY}
        r="2"
        fill="#f4b6c2"
      />
    </svg>
  );
}
