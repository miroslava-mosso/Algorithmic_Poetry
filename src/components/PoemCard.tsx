
import { useState } from 'react';
import { poems, type Poem } from '@/poems';
import { useLang } from '@/i18n';
import { PoemShapeView } from './PoemShapeView';
import { Lightbox } from './Lightbox';

export function PoemCard({ poem, i, placeholder = false, language: languageProp }: { poem: Poem; i: number; placeholder?: boolean; language?: 'es' | 'en' }) {
  const { lang } = useLang();
  const language = languageProp ?? lang;
  const comingSoon = language === 'en' ? 'COMING SOON' : 'PRÓXIMAMENTE';
  // Keep the artwork's original line layout in both languages. Translated
  // lines can change the geometry and break the shape of the visual poems.
  const artwork = poems.find((original) => original.id === poem.id) ?? poem;
  const [open, setOpen] = useState(false);

  return (
    <>
      <article
        id={poem.id}
        className="poem-cell lift reveal min-w-0 overflow-hidden grid grid-rows-[auto_auto_auto] border hairline border-t-0 border-r-0 border-l-0 px-5 py-8 sm:px-7 sm:py-10 cursor-pointer"
        style={{ transitionDelay: `${(i % 3) * 80}ms` }}
        onClick={() => setOpen(true)}
      >
        <header className="flex items-baseline justify-between gap-4 mb-6">
          <div className="flex items-baseline gap-3">
            <span className="font-mono-lt text-[11px] text-ink/50">
              {poem.index}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl">
              <span className="aqua-underline">{poem.title}</span>
            </h3>
          </div>

          {!placeholder && (
            <span className="font-mono-lt text-[10px] text-ink/40 hidden sm:inline">
              {poem.year}
            </span>
          )}
        </header>

        <div className="flex items-center justify-center py-0 min-h-0 overflow-hidden">
          {placeholder ? (
            <div className="w-full aspect-[4/3] flex items-center justify-center border hairline bg-[#ebe7df]/60">
              <span className="font-display text-2xl sm:text-3xl italic text-ink/45">{comingSoon}</span>
            </div>
          ) : (
          <div
  
className={
  poem.shape === 'zurvan'
    ? 'w-full'
    : 'scale-[0.7] origin-center -my-6'
}
            

>
  <PoemShapeView
  shape={artwork.shape}
  lines={artwork.lines}
  compact={artwork.shape === 'zurvan' || artwork.shape === 'cono'}
/>
</div>
          )}
        </div>

        <footer className="flex flex-col gap-2 mt-4">
          <div className="flex items-center justify-between font-mono-lt text-[10px] uppercase text-ink/55">
            <span>{poem.technique}</span>
            {!placeholder && <span className="text-ink/40">{poem.author}</span>}
          </div>

          <p className="font-body text-[15px] leading-[1.55] text-ink/70 italic">
            {poem.manifest}
          </p>
        </footer>
      </article>

      <Lightbox
        open={open}
        onClose={() => setOpen(false)}
        language={language}
        title={poem.title}
        subtitle={placeholder ? poem.technique : `${poem.technique} · ${poem.author} · ${poem.year}`}
        caption={poem.manifest}
      >
        {placeholder ? (
          <div className="w-full min-h-[45vh] flex items-center justify-center bg-[#ebe7df]/60 border hairline">
            <span className="font-display text-4xl sm:text-6xl italic text-ink/45">{comingSoon}</span>
          </div>
        ) : (
          <div className={poem.id === 'cruz'
            ? 'grid w-full min-w-0 items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(14rem,0.72fr)]'
            : 'flex w-full min-w-0 flex-col items-center gap-8'}>
            <div className="flex w-full min-w-0 items-center justify-center">
              <PoemShapeView shape={artwork.shape} lines={artwork.lines} />
            </div>
            {language === 'en' && poem.translation && poem.translation.length > 0 && (
              <div className={`w-full ${poem.id === 'cruz' ? 'text-left' : 'max-w-[65ch] text-center'}`}>
                <p className="mb-4 font-mono-lt text-[10px] uppercase tracking-wide text-ink/45">English translation</p>
                <div className={`space-y-2 font-body text-lg sm:text-xl leading-[1.55] ${poem.id === 'cruz' ? '' : 'flex flex-col items-center'}`}>
                  {poem.translation.map((line, index) => (
                    <p
  key={index}
  className={line.pinkUnderline ? 'pink-underline-thin w-fit' : undefined}
  style={{
    color: line.color ?? '#0d0d0d',
    opacity: line.opacity ?? 1,
  }}
>
  {line.text}
</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Lightbox>
    </>
  );
}
