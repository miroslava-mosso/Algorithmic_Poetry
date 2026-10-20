import type { MathArea } from '@/mathAreas';

export function MathAreaCard({ area, i }: { area: MathArea; i: number }) {
  return (
    <section
      id={area.id}
      className="reveal border-b hairline"
      style={{ transitionDelay: `${(i % 2) * 60}ms` }}
    >
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-16 sm:py-24 grid gap-10 sm:grid-cols-[0.8fr_1.2fr]">
        {/* Encabezado del área */}
        <div className="sm:sticky sm:top-20 self-start">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-5xl sm:text-6xl text-[#f4b6c2] leading-none">
              {area.index}
            </span>
            <div>
              <span className="font-mono-lt text-[10px] uppercase text-ink/45">
                Área
              </span>
              <h3 className="font-display text-3xl sm:text-4xl leading-[1.05] mt-1">
                <span className="pink-underline">{area.title}</span>
              </h3>
            </div>
          </div>
          <p className="font-body text-lg text-ink/70 italic mt-6 max-w-[38ch] leading-[1.55]">
            {area.description}
          </p>
        </div>

        {/* Ejemplos */}
        <div className="divide-y divide-ink/10">
          {area.examples.map((ex) => (
            <article key={ex.index} className="poem-cell lift py-7 first:pt-0 last:pb-0">
              <div className="flex items-baseline justify-between gap-4 mb-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono-lt text-[10px] text-ink/40">{ex.index}</span>
                  <h4 className="font-display text-xl sm:text-2xl">{ex.title}</h4>
                </div>
                <span className="font-mono-lt text-[9px] uppercase text-ink/45 text-right max-w-[22ch] leading-snug">
                  {ex.technique}
                </span>
              </div>
              <div className="flex flex-col items-start gap-1.5 font-mono-lt text-[13px] sm:text-sm text-ink/85 mt-3 pl-2 border-l-2 border-[#f4b6c2]/40">
                {ex.lines.map((l, k) => (
                  <span key={k} className="whitespace-pre">{l}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
