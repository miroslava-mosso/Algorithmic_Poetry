import { poems } from '@/poems';
import { useReveal } from '@/useReveal';
import { PoemCard } from '@/components/PoemCard';

function App() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="min-h-screen bg-[#f7f5f1] text-ink">
      {/* ── Nav ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#f7f5f1]/80 border-b hairline">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 h-14 flex items-center justify-between">
          <a href="#top" className="font-display text-lg tracking-wide flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-[#f4b6c2] rotate-45" />
            Oulipo
          </a>
          <nav className="hidden sm:flex items-center gap-7 font-mono-lt text-[11px] uppercase text-ink/70">
            <a href="#manifiesto" className="hover:text-ink transition">Manifiesto</a>
            <a href="#galeria" className="hover:text-ink transition">Galería</a>
            <a href="#talleres" className="hover:text-ink transition">Talleres</a>
            <a href="#contacto" className="hover:text-ink transition">Contacto</a>
          </nav>
          <span className="font-mono-lt text-[10px] text-ink/40">París · 1960—</span>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────── */}
      <section id="top" className="relative">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 pt-20 sm:pt-32 pb-20 sm:pb-28">
          <div className="reveal flex items-center gap-3 mb-10">
            <span className="font-mono-lt text-[11px] uppercase text-ink/50">
              Taller de Literatura Potencial
            </span>
            <span className="h-px flex-1 bg-ink/15" />
            <span className="font-mono-lt text-[11px] text-ink/40">Nº 01 — 10</span>
          </div>

          <h1 className="reveal font-display text-[13vw] sm:text-[8vw] leading-[0.95] tracking-tight max-w-[14ch]">
            La poesía<br />
            <span className="italic">como</span>{' '}
            <span className="pink-underline">geometría</span>
          </h1>

          <p className="reveal font-body text-xl sm:text-2xl leading-[1.5] mt-10 max-w-[52ch] text-ink/80">
            Un portafolio de diez poemas con forma. Cada uno obedece a una
            restricción matemática heredada del taller Oulipo: la palabra se
            pliega, gira, mengua o vuela. La página es el papel cuadriculado
            donde el verso se convierte en figura.
          </p>

          <div className="reveal mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono-lt text-[11px] uppercase text-ink/55">
            <span>10 poemas</span>
            <span className="text-ink/20">/</span>
            <span>10 formas</span>
            <span className="text-ink/20">/</span>
            <span>1 restricción cada uno</span>
            <span className="text-ink/20">/</span>
            <a href="#galeria" className="pink-underline-thin text-ink hover:text-ink transition">
              Ver galería ↓
            </a>
          </div>
        </div>

        {/* Marquee inferior */}
        <div className="border-y hairline overflow-hidden bg-[#f7f5f1]">
          <div className="marquee-track flex whitespace-nowrap py-3 font-mono-lt text-[11px] uppercase text-ink/45">
            {Array.from({ length: 2 }).map((_, k) => (
              <span key={k} className="flex">
                {poems.map((p) => (
                  <span key={p.id} className="px-6 flex items-center gap-6">
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

      {/* ── Manifiesto ──────────────────────────────────── */}
      <section id="manifiesto" className="border-b hairline">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 sm:py-28 grid gap-10 sm:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal">
            <span className="font-mono-lt text-[11px] uppercase text-ink/50">§ Manifiesto</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-[1.05]">
              Escribimos bajo <span className="pink-underline italic">restricción</span>.
            </h2>
          </div>
          <div className="reveal font-body text-lg sm:text-xl leading-[1.6] text-ink/80 space-y-5">
            <p>
              El Oulipo —<em>Ouvroir de littérature potentielle</em>— nació en
              un café de París en 1960. Sus miembros no buscan la inspiración:
              buscan la <span className="pink-underline-thin">regla</span> que
              hace posibles los poemas que nadie había escrito aún.
            </p>
            <p>
              Una liana que pierde letras, un pájaro que levanta el vuelo, una
              cruz donde dos versos se cruzan en una sola letra. La geometría
              no decora el poema: lo produce.
            </p>
            <p className="font-mono-lt text-[12px] uppercase text-ink/45 not-italic">
              Queneau · Bens · Roubaud · Bénabou · Calvino · Le Lionnais
            </p>
          </div>
        </div>
      </section>

      {/* ── Galería ─────────────────────────────────────── */}
      <section id="galeria" className="border-b hairline">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 pt-20 sm:pt-28 pb-6">
          <div className="reveal flex items-end justify-between gap-6 flex-wrap">
            <div>
              <span className="font-mono-lt text-[11px] uppercase text-ink/50">§ Galería</span>
              <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-[1.05]">
                Diez <span className="pink-underline">formas</span> del poema
              </h2>
            </div>
            <p className="font-body text-base text-ink/60 max-w-[34ch]">
              Pase el cursor sobre cada poema. La restricción geométrica es
              la obra; el texto, su sombra.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 pb-8 grid gap-0 sm:grid-cols-2 lg:grid-cols-3 border hairline border-b-0 border-l-0 border-r-0">
          {poems.map((p, i) => (
            <PoemCard key={p.id} poem={p} i={i} />
          ))}
        </div>
      </section>

      {/* ── Talleres ────────────────────────────────────── */}
      <section id="talleres" className="border-b hairline">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 sm:py-28">
          <div className="reveal">
            <span className="font-mono-lt text-[11px] uppercase text-ink/50">§ Talleres</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-[1.05]">
              Próximas <span className="pink-underline">sesiones</span>
            </h2>
          </div>

          <div className="mt-10 divide-y divide-ink/10 border-y hairline">
            {[
              { d: '14 nov', t: 'El lipograma: escribir sin la letra e', a: 'a cargo de M. Bénabou', l: 'Café Voltaire, París' },
              { d: '28 nov', t: 'Morfogramas: el poema como figura', a: 'a cargo de R. Queneau', l: 'Bibliothèque Sainte-Geneviève' },
              { d: '12 dic', t: 'S+7: la palabra desplazada', a: 'a cargo de J. Roubaud', l: 'Café Voltaire, París' },
            ].map((s) => (
              <div key={s.d} className="reveal lift grid grid-cols-[auto_1fr_auto] gap-5 sm:gap-8 py-6 items-baseline">
                <span className="font-mono-lt text-[11px] uppercase text-ink/55 w-16">{s.d}</span>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl">{s.t}</h3>
                  <p className="font-body text-base text-ink/60 italic mt-1">{s.a}</p>
                </div>
                <span className="font-mono-lt text-[10px] uppercase text-ink/45 text-right hidden sm:block">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacto / Footer ──────────────────────────── */}
      <footer id="contacto" className="bg-ink text-[#f7f5f1]">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-20 sm:py-24">
          <div className="reveal grid gap-12 sm:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="font-mono-lt text-[11px] uppercase text-[#f7f5f1]/50">§ Contacto</span>
              <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-[1.05]">
                Únase al <span className="pink-underline">taller</span>.
              </h2>
              <p className="font-body text-lg text-[#f7f5f1]/70 mt-6 max-w-[44ch]">
                Reuniones mensuales en París y correspondencia por correo.
                Envíenos una restricción y la responderemos con un poema.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <p className="font-mono-lt text-[10px] uppercase text-[#f7f5f1]/45">Correo</p>
                <p className="font-display text-2xl mt-1">taller@oulipo.po</p>
              </div>
              <div>
                <p className="font-mono-lt text-[10px] uppercase text-[#f7f5f1]/45">Sede</p>
                <p className="font-body text-lg mt-1">Café Voltaire — Place Beaubourg, París</p>
              </div>
              <div>
                <p className="font-mono-lt text-[10px] uppercase text-[#f7f5f1]/45">Desde</p>
                <p className="font-body text-lg mt-1">1960, sin interrupción</p>
              </div>
            </div>
          </div>

          <div className="reveal mt-16 pt-6 border-t border-[#f7f5f1]/15 flex flex-wrap items-center justify-between gap-4 font-mono-lt text-[10px] uppercase text-[#f7f5f1]/45">
            <span>Oulipo · Poesía potencial · {new Date().getFullYear()}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[#f4b6c2] rotate-45" />
              Hecho bajo restricción
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
