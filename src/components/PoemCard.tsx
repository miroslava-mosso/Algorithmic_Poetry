import type { Poem } from '@/poems';
import { PoemShapeView } from './PoemShapeView';

export function PoemCard({ poem, i }: { poem: Poem; i: number }) {
  return (
    <article
      id={poem.id}
      className="poem-cell lift reveal min-w-0 overflow-hidden grid grid-rows-[auto_1fr_auto] border hairline border-t-0 border-r-0 border-l-0 px-5 py-8 sm:px-7 sm:py-10"
      style={{ transitionDelay: `${(i % 3) * 80}ms` }}
    >
      <header className="flex items-baseline justify-between gap-4 mb-6">
        <div className="flex items-baseline gap-3">
          <span className="font-mono-lt text-[11px] text-ink/50">{poem.index}</span>
          <h3 className="font-display text-2xl sm:text-3xl">
            <span className="pink-underline">{poem.title}</span>
          </h3>
        </div>
        <span className="font-mono-lt text-[10px] text-ink/40 hidden sm:inline">
          {poem.year}
        </span>
      </header>

      <div className="flex items-center justify-center py-6 min-h-[200px]">
        <PoemShapeView shape={poem.shape} lines={poem.lines} />
      </div>

      <footer className="flex flex-col gap-2 mt-4">
        <div className="flex items-center justify-between font-mono-lt text-[10px] uppercase text-ink/55">
          <span>{poem.technique}</span>
          <span className="text-ink/40">{poem.author}</span>
        </div>
        <p className="font-body text-[15px] leading-[1.55] text-ink/70 italic">
          {poem.manifest}
        </p>
      </footer>
    </article>
  );
}
