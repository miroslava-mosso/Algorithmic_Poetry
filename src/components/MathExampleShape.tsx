import type { MathShapeId } from '@/mathAreas';

interface Props {
  shape: MathShapeId;
  lines: string[];
  isLightbox?: boolean;
}

const PINK = '#f4b6c2';
const INK  = '#0d0d0d';
const DIM  = 'rgba(13,13,13,0.45)';

export function MathExampleGraphic({ shape, isLightbox = false }: Props) {  switch (shape) {
    
    /* ── GEOMETRÍA ─────────────────────────────────── */
 

/* ── Reflexión ───────────────────────────────── */

case 'reflexion': return (
  <svg
    viewBox="0 0 900 650"
    className="w-full max-w-5xl"
    fontFamily="'JetBrains Mono', monospace"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Cuadrícula tenue de cuaderno */}
      <pattern
        id="reflexion-grid"
        width="25"
        height="25"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 20 0 L 0 0 0 20"
          fill="none"
          stroke="#999999"
          strokeWidth="0.65"
          opacity="0.8"
        />
      </pattern>

      {/* Flechas de los ejes */}
      <marker
        id="reflexion-axis-arrow"
        markerWidth="8"
        markerHeight="8"
        refX="4"
        refY="4"
        orient="auto-start-reverse"
        markerUnits="userSpaceOnUse"
      >
        <path d="M 0,0 L 8,4 L 0,8 Z" fill="#8CCFE8" />
      </marker>

      {/* Flecha curva rosa */}
      <marker
        id="reflexion-rotation-arrow"
        markerWidth="9"
        markerHeight="9"
        refX="7"
        refY="4.5"
        orient="auto"
        markerUnits="userSpaceOnUse"
      >
        <path d="M 0,0 L 9,4.5 L 0,9 Z" fill={PINK} />
      </marker>
    </defs>

    {/* Fondo cuadriculado */}
    <rect
      x="0"
      y="0"
      width="900"
      height="650"
      fill="url(#reflexion-grid)"
    />

    {/* Eje horizontal */}
    <line
      x1="35"
      y1="320"
      x2="865"
      y2="320"
      stroke="#8CCFE8"
      strokeWidth="2"
      markerStart="url(#reflexion-axis-arrow)"
      markerEnd="url(#reflexion-axis-arrow)"
    />

    {/* Eje vertical */}
    <line
      x1="450"
      y1="25"
      x2="450"
      y2="625"
      stroke="#8CCFE8"
      strokeWidth="2"
      markerStart="url(#reflexion-axis-arrow)"
      markerEnd="url(#reflexion-axis-arrow)"
    />

    {/* Diagonal rosa punteada */}
    <line
      x1="710"
      y1="60"
      x2="190"
      y2="580"
      stroke={PINK}
      strokeWidth="1.8"
      strokeDasharray="6 7"
      opacity="0.9"
    />

    {/* Poema original: cuadrante superior izquierdo */}
    <g
      transform="translate(420, 95)"
      textAnchor="end"
      fill={INK}
      fontSize="23"
    >
      <text x="0" y="0">
        Restos, escombros después
      </text>
      <text x="0" y="32">
        de el vendaval
      </text>
      <text x="0" y="64">
        El paso del tiempo
      </text>
      <text x="0" y="96">
        erosionó la tierra,
      </text>
      <text x="0" y="128">
        mutiló la memoria de la
      </text>
      <text x="0" y="160">
        imagen precisa
      </text>
    </g>

    {/* Flecha curva: del original al reflejo */}
    <path
      d="M 505,105 C 555,75 620,105 650,180"
      fill="none"
      stroke={PINK}
      strokeWidth="2.5"
      markerEnd="url(#reflexion-rotation-arrow)"
      strokeLinecap="round"
    />

    {/* Poema reflejado: cuadrante inferior derecho */}
    <g
      transform="translate(490, 565) rotate(180)"
      textAnchor="end"
      fill={INK}
      fontSize="23"
    >
      <text x="0" y="0">
        Precisa imagen,
      </text>
      <text x="0" y="27">
        —la de memoria—
      </text>
      <text x="0" y="54">
        La mutiló, tierra la erosionó
      </text>
      <text x="0" y="81">
        Tiempo del paso
      </text>
      <text x="0" y="108">
        El vendaval,
      </text>
      <text x="0" y="135">
        —el de después—
      </text>
      <text x="0" y="162">
        Escombros, restos
      </text>
    </g>
  </svg>
);

    
    /* ── Círculo uroboros ─────────────────────────────────── */

    
case 'circulo-vicioso': return (
  <svg
    viewBox="0 0 220 220"
    className={`block h-auto w-full ${
      isLightbox ? 'max-w-[600px]' : 'max-w-[220px]'
    }`}
    fontFamily="'JetBrains Mono', monospace"
  >
    <defs>
      <path id="cv-ring" d="M 110,22 A 88,88 0 1,1 109.99,22" />
    </defs>

    <circle
      cx="110"
      cy="110"
      r="88"
      fill="none"
      stroke={PINK}
      strokeWidth="0.6"
      strokeOpacity="0.4"
    />

    <circle cx="110" cy="110" r="2" fill={PINK} />

    <text fontSize="7.3" fill={INK} letterSpacing="0.2">
      <textPath href="#cv-ring" startOffset="0%">
        · proceso homogéneo y poroso por el cual escapan las cosas que un día conocimos ya no son más que memorias  fragmentadas 
      </textPath>
    </text>

    <text x="110" y="106" textAnchor="middle" fontSize="7" fill={DIM}>
      loop
    </text>

    <text x="110" y="118" textAnchor="middle" fontSize="10" fill={PINK}>
    ∞
    </text>
  </svg>
);




/* ── Curva de Koch ───────────────────────────── */

case 'koch-snowflake': {
  const DARK_BLUE = '#1677C8';

  const firstWords = ['un', 'gato', 'nos', 'observa'];

  const secondWords = [
    'Un', 'teléfono', 'está', 'sonando',
    'Gato', 'que', 'se', 'perdió',
    'Nos', 'maullaba', 'desde', 'afuera',
    'Observa', 'nuestros', 'pactos', 'Secretos',
  ];

  type Point = [number, number];

  // Curva de Koch abierta: cada segmento se convierte en cuatro.
  const kochPoints = (
    start: Point,
    end: Point,
    depth: number,
  ): Point[] => {
    if (depth === 0) return [start, end];

    const dx = (end[0] - start[0]) / 3;
    const dy = (end[1] - start[1]) / 3;

    const p1: Point = [
      start[0] + dx,
      start[1] + dy,
    ];

    const angle = -Math.PI / 3;

    const p2: Point = [
      p1[0] + dx * Math.cos(angle) - dy * Math.sin(angle),
      p1[1] + dx * Math.sin(angle) + dy * Math.cos(angle),
    ];

    const p3: Point = [
      start[0] + 2 * dx,
      start[1] + 2 * dy,
    ];

    const a = kochPoints(start, p1, depth - 1);
    const b = kochPoints(p1, p2, depth - 1);
    const c = kochPoints(p2, p3, depth - 1);
    const d = kochPoints(p3, end, depth - 1);

    return [
      ...a.slice(0, -1),
      ...b.slice(0, -1),
      ...c.slice(0, -1),
      ...d,
    ];
  };

  // Dibuja la curva conservando una escala uniforme en X e Y.
  const drawKoch = (
    depth: number,
    words: string[],
    colorForWord: (word: string) => string,
    width: number,
    height: number,
  ) => {
    const margin = 14;

    // La curva original parte de un segmento horizontal.
    const sourcePoints = kochPoints(
      [0, 0],
      [1, 0],
      depth,
    );

    const minX = Math.min(...sourcePoints.map(p => p[0]));
    const maxX = Math.max(...sourcePoints.map(p => p[0]));
    const minY = Math.min(...sourcePoints.map(p => p[1]));
    const maxY = Math.max(...sourcePoints.map(p => p[1]));

    const sourceWidth = maxX - minX || 1;
    const sourceHeight = maxY - minY || 1;

    const availableWidth = width - margin * 2;
    const availableHeight = height - margin * 2;

    // Una sola escala para ambos ejes: no deforma la curva.
    const scale = Math.min(
      availableWidth / sourceWidth,
      availableHeight / sourceHeight,
    );

    const drawnWidth = sourceWidth * scale;
    const drawnHeight = sourceHeight * scale;

    // Centra la curva horizontalmente y apoya sus extremos abajo.
    const offsetX = (width - drawnWidth) / 2;
    const baseline = height - margin;

    const points: Point[] = sourcePoints.map(([x, y]) => [
    offsetX + (x - minX) * scale,
    baseline + (y - maxY) * scale,
    ]);

    const path = points
      .map((point, i) =>
        `${i === 0 ? 'M' : 'L'} ${point[0]} ${point[1]}`
      )
      .join(' ');

    const edges = points.slice(0, -1).map((point, i) => {
      const next = points[i + 1];
      const dx = next[0] - point[0];
      const dy = next[1] - point[1];
      const length = Math.hypot(dx, dy) || 1;

      // Normal perpendicular que apunta hacia el lado superior.
      const nx = dy / length;
      const ny = -dx / length;

      return {
        x: (point[0] + next[0]) / 2,
        y: (point[1] + next[1]) / 2,
        angle: Math.atan2(dy, dx) * 180 / Math.PI,
        nx,
        ny,
      };
    });

    return (
      <g>
        <path
          d={path}
          fill="none"
          stroke={PINK}
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {words.map((word, i) => {
          const edge = edges[i];
          if (!edge) return null;

          // Coloca cada palabra ligeramente por encima de su arista.
        
          const isBelow = ['Un','Gato', 'Nos','Observa', 'Secretos', 'sonando', 'afuera'].includes(word);

          const offset = depth === 1 ? 13 : 12;
          const direction = isBelow ? -1 : 1;

          const x = edge.x + edge.nx * offset * direction;
          const y = edge.y + edge.ny * offset * direction;

          return (
            <text
              key={`${depth}-${i}`}
              x={x}
              y={y}
              transform={`rotate(${edge.angle}, ${x}, ${y})`}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={depth === 1 ? 14 : 10}
              fontFamily="'JetBrains Mono', monospace"
              fill={colorForWord(word)}
            >
              {word}
            </text>
          );
        })}
      </g>
    );
  };

  
  return (
    <svg
  viewBox={isLightbox ? '0 0 1400 1050' : '0 0 800 650'}
  className={
    isLightbox
      ? 'block w-full max-w-none h-auto'
      : 'w-full max-w-4xl'
  }
  xmlns="http://www.w3.org/2000/svg"
>
      {/* Primera iteración: arriba a la izquierda */}
      <g transform={isLightbox ? "translate(20, 20) scale(1.35)" : "translate(0, 0)"}>
        <text
          x="36"
          y="28"
          fontSize={isLightbox ? 23 : 33}
          fill={INK}
        >
          Primera iteración:
        </text>

        <g transform="translate(8, 42)">
          {drawKoch(
            1,
            firstWords,
            () => INK,
            isLightbox ? 390 : 300,
            isLightbox ? 230 : 205,
          )}
        </g>
      </g>

      {/* Segunda iteración: arriba a la derecha */}
      <g transform={isLightbox ? "translate(555, 20) scale(1.35)" : "translate(320, 0)"}>
        <text
          x={isLightbox ? 60 : 96}
          y={isLightbox ? 28 : 98}
          fontSize={isLightbox ? 23 : 33}
          fill={INK}
        >
          Segunda iteración:
        </text>

        <g transform="translate(0, 42)">
          {drawKoch(
            2,
            secondWords,
            (word) =>
              ['Un', 'Gato', 'Nos', 'Observa'].includes(word)
                ? INK
                : DARK_BLUE,
            isLightbox ? 600 : 470,
            isLightbox ? 300 : 300,
          )}
        </g>
      </g>

      {/* Tercera iteración: abajo, sin palabras */}
      <g transform={isLightbox ? "translate(20, 510)" : "translate(0, 285)"}>
        <text
          x="16"
          y="108"
          fontSize={isLightbox ? 32 : 33}
          fill={INK}
        >
          Tercera iteración:
        </text>

        <g transform="translate(12, 55)">
          {drawKoch(
            3,
            [],
            () => INK,
            isLightbox ? 1320 : 776,
            isLightbox ? 400 : 300,
          )}
        </g>
      </g>
    </svg>
  );
}

    
    /* ── NUDOS ─────────────────────────────────────── */

/* Nudo Hopf-link */      

case 'hopf-link': return (
  <svg
    viewBox="0 0 300 220"
    preserveAspectRatio="xMidYMid meet"
    className={`block h-auto w-full ${
      isLightbox ? 'max-w-none' : 'max-w-sm'
    }`}
    fontFamily="'JetBrains Mono', monospace"
  >
    <defs>
      {/* Trayectoria circular del aro lila */}
      <path
          id="hopf-lilac-text-path"
          d="M 112,17
             A 90,90 0 1 1 112,197
             A 90,90 0 1 1 112,17"
        />

      {/* Trayectoria circular del aro rosa */}
      
  <path
      id="hopf-gray-text-path"
      d="M 188,50
         A 57,57 0 1 1 188,164
         A 57,57 0 1 1 188,50"
    />

    </defs>

    {/* Aro lila */}
    <circle
      cx="112"
      cy="107"
      r="90"
      fill="none"
      stroke="#B69AE8"
      strokeWidth="0.5"
      strokeOpacity="0.35"
    />

    {/* Aro rosa */}
    <circle
      cx="188"
      cy="107"
      r="57"
      fill="none"
      stroke={PINK}
      strokeWidth="0.5"
      strokeOpacity="0.35"
    />

   
{/* Verso del aro lila */}
<text
  fontSize="9"
  fill="#0d0d0d"
  letterSpacing="0.3"
  paintOrder="stroke"
  stroke="#B69AE8"
  strokeWidth="0.5"
  strokeLinejoin="round"
>
  <textPath
    href="#hopf-lilac-text-path"
    startOffset="0%"
    textLength="550"
    lengthAdjust="spacing"
  >
    Mientras la casa olía a pastel horneado
  </textPath>
</text>

{/* Verso del aro rosa */}
<text
  fontSize="8"
  fill="#0d0d0d"
  letterSpacing="0.6"
  paintOrder="stroke"
  stroke={PINK}
  strokeWidth="2.5"
  strokeLinejoin="round"
>
  <textPath
    href="#hopf-gray-text-path"
    startOffset="0%"
    textLength="345"
    lengthAdjust="spacing"
  >
    Algo se rompió cuando los hermanos fueron separados
  </textPath>
</text>

  </svg>
);

/* Nudo figure-eight */       


case 'figure-eight-knot': return (
  <svg
    viewBox="-10 0 340 320"
    preserveAspectRatio="xMidYMid meet"
    className={`block h-auto w-full ${
      isLightbox ? 'max-w-none' : 'max-w-sm'
    }`}
    fontFamily="'JetBrains Mono', monospace"
  >
    <defs>
      
<path
  id="figure-eight-square-path"
  d="
  M 158,58
  H 308
  V 260
  H 87
  V 109
  H 237
  V 160
  H 10
  V 210
  H 158
  V 58
"
  fill="none"
      />
    </defs>

    {/* Trayectoria continua turquesa */}
    <use
      href="#figure-eight-square-path"
      fill="none"
      stroke="#35BFC2"
      strokeWidth="2.5"
      strokeOpacity="0.3"
      strokeLinejoin="round"
    />

    {/* Poema sobre la trayectoria */}
    <text
      fontSize="11"
      fill="#0d0d0d"
      letterSpacing="0.2"
      paintOrder="stroke"
      stroke="#F7F5F1"
      strokeWidth="0"
      strokeLinejoin="round"
    >
      <textPath
        href="#figure-eight-square-path"
        startOffset="0%"
        textLength="1500"
        lengthAdjust="spacing"
      >
        ¿Qué ves cuando cierras los ojos? La nada, el vacío, la oscuridad, el miedo a perderme y no poder regresar. A veces siento que he tenido mil vidas. Muchas las he olvidado ya.
      </textPath>
    </text>
  </svg>
);


/* Nudo trébol */

case 'trefoil-knot': {
  const tfPath =
    Array.from({ length: 121 }, (_, i) => {
      const t = (i / 120) * Math.PI * 2;
      const x = 120 + 28 * (Math.sin(t) + 2 * Math.sin(2 * t));
      const y = 120 + 28 * (Math.cos(t) - 2 * Math.cos(2 * t));

      return `${i === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`;
    }).join(' ') + ' Z';

  return (
    <svg
      viewBox={isLightbox ? '15 15 210 210' : '0 0 240 240'}
      preserveAspectRatio="xMidYMid meet"
      style={{
        display: 'block',
        width: '100%',
        height: 'auto',
        maxWidth: isLightbox ? '1100px' : '280px',
        flex: '0 0 auto',
        margin: '0 auto',
      }}
      fontFamily="'JetBrains Mono', monospace"
    >
      <defs>
        <path id="tf-path" d={tfPath} />
      </defs>

      <use
        href="#tf-path"
        fill="none"
        stroke={PINK}
        strokeWidth={isLightbox ? 1.6 : 1.2}
        strokeOpacity="0.3"
        strokeLinejoin="round"
      />

      <text
        fill={INK}
        fontSize="5"
      >
        <textPath
  href="#tf-path"
  startOffset="0%"
  textLength={undefined}
>
          ¿Qué ves <tspan dx="18">cuando</tspan> <tspan dx="5">cierras</tspan> los ojos? Despierto y no sé distinguir lo real de los sueños. Un minuto se siente elongado en el tiempo. Recuerdos distantes de una vida <tspan dx="13">pasada</tspan>. Amanece todos los días mientras yo siga <tspan dx="20">existiendo.</tspan>
        </textPath>
      </text>

      <text
        x="120"
        y="116"
        textAnchor="middle"
        fontSize="7"
        fill={DIM}
      >
        nudo
      </text>

      <text
        x="120"
        y="126"
        textAnchor="middle"
        fontSize="8"
        fill={PINK}
      >
        trébol
      </text>
    </svg>
  );
}


    /* ── GRAFOS ────────────────────────────────────── */

    case 'grafo-arbol': return (
      <svg viewBox="0 0 300 160" className="w-full max-w-sm" fontFamily="'JetBrains Mono', monospace">
        {/* Edges */}
        {[
          [150,18, 80,50], [150,18, 220,50],
          [80,50, 45,90], [80,50, 115,90],
          [220,50, 185,90], [220,50, 255,90],
          [45,90, 28,130], [45,90, 62,130],
          [115,90, 98,130], [115,90, 132,130],
          [185,90, 168,130], [185,90, 202,130],
          [255,90, 238,130],[255,90, 272,130],
        ].map(([x1,y1,x2,y2],i)=>(
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={PINK} strokeWidth="0.7" strokeOpacity="0.5"/>
        ))}
        {/* Root */}
        <text x="150" y="16" textAnchor="middle" fontSize="10" fill={INK} fontWeight="500">raíz</text>
        {/* Level 1 */}
        {[{x:80,y:50,w:'voz'},{x:220,y:50,w:'luz'}].map(n=>(
          <text key={n.w} x={n.x} y={n.y} textAnchor="middle" fontSize="9" fill={INK}>{n.w}</text>
        ))}
        {/* Level 2 */}
        {[{x:45,y:90,w:'río'},{x:115,y:90,w:'sol'},{x:185,y:90,w:'mar'},{x:255,y:90,w:'cielo'}].map(n=>(
          <text key={n.w} x={n.x} y={n.y} textAnchor="middle" fontSize="8.5" fill={DIM}>{n.w}</text>
        ))}
        {/* Leaves */}
        {[
          {x:28,w:'ola'},{x:62,w:'pez'},{x:98,w:'alba'},{x:132,w:'cal'},
          {x:168,w:'sal'},{x:202,w:'ola'},{x:238,w:'gris'},{x:272,w:'azul'},
        ].map(n=>(
          <text key={`${n.x}${n.w}`} x={n.x} y={130} textAnchor="middle"
            fontSize="7.5" fill={PINK}>{n.w}</text>
        ))}
      </svg>
    );

    case 'konigsberg': return (
      <svg viewBox="0 0 280 180" className="w-full max-w-xs" fontFamily="'JetBrains Mono', monospace">
        {/* Islands */}
        <ellipse cx="140" cy="90" rx="28" ry="14" fill="none" stroke={PINK} strokeWidth="0.6" strokeOpacity="0.5"/>
        <ellipse cx="50"  cy="90" rx="22" ry="14" fill="none" stroke={PINK} strokeWidth="0.6" strokeOpacity="0.5"/>
        <ellipse cx="230" cy="90" rx="22" ry="14" fill="none" stroke={PINK} strokeWidth="0.6" strokeOpacity="0.5"/>
        <ellipse cx="140" cy="30" rx="20" ry="10" fill="none" stroke={PINK} strokeWidth="0.6" strokeOpacity="0.5"/>
        <ellipse cx="140" cy="150" rx="20" ry="10" fill="none" stroke={PINK} strokeWidth="0.6" strokeOpacity="0.5"/>
        {/* Bridges */}
        {[
          [112,85,72,85],[112,95,72,95],   // left bridges ×2
          [168,85,208,85],[168,95,208,95], // right bridges ×2
          [130,76,140,40],[150,76,140,40], // top ×2
          [130,104,140,140],[150,104,140,140], // bottom (only 1 shown)
        ].map(([x1,y1,x2,y2],i)=>(
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={INK} strokeWidth="1.5" strokeOpacity="0.12"/>
        ))}
        {/* Labels */}
        <text x="140" y="93" textAnchor="middle" fontSize="9" fill={INK}>isla</text>
        <text x="50"  y="93" textAnchor="middle" fontSize="8.5" fill={DIM}>orilla</text>
        <text x="230" y="93" textAnchor="middle" fontSize="8.5" fill={DIM}>orilla</text>
        <text x="140" y="33" textAnchor="middle" fontSize="8" fill={DIM}>norte</text>
        <text x="140" y="153" textAnchor="middle" fontSize="8" fill={DIM}>sur</text>
        <text x="140" y="172" textAnchor="middle" fontSize="7.5" fill={PINK} letterSpacing="1">sin camino euleriano</text>
      </svg>
    );

    case 'bipartito': return (
      <svg viewBox="0 0 260 160" className="w-full max-w-xs" fontFamily="'JetBrains Mono', monospace">
        {/* Edges */}
        {[
          [60,30, 200,30],[60,30, 200,80],[60,30, 200,130],
          [60,80, 200,30],[60,80, 200,80],[60,80, 200,130],
          [60,130,200,30],[60,130,200,80],[60,130,200,130],
        ].map(([x1,y1,x2,y2],i)=>(
          <line key={i} x1={x1} y1={y1+4} x2={x2} y2={y2+4}
            stroke={PINK} strokeWidth="0.5" strokeOpacity="0.4"/>
        ))}
        {/* Left set */}
        {[{y:30,w:'tierra'},{y:80,w:'fuego'},{y:130,w:'viento'}].map(n=>(
          <text key={n.w} x="58" y={n.y} textAnchor="end" fontSize="9.5" fill={INK}>{n.w}</text>
        ))}
        {/* Right set */}
        {[{y:30,w:'agua'},{y:80,w:'hielo'},{y:130,w:'niebla'}].map(n=>(
          <text key={n.w} x="202" y={n.y} textAnchor="start" fontSize="9.5" fill={INK}>{n.w}</text>
        ))}
        <line x1="130" y1="15" x2="130" y2="145" stroke={INK} strokeWidth="0.3" strokeOpacity="0.2" strokeDasharray="3,3"/>
        <text x="130" y="155" textAnchor="middle" fontSize="7.5" fill={DIM}>solo se rozan en la orilla</text>
      </svg>
    );

    /* ── TEORÍA DE NÚMEROS ─────────────────────────── */

     

/* ── Número primo 53 ─────────────────────────── */

case 'primo': return (
  <svg
    viewBox="0 0 420 650"
    className="w-full max-w-2xl"
    fontFamily="'JetBrains Mono', monospace"
  >
    {[
      { n: '7', verse: 'El cielo despejado' },
      { n: '5', verse: 'el sonido de' },
      { n: '3', verse: 'los grillos' },
      { n: '7', verse: 'me acompañan hasta' },
      { n: '5', verse: 'que amanece' },
      { n: '3', verse: 'Qué sorda' },
      { n: '7', verse: 'es la soledad y' },
      { n: '5', verse: 'presente es la' },
      { n: '3', verse: 'lejaní-' },
      { n: '5', verse: 'a, prende la luz,' },
      { n: '3', verse: 'respira' },
    ].map((item, i) => (
      <g key={i}>
        {/* Primera columna: puntos */}
        <circle
          cx="28"
          cy={22 + i * 27}
          r="2"
          fill={PINK}
          opacity="0.8"
        />

        {/* Segunda columna: números */}
        <text
          x="70"
          y={26 + i * 27}
          fontSize="18.2"
          fill={PINK}
          textAnchor="middle"
        >
          {item.n}
        </text>

        {/* Tercera columna: versos */}
        <text
          x="110"
          y={26 + i * 27}
          fontSize="18.2"
          fill={INK}
        >
          {item.verse}
        </text>
      </g>
    ))}

    {/* Número 53 grande, rosa y centrado */}
    <text
      x="190"
      y="490"
      textAnchor="middle"
      fontSize="76"
      fontWeight="300"
      fill={PINK}
      opacity="0.9"
    >
      53
    </text>
  </svg>
);



/* ———————————————— Fibonacci ─────────────────────────── */

case 'fibonacci': {
  const sizes = [1, 1, 2, 3, 5, 8];

  const verses = [
    { n: '1', verse: 'luz' },
    { n: '1', verse: 'chal' },
    { n: '2', verse: 'fuego' },
    { n: '3', verse: 'de lana' },
    { n: '5', verse: 'que me protege' },
    { n: '8', verse: 'en el cielo despejado' },
  ];

  type Square = {
    x: number;
    y: number;
    size: number;
  };

  const squares: Square[] = [
    { x: 0, y: 0, size: 1 },
    { x: 1, y: 0, size: 1 },
    { x: 0, y: 1, size: 2 },
    { x: -3, y: 0, size: 3 },
    { x: -3, y: -5, size: 5 },
    { x: 2, y: -5, size: 8 },
  ];

  const minX = Math.min(...squares.map(s => s.x));
  const maxX = Math.max(...squares.map(s => s.x + s.size));
  const minY = Math.min(...squares.map(s => s.y));
  const maxY = Math.max(...squares.map(s => s.y + s.size));

  const unit = 18;
  const diagramWidth = (maxX - minX) * unit;
  const offsetX = (300 - diagramWidth) / 2;
  const offsetY = 12;

  const sx = (x: number) =>
    offsetX + (x - minX) * unit;

  const sy = (y: number) =>
    offsetY + (maxY - y) * unit;

  // Espiral orgánica dibujada con curvas Bézier.
  const spiral = `
    M ${sx(0)} ${sy(1)}
    C ${sx(0)} ${sy(0.45)},
      ${sx(0.45)} ${sy(0)},
      ${sx(1)} ${sy(0)}

    C ${sx(1.55)} ${sy(0)},
      ${sx(2)} ${sy(0.45)},
      ${sx(2)} ${sy(1)}

    C ${sx(2)} ${sy(2.1)},
      ${sx(1.1)} ${sy(3)},
      ${sx(0)} ${sy(3)}

    C ${sx(-1.65)} ${sy(3)},
      ${sx(-3)} ${sy(1.65)},
      ${sx(-3)} ${sy(0)}

    C ${sx(-3)} ${sy(-2.7)},
      ${sx(-0.3)} ${sy(-5)},
      ${sx(2)} ${sy(-5)}

    C ${sx(6.4)} ${sy(-5)},
      ${sx(10)} ${sy(-1.4)},
      ${sx(10)} ${sy(3)}
  `;

  return (
    <svg
      viewBox="0 0 300 410"
      className="w-full max-w-sm"
      fontFamily="'JetBrains Mono', monospace"
    >
      {/* Cuadrados */}
      {squares.map((square, i) => {
        const left = sx(square.x);
        const top = sy(square.y + square.size);
        const side = square.size * unit;

        return (
          <g key={`square-${i}`}>
            <rect
              x={left}
              y={top}
              width={side}
              height={side}
              fill="none"
              stroke={PINK}
              strokeWidth="0.8"
              strokeOpacity="0.65"
            />

            <text
              x={left + side / 2}
              y={top + side / 2 + 3}
              textAnchor="middle"
              fontSize={square.size === 1 ? 7 : 9}
              fill={INK}
            >
              {sizes[i]}
            </text>
          </g>
        );
      })}

      {/* Espiral gris tenue */}
      <path
        d={spiral}
        fill="none"
        stroke="#B8B8B8"
        strokeWidth="1.5"
        strokeOpacity="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Versos */}
      {verses.map((item, i) => (
        <g key={`verse-${i}`}>
          <text
            x="70"
            y={210 + i * 21}
            textAnchor="middle"
            fontSize="13"
            fill={PINK}
          >
            {item.n}
          </text>

          <text
            x="95"
            y={210 + i * 21}
            fontSize="13"
            fill={INK}
          >
            {item.verse}
          </text>
        </g>
      ))}
    </svg>
  );
}

    
/* ── Piema ───────────────────────────────────── */

case 'piema': return (
  <svg
    viewBox="0 0 490 620"
    className="w-full max-w-2xl"
    fontFamily="'JetBrains Mono', monospace"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Tabla del poema */}
    {[
      { n: '3', verse: 'No puedo dormir,' },
      { n: '1', verse: 'oscuridad' },
      { n: '4', verse: 'no quiero cerrar los' },
      { n: '1', verse: 'ojos,' },
      { n: '5', verse: 'perder el norte hasta desaparecer' },
      { n: '9', verse: 'Sentir los números del reloj' },
      { n: '', verse: 'parpadeando, vigilándole al dormir.' },
    ].map((item, i) => (
      <g key={i}>
        <text
          x="35"
          y={54 + i * 29}
          fontSize="20"
          fill={PINK}
          textAnchor="middle"
        >
          {item.n}
        </text>

        <text
          x="65"
          y={54 + i * 29}
          fontSize="20"
          fill={INK}
        >
          {item.verse}
        </text>
      </g>
    ))}

    {/* Dibujo de pi debajo del poema */}
    <g transform="translate(260, 440)">
      {/* Órbita exterior */}
      <circle
        cx="0"
        cy="0"
        r="115"
        fill="none"
        stroke={PINK}
        strokeWidth="1"
        opacity="0.8"
      />

      {/* Órbita discontinua */}
      <circle
        cx="0"
        cy="0"
        r="95"
        fill="none"
        stroke={INK}
        strokeWidth="1"
        strokeDasharray="4 6"
        opacity="0.8"
      />

      {/* Círculo interior */}
      <circle
        cx="0"
        cy="0"
        r="62"
        fill="none"
        stroke={PINK}
        strokeWidth="1"
      />

      {/* Dígitos de pi alrededor */}
      <defs>
        <path
          id="piema-circle"
          d="M 0,-82 A 82,82 0 1,1 -0.1,-82"
        />
      </defs>

      <text
        fill={INK}
        fontSize="10"
        letterSpacing="2"
        fontFamily="'JetBrains Mono', monospace"
      >
        
<textPath href="#piema-circle" startOffset="0%">
  3.141592653589793238462643383279502884197169399375105820974....
</textPath>

      </text>

      {/* Símbolo pi central */}
      <text
        x="0"
        y="24"
        textAnchor="middle"
        fontSize="76"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        fill={PINK}
      >
        π
      </text>

      {/* Puntos decorativos */}
      <circle cx="0" cy="-115" r="3" fill={PINK} />
      <circle cx="115" cy="0" r="3" fill={PINK} />
      <circle cx="0" cy="115" r="3" fill={PINK} />
      <circle cx="-115" cy="0" r="3" fill={PINK} />
    </g>
  </svg>
);



    

    /* ── PROBABILIDAD ──────────────────────────────── */
    

        /* ── Dado ──────────────────────────────── */

    
