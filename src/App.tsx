import { useState } from 'react';
import { poems } from '@/poems';
import { mathAreas } from '@/mathAreas';
import { useReveal } from '@/useReveal';
import { PoemCard } from '@/components/PoemCard';
import { MathAreaCard } from '@/components/MathAreaCard';
import { HodgeAlgorithm } from '@/components/HodgeAlgorithm';

function App() {
  const ref = useReveal<HTMLDivElement>();
  const [activeTab, setActiveTab] = useState('poesia');

  const tabs = [
    { id: 'poesia', label: 'Reglas del juego' },
    { id: 'galeria', label: 'Galería' },
    { id: 'areas', label: 'Áreas' },
    { id: 'algoritmo', label: 'Mi algoritmo' },
    { id: 'contacto', label: 'Contacto' },
    { id: 'moduli-space', label: 'Moduli space' },
  ];

  const navigateTo = (tab: string, sectionId: string) => {
    setActiveTab(tab);
    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <div ref={ref} className="min-h-screen bg-[#f7f5f1] text-ink">
      {/* ── Nav ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#f7f5f1]/80 border-b hairline">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 h-14 flex items-center justify-between">
          <button type="button" onClick={() => { setActiveTab('poesia'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="font-display text-lg tracking-wide flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-[#f4b6c2] rotate-45" />
            Poesía potencial
          </button>
          <span className="font-mono-lt text-[10px] text-ink/40">Poesía Algorítmica 2026</span>
        </div>
        <nav aria-label="Secciones" role="tablist" className="mx-auto max-w-[1180px] px-5 sm:px-8 py-5 flex items-center gap-5 sm:gap-10 overflow-x-auto font-mono-lt text-sm sm:text-base uppercase text-ink/70">
          {tabs.map((tab) => (
            <button key={tab.id} id={`tab-${tab.id}`} type="button" role="tab" aria-selected={activeTab === tab.id} aria-controls={`panel-${tab.id}`} onClick={() => { setActiveTab(tab.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`shrink-0 transition hover:text-ink ${activeTab === tab.id ? 'text-ink pink-underline-thin' : ''}`}>
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      <main>
      {activeTab === 'poesia' && <div id="panel-poesia" role="tabpanel" aria-labelledby="tab-poesia">
        
      {/* ── Hero ────────────────────────────────────────── */}
      <section id="top" className="relative">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 pt-20 sm:pt-5 pb-20 sm:pb-28">
          <div className="reveal flex items-center gap-3 mb-10">
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <h1 className="reveal font-display text-[13vw] sm:text-[8vw] leading-[0.95] tracking-tight max-w-[14ch]">
                La poesía<br />
                <span className="italic">como</span>{' '}
                <span className="pink-underline">geometría</span>
              </h1>

              <p className="reveal font-body text-xl sm:text-2xl leading-[1.5] mt-10 max-w-[52ch] text-ink/80">
                Cuaderno personal de poesía visual inspirada en el Oulipo y la                     literatura potencial. Cada poema obedece a una restricción                         matemática diferente. Las palabras juegan con el espacio, se                       constriñen, obedecen formas geométricas, y cada una tiene un                       significado diferente.  
              </p>

              <div className="reveal mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono-lt text-[11px] uppercase text-ink/55">
                <span>4 poemas visuales</span>
                <span className="text-ink/20">/</span>
                <span>5 áreas matemáticas</span>
                <span className="text-ink/20">/</span>
                <span>1 constricción diferente para cada poema</span>
                <span className="text-ink/20">/</span>
                <span>1 algoritmo nuevo</span>
                <span className="text-ink/20">/</span>
                <a href="#galeria" onClick={(e) => { e.preventDefault(); navigateTo('galeria', 'galeria'); }} className="pink-underline-thin text-ink hover:text-ink transition">
                  Ver galería
                </a>
              </div>
            </div>

            <div className="reveal flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] aspect-[4/5] overflow-hidden border hairline p-2 bg-[#ebe7df]">
                
<img
  src={`${import.meta.env.BASE_URL}Po-poema_2.001.jpeg`}
  alt="Poema visual sobre una escultura en un patio"
  className="w-full h-full object-cover object-[38%_center]"
/>

              </div>
            </div>
          </div>
        </div>

        {/* Marquee inferior */}
        <div className="border-y hairline overflow-hidden bg-[#f7f5f1]">
          <div className="marquee-track flex whitespace-nowrap py-3 font-mono-lt text-[11px] uppercase text-ink/45">
            {Array.from({ length: 2 }).map((_, k) => (
              <span key={k} className="flex">
                {poems.map((p) => (
                  <span key={p.id} className="px-12 flex items-center gap-6">
                    {p.title}
                    <span className="inline-block w-1 h-1 bg-[#f4b6c2] rounded-full" />
                    {p.technique}
                    <span className="text-ink/20">·</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reglas del juego ──────────────────────────────────── */}
      <section id="Reglas del juego" className="border-b hairline">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 sm:py-28 grid gap-10 sm:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal">
            <span className="font-mono-lt text-[11px] uppercase text-ink/50">§ Reglas del juego </span>
            <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-[1.05]">
              Instrucciones para ponerle límites a un <span className="pink-underline italic">poema</span>.
            </h2>
          </div>
          <div className="reveal font-body text-lg sm:text-xl leading-[1.6] text-ink/80 space-y-5">
            <p>
              El Oulipo —<em>Ouvroir de littérature potentielle</em>, traducido el español como <em>taller de literatura potencial</em>,—                 es un grupo de literatura experimental que nació en París en 1960. Dentro de ella se encuentra la poesía potencial, que es                una práctica de creación poética no-convencional, cuya forma de hacer poesía es todo menos esperar a que llegue la                        inspiración divina. Quien escribe lo hace experimentando con reglas llamadas <span className="pink-underline-thin">restricciones</span>, que sirven como obstáculos que se le imponen al lenguaje para descubrir cómo responde la poesía ante ellos, con la finalidad de —algún día— encontrar <span className="pink-underline-thin">todos los poemas posibles</span>.  
            </p>

            <p>
              Sucede que a través de juegos y reglas se unen las <span className="pink-underline-thin">matemáticas</span> y la <span className="pink-underline-thin">literatura</span> para buscar nuevas posibilidades y estructuras para generar poemas. Este cuaderno digital recoge mi propia lectura/escritura de esa tradición.
             </p>
          
            <p className="font-body text-lg sm:text-xl leading-[1.55] text-ink/75 not-italic">
              Agradezco infinitamente a{' '}
              <a className="burnt-marker" href="https://www.instagram.com/batsssht/" target="_blank" rel="noreferrer">
                <strong>Regina Roze</strong>
              </a>{' '}
              por introducirme al mundo de la poesía potencial a través de los
              laboratorios de poesía potencial en México,{' '}
              <a className="burnt-marker" href="https://www.instagram.com/popoesia/" target="_blank" rel="noreferrer">
                <strong>popoesía</strong>
              </a>, en donde aprendí a hacer muchos de los poemas que aquí muestro. Y si tienen curiosidad por aprender muchas otras constricciones y juegos, les recomiendo mucho unirse a sus laboratorios.
            </p>
          </div>
        </div>
      </section>

      </div>}

      {/* ── Galería ─────────────────────────────────────── */}
      {activeTab === 'galeria' && <div id="panel-galeria" role="tabpanel">
      <section id="galeria" className="border-b hairline">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 pt-10 sm:pt-16 pb-6">
  <div className="reveal grid gap-10 sm:grid-cols-[1.5fr_0.8fr]">
    <div>
      <span className="font-mono-lt text-[11px] uppercase text-ink/50">§ Galería</span>
      <h2
  className="font-display text-4xl sm:text-5xl mt-4"
  style={{ lineHeight: '1.3' }}>
        Cuatro <span className="pink-underline">formas</span> geométricas, cuatro <span className="pink-underline">poemas</span> diferentes
      </h2>
    </div>
    <div>
      <p className="font-body text-lg sm:text-xl leading-[1.6] text-ink/60">
        Pasa el cursor y haz clic sobre cada poema para verlo en grande. La restricción geométrica define la forma y el texto su contenido.
      </p>
      <div className="mt-5 pt-3 border-t hairline">
        <p className="font-mono-lt text-[11px] uppercase text-ink/50 leading-[1.7]">
          Textos originales de: <span className="text-ink">Miroslava Mosso Rojas</span>
        </p>
      </div>
    </div>
  </div>
</div>
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 pb-8 grid gap-0 grid-cols-2 lg:grid-cols-4 border hairline border-b-0 border-l-0 border-r-0">
          {poems.map((p, i) => (
            <PoemCard key={p.id} poem={p} i={i} />
          ))}
        </div>
      </section>
      </div>}

      {/* ── Áreas matemáticas ──────────────────────────── */}
      {activeTab === 'areas' && <div id="panel-areas" role="tabpanel">
      <section id="areas">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 pt-10 sm:pt-16 pb-6">
          <div className="reveal flex items-end justify-between gap-6 flex-wrap">
            <div>
              <span className="font-mono-lt text-[11px] uppercase text-ink/50">§ Áreas</span>
              <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-[1.05]">
                Cinco <span className="pink-underline">territorios</span> matemáticos
              </h2>
            </div>
            <p className="font-body text-lg sm:text-xl text-ink/60 max-w-[36ch]">
              Cada área matemática abre una manera distinta de jugar con el
              lenguaje. Hay tres ejemplos por cada territorio matemático.
            </p>
          </div>

          <nav className="reveal mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono-lt text-[11px] uppercase text-ink/60">
            {mathAreas.map((a) => (
              <a key={a.id} href={`#${a.id}`} className="hover:text-ink transition">
                <span className="text-[#f4b6c2] mr-1.5">{a.index}</span>
                {a.title}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t hairline">
          {mathAreas.map((a, i) => (
            <MathAreaCard key={a.id} area={a} i={i} />
          ))}
        </div>
      </section>
      </div>}

      {activeTab === 'algoritmo' && <div id="panel-algoritmo" role="tabpanel">
      <HodgeAlgorithm />
      </div>}

      {/* ── Fotografía ─────────────────────────────────── */}
      {activeTab === 'contacto' && <div id="panel-contacto" role="tabpanel">
      <div className="reveal relative overflow-hidden bg-[#cdb887]" style={{ height: '58vh', minHeight: '240px' }}>
        <img
          src={`${import.meta.env.BASE_URL}0001_2000268740001_2.jpg`}
          alt="Mar tranquilo, horizonte azul y arena"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'saturate(0.88) contrast(1.04)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f5f1]/0 via-[#f7f5f1]/0 to-[#0d0d0d]/80" />
        <p className="absolute bottom-7 left-1/2 -translate-x-1/2 font-mono-lt text-[11px] uppercase text-[#f7f5f1]/65 tracking-[0.22em] text-center whitespace-nowrap">
          el horizonte también es una restricción
        </p>
      </div>

      {/* ── Contacto / Footer ──────────────────────────── */}
      <footer id="contacto" className="bg-ink text-[#f7f5f1] min-h-[50vh] flex items-center">
        <div className="mx-auto max-w-[1180px] w-full px-5 sm:px-8 py-10 sm:py-12">
          <div className="reveal grid gap-8 sm:gap-10 sm:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="font-mono-lt text-[11px] uppercase text-[#f7f5f1]/50">§ Contacto</span>
              <h2 className="font-display text-4xl sm:text-5xl mt-2 leading-[1.05]">
                Escribámonos.
              </h2> 
              <p className="font-body text-lg text-[#f7f5f1]/70 mt-4 max-w-[44ch]">
                Si escribes un poema usando el algoritmo <span className="pink-underline-thin"><a href="#mi-algoritmo" onClick={(e) => { e.preventDefault(); navigateTo('algoritmo', 'mi-algoritmo'); }} className="hover:text-ink transition">El diamante de Hodge</a></span> y te                   gustaría compartirlo, ¡envíanoslo por correo electrónico para                      publicarlo en nuestra página!
                </p>
              <p className="font-body text-lg text-[#f7f5f1]/70 mt-4 max-w-[44ch]">
                Puedes mandarlo como un dibujo hecho a mano o de manera digital,                   fotografía, composición visual, collage o cualquier otra forma visual que explore las posibilidades del algoritmo.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <p className="font-mono-lt text-[10px] uppercase text-[#f7f5f1]/45">Correo</p>
                <p className="font-display text-2xl mt-1">poesia@potencial.co</p>
              </div>
              <div>
                <p className="font-mono-lt text-[10px] uppercase text-[#f7f5f1]/45">Manda tu poema</p>
                <p className="font-body text-lg mt-1">
                Incluye lo siguiente:
                </p>

<ul className="font-body text-base sm:text-lg mt-2 list-disc pl-6 leading-snug space-y-0.5">
  <li>
    El diamante de Hodge con los números originales y otro con las palabras sustituidas.
  </li>
  <li>La geometría a la que corresponde.</li>
  <li>(Opcional) Números de Betti.</li>
  <li>Título de tu poema.</li>
  <li>Nombre o pseudónimo de su autor(a).</li>
  <li>Fecha de creación.</li>
</ul>
              </div>
            </div>
          </div>

          <div className="reveal mt-8 pt-5 border-t border-[#f7f5f1]/15 flex flex-wrap items-center justify-between gap-4 font-mono-lt text-[10px] uppercase text-[#f7f5f1]/45">
            <span>Cuaderno digital de poesía potencial · {new Date().getFullYear()}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[#f4b6c2] rotate-45" />
              Constricción 2-dimensional
            </span>
          </div>
        </div>
      </footer>
      </div>}

      {activeTab === 'moduli-space' && <section id="panel-moduli-space" role="tabpanel" className="border-b hairline min-h-[70vh]">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 pt-10 sm:pt-16 pb-10 sm:pb-16">
  <div className="reveal grid gap-10 sm:grid-cols-[0.78fr_1.22fr]">
    <div>
      <span className="font-mono-lt text-[11px] uppercase text-ink/50">§ Moduli Space</span>
      <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-[1.05]">
        El <span className="pink-underline italic">moduli space</span> de poemas del diamante de Hodge
      </h2>
    </div>
    <p className="font-body text-lg sm:text-xl leading-[1.6] text-ink/80">
      En esta sección intentamos construir un espacio de parámetros, también conocido como el <em>moduli space</em>, de todos los poemas que ustedes nos quieran mandar, siguiendo la constricción del diamante de Hodge <a href="#mi-algoritmo" onClick={(e) => { e.preventDefault(); navigateTo('algoritmo', 'mi-algoritmo'); }} className="pink-underline-thin">[ver Mi algoritmo]</a>. Las instrucciones para mandar tu poema están en <a href="#contacto" onClick={(e) => { e.preventDefault(); navigateTo('contacto', 'contacto'); }} className="pink-underline-thin">[Contacto]</a>.
    </p>
  </div>
</div>
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 pb-16 grid gap-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border hairline border-b-0 border-l-0 border-r-0">
          {Array.from({ length: 3 }, (_, i) => (
            <PoemCard key={`moduli-${i}`} poem={{ id: `moduli-${i}`, index: `0${i + 1}`, title: 'Aqui va a ir tu poema', author: '', year: '', shape: 'cruz', technique: 'Aqui irá tu nombre o pseudónimo', manifest: 'PRÓXIMAMENTE', lines: [] }} i={i} placeholder />
          ))}
        </div>
      </section>}
      </main>
    </div>
  );
}

export default App;
