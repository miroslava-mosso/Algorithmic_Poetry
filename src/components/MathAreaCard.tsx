import { useState } from 'react';
import type { MathArea, MathExample } from '@/mathAreas';
import { MathExampleShape } from '@/components/MathExampleShape';
import { Lightbox } from '@/components/Lightbox';

export function MathAreaCard({ area, i }: { area: MathArea; i: number }) {
  return (
    <details
      id={area.id}
      className="area-accordion reveal border-b hairline"
      style={{ transitionDelay: `${(i % 2) * 60}ms` }}
    >
      <summary className="cursor-pointer list-none select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f4b6c2] focus-visible:outline-offset-8">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 py-10 sm:py-14 flex items-center justify-between gap-6">
          <div className="flex items-baseline gap-5 min-w-0">
            <span className="font-display text-5xl sm:text-7xl text-[#f4b6c2] leading-none shrink-0">
              {area.index}
            </span>
            <div className="min-w-0">
              <span className="font-mono-lt text-[10px] uppercase text-ink/45">Área</span>
              <h3 className="font-display text-4xl sm:text-5xl leading-[1.05] mt-1">
                <span>{area.title}</span>
              </h3>
              <p className="font-body text-lg sm:text-xl text-ink/65 italic mt-2 max-w-[58ch] leading-[1.5]">
                {area.description}
              </p>
            </div>
          </div>
          <span className="area-chevron shrink-0 flex items-center justify-center w-9 h-9 border hairline font-mono-lt text-lg text-ink/65" aria-hidden="true">
            ↓
          </span>
        </div>
      </summary>

      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 pb-14 sm:pb-20 grid gap-6 sm:grid-cols-3">
        {area.examples.map((ex) => (
          <MathExample key={ex.index} ex={ex} />
        ))}
      </div>
    </details>
  );
}

function MathExample({ ex }: { ex: MathExample }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article
        className="poem-cell lift min-w-0 overflow-hidden border hairline p-5 sm:p-6 flex flex-col gap-4 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <header className="flex items-baseline justify-between gap-3">
          <div className="flex items-baseline gap-2.5">
            <span className="font-mono-lt text-[10px] text-ink/40">{ex.index}</span>
            <h4 className="font-display text-2xl sm:text-3xl leading-tight">{ex.title}</h4>
          </div>
        </header>

        <div className="flex items-center justify-center py-4 min-h-[140px] overflow-hidden">
          <div className="scale-[1.05] origin-center">
            <MathExampleShape shape={ex.shape} />
          </div>
        </div>

        <footer className="mt-auto pt-3 border-t hairline">
          <p className="font-mono-lt text-[11px] sm:text-xs uppercase text-ink/50 leading-snug">
            {ex.technique}
          </p>
        </footer>
      </article>

      <Lightbox
        open={open}
        onClose={() => setOpen(false)}
        title={ex.title}
        subtitle={ex.technique}
      >
        <MathExampleShape shape={ex.shape} />
      </Lightbox>
    </>
  );
}
