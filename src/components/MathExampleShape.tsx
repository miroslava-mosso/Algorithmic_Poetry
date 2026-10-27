import type { MathShapeId } from '@/mathAreas';

interface Props {
  shape: MathShapeId;
  lines: string[];
}

const PINK = '#f4b6c2';
const INK  = '#0d0d0d';
const DIM  = 'rgba(13,13,13,0.45)';

export function MathExampleGraphic({ shape }: Props) {
  switch (shape) {
    /* ── GEOMETRÍA ─────────────────────────────────── */

    case 'pascal-triangle': return (
      <svg viewBox="0 0 320 130" className="w-full max-w-xs" fontFamily="'JetBrains Mono', monospace">
        {[
          [160, 8,  ['1']],
          [136, 30, ['1','1']],
          [112, 52, ['1','2','1']],
          [88,  74, ['1','3','3','1']],
          [64,  96, ['1','4','6','4','1']],
          [40, 118, ['1','5','10','10','5','1']],
        ].map(([startX, y, nums]) => {
          const arr = nums as string[];
          return arr.map((n, j) => {
            const x = (startX as number) + j * 48;
            const highlight = n === '1' ? DIM : n.length > 1 ? PINK : INK;
            return (
              <text key={`${y}-${j}`} x={x} y={y as number} fontSize="11"
                textAnchor="middle" fill={highlight} fontWeight={n==='1'?'300':'500'}>
                {n}
              </text>
            );
          });
        })}
        {/* connectors */}
        {[
          [[160,12],[136,34]],[[160,12],[184,34]],
          [[136,34],[112,56]],[[136,34],[160,56]],[[184,34],[160,56]],[[184,34],[208,56]],
        ].map(([[x1,y1],[x2,y2]],i)=>(
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={PINK} strokeWidth="0.4" strokeOpacity="0.5"/>
        ))}
      </svg>
    );

    case 'circulo-vicioso': return (
      <svg viewBox="0 0 220 220" className="w-full max-w-[220px]" fontFamily="'JetBrains Mono', monospace">
        <defs>
          <path id="cv-ring" d="M 110,22 A 88,88 0 1,1 109.99,22" />
        </defs>
        <circle cx="110" cy="110" r="88" fill="none" stroke={PINK} strokeWidth="0.6" strokeOpacity="0.4"/>
        <circle cx="110" cy="110" r="3" fill={PINK}/>
        <text fontSize="8.6" fill={INK} letterSpacing="0.55">
          <textPath href="#cv-ring" startOffset="0%">
            el río nace · la montaña sueña · la lluvia cae · la lluvia cae · la montaña sueña · el río nace · el río nace · la montaña sueña · la lluvia cae · la lluvia cae · la montaña sueña · el río nace ·
          </textPath>
        </text>
        <text x="110" y="106" textAnchor="middle" fontSize="8" fill={DIM}>palíndromo</text>
        <text x="110" y="118" textAnchor="middle" fontSize="7.5" fill={PINK}></text>
      </svg>
    );

    case 'koch-snowflake': return (
      <svg viewBox="0 0 280 260" className="w-full max-w-sm" fontFamily="'JetBrains Mono', monospace">
        {/* Level-2 Koch snowflake outline as polygon */}
        <polygon
          points="140,18 195,108 245,108 218,155 245,200 140,200 35,200 62,155 35,108 85,108"
          fill="none" stroke={PINK} strokeWidth="0.5" strokeOpacity="0.4"/>
        {/* Words at fractal vertices */}
        {[
          [140, 14,  'nieve'],
          [250, 106, 'nieve'],
          [252, 204, 'nieve'],
          [140, 215, 'nieve'],
          [28,  204, 'nieve'],
          [28,  106, 'nieve'],
          [196, 60,  'copo'],
          [222, 132, 'copo'],
          [196, 162, 'copo'],
          [140, 178, 'copo'],
          [84,  162, 'copo'],
          [58,  132, 'copo'],
          [84,  60,  'copo'],
        ].map(([x, y, w], i) => (
          <text key={i} x={x as number} y={y as number} fontSize={w === 'nieve' ? '9.5' : '8'}
            textAnchor="middle" fill={w === 'nieve' ? INK : DIM}
            fontWeight={w === 'nieve' ? '400' : '300'}>
            {w as string}
          </text>
        ))}
        <text x="140" y="120" textAnchor="middle" fontSize="8" fill={DIM}>fractal</text>
        <text x="140" y="132" textAnchor="middle" fontSize="8" fill={PINK}>·</text>
        <text x="140" y="144" textAnchor="middle" fontSize="8" fill={DIM}>infinito</text>
      </svg>
    );

    /* ── NUDOS ─────────────────────────────────────── */



case 'hopf-link': return (
  <svg
    viewBox="0 0 300 190"
    className="w-full max-w-sm"
    fontFamily="'JetBrains Mono', monospace"
  >
    <defs>
      {/* Trayectoria circular del aro lila */}
      <path
        id="hopf-lilac-text-path"
        d="M 112,35
           A 90,90 0 1 1 112,149
           A 90,90 0 1 1 112,35"
      />

      {/* Trayectoria circular del aro rosa */}
      <path
        id="hopf-gray-text-path"
        d="M 188,35
           A 57,57 0 1 1 188,149
           A 57,57 0 1 1 188,35"
      />
    </defs>

    {/* Aro lila */}
    <circle
      cx="112"
      cy="92"
      r="90"
      fill="none"
      stroke="#B69AE8"
      strokeWidth="0.5"
      strokeOpacity="0.35"
    />

    {/* Aro rosa */}
    <circle
      cx="188"
      cy="92"
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
  stroke="#F7F5F1"
  strokeWidth="2.5"
  strokeLinejoin="round"
>
  <textPath
    href="#hopf-lilac-text-path"
    startOffset="0%"
    textLength="350"
    lengthAdjust="spacing"
  >
    Mientras la casa olía a pastel horneado
  </textPath>
</text>

{/* Verso del aro rosa */}
<text
  fontSize="8"
  fill="#0d0d0d"
  letterSpacing="0.2"
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

      
    case 'figure-eight-knot': return (
      <svg viewBox="0 0 300 160" className="w-full max-w-sm" fontFamily="'JetBrains Mono', monospace">
        <defs>
          <path id="fe-path"
            d="M 30,80 C 50,20 110,20 130,80 C 150,140 210,140 240,80
               C 270,20 270,20 250,80 C 230,140 170,140 150,80
               C 130,20 80,10 50,80 C 20,150 40,150 30,80" />
        </defs>
        <path d="M 30,80 C 50,20 110,20 130,80 C 150,140 210,140 240,80
                 C 270,20 270,20 250,80 C 230,140 170,140 150,80
                 C 130,20 80,10 50,80 C 20,150 40,150 30,80"
          fill="none" stroke={PINK} strokeWidth="0.5" strokeOpacity="0.35"/>
        <text fontSize="8.5" fill={INK} letterSpacing="0.5">
          <textPath href="#fe-path">
            sube · baja · se · cruza · se · cruza · vuelve · nunca · ido ·
          </textPath>
        </text>
        <text x="150" y="86" textAnchor="middle" fontSize="8" fill={DIM}>∞</text>
      </svg>
    );

    case 'trefoil-knot': return (
      <svg viewBox="0 0 240 240" className="w-full max-w-[240px]" fontFamily="'JetBrains Mono', monospace">
        <defs>
          <path id="tf-path"
            d="M 120,30 C 180,30 220,80 200,130
               C 180,180 130,200 120,190
               C 110,200 60,180 40,130
               C 20,80 60,30 120,30
               M 120,190 C 80,170 60,130 80,90
               C 100,50 140,50 160,90
               C 180,130 160,170 120,190" />
        </defs>
        {/* Three lobes */}
        <path d="M 120,50 C 165,50 195,85 180,125 C 165,165 135,178 120,172"
          fill="none" stroke={PINK} strokeWidth="0.5" strokeOpacity="0.4"/>
        <path d="M 120,172 C 80,172 45,145 50,110 C 55,75 85,55 120,50"
          fill="none" stroke={PINK} strokeWidth="0.5" strokeOpacity="0.4"/>
        <path d="M 120,50 C 120,50 170,80 170,120 C 170,160 150,172 120,172"
          fill="none" stroke={PINK} strokeWidth="0.2" strokeDasharray="2,3" strokeOpacity="0.3"/>
        {/* Labels at lobes */}
        <text x="120" y="40" textAnchor="middle" fontSize="9" fill={INK}>tres</text>
        <text x="55"  y="155" textAnchor="middle" fontSize="9" fill={INK}>cruces</text>
        <text x="185" y="155" textAnchor="middle" fontSize="9" fill={INK}>alternos</text>
        {/* Center */}
        <text x="120" y="114" textAnchor="middle" fontSize="8" fill={DIM}>nudo</text>
        <text x="120" y="126" textAnchor="middle" fontSize="8" fill={PINK}>trébol</text>
        {/* Crossing dots */}
        <circle cx="90"  cy="95"  r="2" fill={INK} fillOpacity="0.3"/>
        <circle cx="150" cy="95"  r="2" fill={INK} fillOpacity="0.3"/>
        <circle cx="120" cy="155" r="2" fill={INK} fillOpacity="0.3"/>
      </svg>
    );

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

    case 'primo': return (
      <svg viewBox="0 0 300 80" className="w-full max-w-sm" fontFamily="'JetBrains Mono', monospace">
        {[
          {x:20,  w:'el',    n:2, prime:true},
          {x:56,  w:'sol',   n:3, prime:true},
          {x:100, w:'nogal', n:5, prime:true},
          {x:164, w:'amanecer',n:8, prime:false},
          {x:240, w:'cielo', n:5, prime:true},
        ].map(item=>(
          <g key={item.w}>
            <text x={item.x} y={30} fontSize="11" fill={item.prime ? INK : DIM}
              fontWeight={item.prime ? '400':'300'}>{item.w}</text>
            <text x={item.x} y={50} fontSize="8" fill={item.prime ? PINK : DIM}
              letterSpacing="0">{item.n}
            </text>
            {item.prime && <circle cx={item.x+4} cy={62} r="2" fill={PINK} opacity="0.6"/>}
          </g>
        ))}
        <text x="150" y="78" textAnchor="middle" fontSize="7.5" fill={DIM} letterSpacing="1">
          solo palabras de longitud prima
        </text>
      </svg>
    );

    case 'fibonacci': return (
      <svg viewBox="0 0 300 200" className="w-full max-w-sm" fontFamily="'JetBrains Mono', monospace">
        {/* Fibonacci rectangles suggesting the spiral */}
        <rect x="130" y="90" width="15"  height="15"  fill="none" stroke={PINK} strokeWidth="0.5" strokeOpacity="0.5"/>
        <rect x="115" y="90" width="15"  height="15"  fill="none" stroke={PINK} strokeWidth="0.5" strokeOpacity="0.5"/>
        <rect x="115" y="75" width="30"  height="15"  fill="none" stroke={PINK} strokeWidth="0.5" strokeOpacity="0.5"/>
        <rect x="85"  y="75" width="30"  height="30"  fill="none" stroke={PINK} strokeWidth="0.5" strokeOpacity="0.5"/>
        <rect x="85"  y="30" width="60"  height="45"  fill="none" stroke={PINK} strokeWidth="0.5" strokeOpacity="0.5"/>
        <rect x="145" y="30" width="95"  height="75"  fill="none" stroke={PINK} strokeWidth="0.5" strokeOpacity="0.5"/>
        {/* Spiral approximation */}
        <path d="M 145,105 Q 130,105 130,90 Q 130,75 145,75 Q 175,75 175,105 Q 175,150 130,150 Q 85,150 85,105 Q 85,30 145,30"
          fill="none" stroke={PINK} strokeWidth="0.8" strokeOpacity="0.3"/>
        {/* Words at each rectangle */}
        {[
          {x:136, y:100, w:'sol',    s:8},
          {x:120, y:100, w:'mar',    s:8},
          {x:128, y:83,  w:'nube',   s:8},
          {x:96,  y:93,  w:'lluvia', s:8},
          {x:108, y:57,  w:'montaña',s:7.5},
          {x:182, y:70,  w:'horizonte sin fin',s:7},
        ].map(n=>(
          <text key={n.w} x={n.x} y={n.y} textAnchor="middle" fontSize={n.s} fill={INK}>{n.w}</text>
        ))}
        <text x="148" y="175" textAnchor="middle" fontSize="7.5" fill={DIM} letterSpacing="0.5">
          1 · 1 · 2 · 3 · 5 · 8 · 13
        </text>
      </svg>
    );

    case 'mersenne': return (
      <svg viewBox="0 0 300 110" className="w-full max-w-sm" fontFamily="'JetBrains Mono', monospace">
        {[
          {y:20, n:'2¹−1 = 1', words:['uno'],                                                                     s:10},
          {y:44, n:'2²−1 = 3', words:['tres','lunas','frías'],                                                     s:9.5},
          {y:68, n:'2³−1 = 7', words:['siete','pájaros','sobre','el','alambre','de','luz'],                       s:9},
          {y:92, n:'2⁴−1 = 15',words:['quince','gotas','de','lluvia','resbalan','por','el','cristal','del','tren','que','nunca','llegó','a','tiempo'], s:8},
        ].map((row,ri)=>{
          const startX = 10;
          const gap = (290 - startX) / Math.max(row.words.length, 1);
          return (
            <g key={ri}>
              <text x={startX} y={row.y} fontSize="7" fill={DIM}>{row.n}</text>
              {row.words.map((w,wi)=>(
                <text key={wi} x={startX + 60 + wi * gap} y={row.y}
                  fontSize={row.s} fill={ri===3 ? DIM : INK}
                  textAnchor="middle">{w}</text>
              ))}
            </g>
          );
        })}
        <line x1="10" y1="100" x2="290" y2="100" stroke={PINK} strokeWidth="0.4" strokeOpacity="0.4"/>
      </svg>
    );

    /* ── PROBABILIDAD ──────────────────────────────── */

    case 'dado': return (
      <svg viewBox="0 0 290 190" className="w-full max-w-xs" fontFamily="'JetBrains Mono', monospace">
        {[
          {x:14, y:14, dots:1, word:'azar'},
          {x:110,y:14, dots:2, word:'suerte'},
          {x:206,y:14, dots:3, word:'destino'},
          {x:14, y:96, dots:4, word:'ola'},
          {x:110,y:96, dots:5, word:'tempestad'},
          {x:206,y:96, dots:6, word:'calma'},
        ].map(({x,y,dots,word})=>(
          <g key={word} transform={`translate(${x},${y})`}>
            <rect width="80" height="70" rx="6" fill="none" stroke={INK} strokeWidth="0.6" strokeOpacity="0.15"/>
            {Array.from({length:dots}).map((_,i)=>{
              const positions = [
                [[40,35]],
                [[20,18],[60,52]],
                [[20,18],[40,35],[60,52]],
                [[20,18],[60,18],[20,52],[60,52]],
                [[20,18],[60,18],[40,35],[20,52],[60,52]],
                [[20,18],[60,18],[20,35],[60,35],[20,52],[60,52]],
              ];
              const [px,py] = positions[dots-1][i];
              return <circle key={i} cx={px} cy={py} r="2.5" fill={PINK} opacity="0.7"/>;
            })}
            <text x="40" y="84" textAnchor="middle" fontSize="8" fill={DIM}>{word}</text>
          </g>
        ))}
      </svg>
    );

    case 'markov': return (
      <svg viewBox="0 0 300 150" className="w-full max-w-sm" fontFamily="'JetBrains Mono', monospace">
        {/* Nodes */}
        {[
          {x:30, y:50, w:'el'},
          {x:100,y:50, w:'gato'},
          {x:180,y:50, w:'duerme'},
          {x:100,y:110,w:'tranquilo'},
          {x:220,y:110,w:'soña'},
        ].map(n=>(
          <g key={n.w}>
            <circle cx={n.x} cy={n.y} r="18" fill="none" stroke={PINK} strokeWidth="0.7" strokeOpacity="0.5"/>
            <text x={n.x} y={n.y+4} textAnchor="middle" fontSize="8.5" fill={INK}>{n.w}</text>
          </g>
        ))}
        {/* Arrows */}
        {[
          [48,50, 82,50],
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
        <text x="150" y="143" textAnchor="middle" fontSize="7.5" fill={DIM} letterSpacing="0.5">
          p(xₙ | xₙ₋₁) — cada palabra depende solo de la anterior
        </text>
      </svg>
    );

    case 'borracho': return (
      <svg viewBox="0 0 300 120" className="w-full max-w-sm" fontFamily="'JetBrains Mono', monospace">
        {/* Random walk path */}
        {(() => {
          const pts: [number,number][] = [
            [10,60],[40,40],[70,70],[100,45],[130,75],[160,50],[190,80],[220,35],[250,65],[280,55]
          ];
          const words = ['pa','so','a','pa','so','a','pa','so','a','pa'];
          return (
            <g>
              <polyline points={pts.map(([x,y])=>`${x},${y}`).join(' ')}
                fill="none" stroke={PINK} strokeWidth="1" strokeOpacity="0.5"/>
              {pts.map(([x,y],i)=>(
                <g key={i}>
                  <circle cx={x} cy={y} r="2" fill={INK} opacity="0.3"/>
                  <text x={x} y={y-8} textAnchor="middle" fontSize="8.5" fill={INK}>{words[i]}</text>
                </g>
              ))}
              <line x1="10" y1="100" x2="280" y2="100" stroke={INK} strokeWidth="0.3" strokeOpacity="0.2"/>
              <text x="150" y="115" textAnchor="middle" fontSize="7.5" fill={DIM}>paseo aleatorio · Δ = ±1</text>
            </g>
          );
        })()}
      </svg>
    );

    /* ── TEORÍA DE CUERDAS ─────────────────────────── */

    case 'vibracion': return (
      <svg viewBox="0 0 300 120" className="w-full max-w-sm" fontFamily="'JetBrains Mono', monospace">
        {/* Three harmonics of a string */}
        {[
          {amp:24, freq:1, y:30,  word:'do',   color: INK,  label:'n=1'},
          {amp:16, freq:2, y:70,  word:'mi',   color: DIM,  label:'n=2'},
          {amp:10, freq:3, y:104, word:'sol',  color: PINK, label:'n=3'},
        ].map(({amp,freq,y,word,color,label})=>{
          const pts = Array.from({length:61},(_,i)=>{
            const x = 20 + i*4.3;
            const t = (i/60)*Math.PI*2*freq;
            return `${x},${y+Math.sin(t)*amp}`;
          }).join(' ');
          return (
            <g key={label}>
              <polyline points={pts} fill="none" stroke={color} strokeWidth="0.9" opacity="0.6"/>
              <text x="8" y={y+4} fontSize="7.5" fill={DIM}>{label}</text>
              <text x="280" y={y+4} fontSize="9" fill={color} textAnchor="middle">{word}</text>
            </g>
          );
        })}
        <line x1="20" y1="15" x2="20" y2="115" stroke={INK} strokeWidth="0.5" strokeOpacity="0.2"/>
        <line x1="278" y1="15" x2="278" y2="115" stroke={INK} strokeWidth="0.5" strokeOpacity="0.2"/>
      </svg>
    );

    case 'dimension-oculta': return (
      <svg viewBox="0 0 280 140" className="w-full max-w-xs" fontFamily="'JetBrains Mono', monospace">
        {/* Anagram grid: amor / roma / ramo / mora */}
        {[
          {row:0, cols:[{w:'amor',c:INK},{w:'→',c:PINK},{w:'roma',c:DIM}]},
          {row:1, cols:[{w:'↓',  c:PINK},{w:'',  c:''  },{w:'↓',  c:PINK}]},
          {row:2, cols:[{w:'ramo',c:DIM},{w:'→',c:PINK},{w:'mora',c:DIM}]},
        ].map(({row,cols})=>(
          cols.map(({w,c},ci)=>{
            if(!w) return null;
            return (
              <text key={`${row}-${ci}`} x={50+ci*90} y={40+row*45}
                textAnchor="middle" fontSize={w==='→'||w==='↓'?10:11}
                fill={c} letterSpacing="1">{w}</text>
            );
          })
        ))}
        <text x="140" y="125" textAnchor="middle" fontSize="8" fill={DIM} letterSpacing="0.5">
          mismas letras · distintas dimensiones
        </text>
        {/* Decorative diagonals */}
        <line x1="70" y1="30" x2="230" y2="90" stroke={PINK} strokeWidth="0.3" strokeOpacity="0.3" strokeDasharray="3,4"/>
        <line x1="230" y1="30" x2="70" y2="90" stroke={PINK} strokeWidth="0.3" strokeOpacity="0.3" strokeDasharray="3,4"/>
      </svg>
    );

    case 'brana': return (
      <svg viewBox="0 0 280 200" className="w-full max-w-xs" fontFamily="'JetBrains Mono', monospace">
        {/* Grid membrane with words at nodes */}
        {(() => {
          const cols = 5, rows = 5;
          const xs = [40,90,140,190,240];
          const ys = [30,68,106,144,182];
          const words = [
            ['·','·','brana','·','·'],
            ['·','mem','brana','mem','·'],
            ['mem','brana','BRANA','brana','mem'],
            ['·','mem','brana','mem','·'],
            ['·','·','brana','·','·'],
          ];
          const lines = [];
          for(let r=0;r<rows;r++) for(let c=0;c<cols-1;c++)
            lines.push(<line key={`h${r}${c}`} x1={xs[c]} y1={ys[r]} x2={xs[c+1]} y2={ys[r]}
              stroke={PINK} strokeWidth="0.4" strokeOpacity="0.3"/>);
          for(let r=0;r<rows-1;r++) for(let c=0;c<cols;c++)
            lines.push(<line key={`v${r}${c}`} x1={xs[c]} y1={ys[r]} x2={xs[c]} y2={ys[r+1]}
              stroke={PINK} strokeWidth="0.4" strokeOpacity="0.3"/>);
          return (
            <>
              {lines}
              {words.map((row,ri)=>row.map((w,ci)=>(
                <text key={`${ri}-${ci}`} x={xs[ci]} y={ys[ri]+4}
                  textAnchor="middle"
                  fontSize={w==='BRANA'?11: w==='·'?10:8}
                  fill={w==='BRANA'?INK: w==='·'?PINK:DIM}
                  fontWeight={w==='BRANA'?'500':'300'}>
                  {w}
                </text>
              )))}
            </>
          );
        })()}
      </svg>
    );

    default:
      return null;
  }
}

export function MathExampleShape({ shape, lines }: Props) {
  return (
    <div className="flex flex-col items-center">
      <MathExampleGraphic shape={shape} lines={lines} />
    </div>
  );
}