case 'dado': {
  const dice = [
    { x: 25, y: 12, dots: 1, word: 'descansar' },
    { x: 110, y: 12, dots: 2, word: 'suerte' },
    { x: 195, y: 12, dots: 3, word: 'cortando' },
    { x: 25, y: 91, dots: 4, word: 'miel' },
    { x: 110, y: 91, dots: 5, word: 'desciende' },
    { x: 195, y: 91, dots: 6, word: 'ajolote' },
  ];

  const positions = [
    [[20, 20]],
    [[12, 12], [28, 28]],
    [[12, 12], [20, 20], [28, 28]],
    [[12, 12], [28, 12], [12, 28], [28, 28]],
    [[12, 12], [28, 12], [20, 20], [12, 28], [28, 28]],
    [[12, 12], [28, 12], [12, 20], [28, 20], [12, 28], [28, 28]],
  ];

  return (
    <svg
      viewBox="0 0 290 166"
      className={`w-full ${isLightbox ? 'max-w-[800px]' : 'max-w-xs'}`}
      fontFamily="'JetBrains Mono', monospace"
    >
      {dice.map(({ x, y, dots, word }) => (
        <g key={word} transform={`translate(${x}, ${y})`}>
          <rect
            width="40"
            height="40"
            rx="5"
            fill="none"
            stroke={INK}
            strokeWidth="0.7"
            strokeOpacity="0.2"
          />

          {positions[dots - 1].map(([px, py], i) => (
            <circle
              key={i}
              cx={px}
              cy={py}
              r="2.2"
              fill={PINK}
              opacity="0.8"
            />
          ))}

          <text
            x="20"
            y="54"
            textAnchor="middle"
            fontSize="8"
            fill={DIM}
          >
            {word}
          </text>
        </g>
      ))}
    </svg>
  );
}


 /* ── Cadenas de Markov ──────────────────────────────── */


    case 'markov': return (
      <svg viewBox="0 0 300 150" className="w-full max-w-sm" fontFamily="'JetBrains Mono', monospace">
        {/* Nodes */}
        {[
          {x:50, y:50, w:'del'},
          {x:150,y:50, w:'cuaderno'},
          {x:250,y:50, w:'borrar'},
          {x:100,y:110,w:'tu'},
          {x:230,y:110,w:'nombre'},
        ].map(n=>(
          <g key={n.w}>
            <circle cx={n.x} cy={n.y} r="18" fill="none" stroke={PINK} strokeWidth="0.7" strokeOpacity="0.5"/>
            <text x={n.x} y={n.y+4} textAnchor="middle" fontSize="8" fill={INK}>{n.w}</text>
          </g>
        ))}
        {/* Arrows */}
        {[
          [50,50, 82,50],
          [118,50,162,50],
          [180,68,120,92],
          [155,110,202,110],
          [210,95,195,65],
        ].map(([x1,y1,x2,y2],i)=>(
          <g key={i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={INK} strokeWidth="0.6" strokeOpacity="0.25"/>
            <polygon points={`${x2},${y2} ${x2-6},${y2-3} ${x2-6},${y2+3}`}
              fill={INK} fillOpacity="0.25"
              transform={`rotate(${Math.atan2(y2-y1,x2-x1)*180/Math.PI},${x2},${y2})`}/>
          </g>
        ))}
        <text x="150" y="143" textAnchor="middle" fontSize="10.5" fill={DIM} letterSpacing="0.5">
          p(xₙ | xₙ₋₁)
        </text>
      </svg>
    );


        /* ── Dado ──────────────────────────────── */

    

case 'pascal-triangle': {
  const rows = [
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
    [1, 5, 10, 10, 5, 1],
  ];

  const centerX = 160;
  const startY = 13;
  const rowGap = 22;
  const colGap = 48;

  const point = (row: number, col: number) => ({
    x: centerX - (row * colGap) / 2 + col * colGap,
    y: startY + row * rowGap,
  });

  return (
    <svg
      viewBox="0 0 320 130"
      className="w-full max-w-sm"
      fontFamily="'JetBrains Mono', monospace"
    >
      {/* Líneas que conectan los coeficientes */}
      {rows.slice(0, -1).map((row, i) =>
        row.map((_, j) => {
          const parent = point(i, j);
          const leftChild = point(i + 1, j);
          const rightChild = point(i + 1, j + 1);

          return (
            <g key={`connectors-${i}-${j}`}>
              <line
                x1={parent.x}
                y1={parent.y + 3}
                x2={leftChild.x}
                y2={leftChild.y - 5}
                stroke={PINK}
                strokeWidth="0.8"
                strokeOpacity="0.45"
              />
              <line
                x1={parent.x}
                y1={parent.y + 3}
                x2={rightChild.x}
                y2={rightChild.y - 5}
                stroke={PINK}
                strokeWidth="0.8"
                strokeOpacity="0.45"
              />
            </g>
          );
        })
      )}

      {/* Coeficientes del triángulo */}
      {rows.map((row, i) =>
        row.map((value, j) => {
          const { x, y } = point(i, j);
          const isTen = value === 10;
          const isOne = value === 1;

          return (
            <text
              key={`coefficient-${i}-${j}`}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="11"
              fontWeight={isTen ? "600" : "400"}
              fill={isTen ? PINK : isOne ? `${INK}70` : INK}
            >
              {value}
            </text>
          );
        })
      )}
    </svg>
  );
}
     
    default:
      return null;
  }
}

export function MathExampleShape({
  shape,
  lines,
  isLightbox = false,
}: Props) {
  return (
    <div className="flex w-full min-w-0 flex-col items-center">
      <MathExampleGraphic
        shape={shape}
        lines={lines}
        isLightbox={isLightbox}
      />
    </div>
  );
}
