
type EspiralProps = {
  lines: string[];
};

export function Espiral({ lines }: EspiralProps) {
  const verse = lines.join(' ').trim();

  // Espiral principal: grande, en la parte superior izquierda.
  const centerX = 96;
  const centerY = 38;
  const startRadius = 82;
  const endRadius = 3;

  // Conserva las vueltas que ya funcionaban.
  const turns = Math.max(1.2, verse.length / 41);
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

  // Espiral pequeño: ampliado, en la parte inferior derecha.
  const smallCenterX = 236;
  const smallCenterY = 208;
  const smallStartRadius = 43;
  const smallEndRadius = 2.7;
  const smallTurns = 1.2;

  const smallCoordinates = Array.from({ length: 301 }, (_, i) => {
    const t = i / 300;
    const angle = -Math.PI / 2 + t * smallTurns * Math.PI * 2;
    const radius =
      smallStartRadius * (1 - t) + smallEndRadius * t;

    return [
      smallCenterX + radius * Math.cos(angle),
      smallCenterY + radius * Math.sin(angle),
    ];
  });

  const smallSpiralPath = smallCoordinates
    .map(([x, y], i) =>
      `${i === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`
    )
    .join(' ');

  const secondVerse =
    'Gotas de café amargo. Despierto después de medio día';

  return (
    <svg
      viewBox="0 0 320 280"
      className="w-full max-w-sm"
      aria-label="Poema en dos espirales diagonales"
    >
      <defs>
        <path id="poem-spiral-path" d={spiralPath} />
        <path id="poem-small-spiral-path" d={smallSpiralPath} />
      </defs>

      {/* Espiral principal: rosa */}
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

      {/* Espiral pequeño: verde olivo claro */}
      <use
        href="#poem-small-spiral-path"
        fill="none"
        stroke="#a3a878"
        strokeWidth="0.8"
        strokeOpacity="0.8"
      />

      <text
        className="font-mono-lt"
        fontSize="7"
        fill="#0d0d0d"
        letterSpacing="0.25"
      >
        <textPath href="#poem-small-spiral-path" startOffset="0%">
          {secondVerse}
        </textPath>
      </text>

      <circle
        cx={smallCenterX}
        cy={smallCenterY}
        r="1.5"
        fill="#a3a878"
      />
    </svg>
  );
}
