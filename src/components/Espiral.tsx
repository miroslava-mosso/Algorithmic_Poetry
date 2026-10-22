interface SpiralPoint {
  x: number;
  y: number;
  rotate: number;
}

const points: SpiralPoint[] = [
  { x: 28, y: 78, rotate: 0 },
  { x: 58, y: 24, rotate: 18 },
  { x: 150, y: 14, rotate: 30 },
  { x: 258, y: 54, rotate: 48 },
  { x: 286, y: 132, rotate: 70 },
  { x: 226, y: 186, rotate: 98 },
  { x: 122, y: 184, rotate: 126 },
];

export function Espiral({ lines }: { lines: string[] }) {
  const words = lines.length ? lines : ['afuera', 'gira', 'la', 'palabra', 'hacia', 'adentro', 'calla'];
  const spiralPath = 'M 28 78 C 36 20 126 -2 214 22 C 312 48 316 146 244 186 C 172 226 76 194 76 116 C 76 60 140 48 194 72 C 244 94 218 150 166 150 C 126 150 112 120 132 98 C 148 80 174 86 174 108 C 174 123 156 128 148 116';

  return (
    <svg viewBox="0 0 320 210" className="w-full max-w-sm" aria-label="Poema en forma de espiral">
      <path d={spiralPath} fill="none" stroke="#f4b6c2" strokeWidth="0.8" strokeOpacity="0.65" />
      {words.map((word, i) => {
        const point = points[i % points.length];
        return (
          <text
            key={`${word}-${i}`}
            x={point.x}
            y={point.y}
            transform={`rotate(${point.rotate} ${point.x} ${point.y})`}
            textAnchor="middle"
            className="font-mono-lt"
            fontSize="9.5"
            fill={i === words.length - 1 ? '#f4b6c2' : '#0d0d0d'}
          >
            {word}
          </text>
        );
      })}
      <circle cx="148" cy="116" r="2" fill="#f4b6c2" />
    </svg>
  );
}
