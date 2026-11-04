import { useState } from 'react';
import { useLang } from '@/i18n';
import { Lightbox } from './Lightbox';
import type { HandcraftedGalleryCard } from '@/handcraftedGallery';

function renderDescription(text: string) {
  return text.split(/(\[[^\]]+\]\(https?:\/\/[^)\s]+\))/g).map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/);

    if (!match) return part;

    return (
      <a
        key={index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-[#f4b6c2] underline-offset-4 hover:text-ink"
        onClick={(event) => event.stopPropagation()}
      >
        {match[1]}
      </a>
    );
  });
}

export function HandcraftedCard({ card, i }: { card: HandcraftedGalleryCard; i: number }) {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const hasImages = card.images.length > 0;
  const changeImage = (step: number) => {
    setImageIndex((current) => (current + step + card.images.length) % card.images.length);
  };
  const showLightbox = () => {
    setImageIndex(0); 
    setOpen(true);
  };

  return (
    <>
      <article
        id={card.id}
        className="poem-cell lift reveal min-w-0 overflow-hidden grid grid-rows-[auto_auto_auto] border hairline border-t-0 border-r-0 border-l-0 px-5 py-8 sm:px-7 sm:py-10 cursor-pointer"
        style={{ transitionDelay: `${(i % 3) * 80}ms` }}
        onClick={showLightbox}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            showLightbox();
          }
        }}
        aria-label={`${card.title}: ${lang === 'en' ? 'open gallery' : 'abrir galería'}`}
      >
        <header className="flex items-baseline justify-between gap-4 mb-6">
          <div className="flex items-baseline gap-3">
            <span className="font-mono-lt text-[11px] text-ink/50">{card.index}</span>
            <h3 className="font-display text-2xl sm:text-3xl"><span className="aqua-underline">{card.title}</span></h3>
          </div>
        </header>

        <div className="flex items-center justify-center py-0 min-h-0 overflow-hidden">
          {hasImages ? (
            <img
              src={card.images[0]}
              alt={`${card.title} · ${lang === 'en' ? 'handcrafted version' : 'versión artesanal'}`}
              className="w-full aspect-[4/3] object-cover border hairline"
            />
          ) : (
            <div className="w-full aspect-[4/3] flex items-center justify-center border hairline bg-[#ebe7df]/60">
              <span className="font-display text-xl sm:text-2xl italic text-ink/45 text-center px-4">
                {lang === 'en' ? 'Add image paths in src/handcraftedGallery.ts' : 'Añade las rutas de las imágenes en src/handcraftedGallery.ts'}
              </span>
            </div>
          )}
        </div>

        <footer className="flex flex-col gap-2 mt-4">
          <div className="flex items-center justify-between font-mono-lt text-[10.6px] uppercase text-ink/55">
            <span>{card.technique}</span>
            {card.images.length > 1 && <span>{card.images.length} {lang === 'en' ? 'images' : 'imágenes'}</span>}
          </div>
          {card.descriptions.filter((description) => description.trim()).map((description, index) => (
            <p key={`${card.id}-description-${index}`} className="font-body text-[18px] leading-[1.55] text-ink/70 italic">
              {renderDescription(description)}
            </p>
          ))}
        </footer>
      </article>

      <Lightbox
        open={open}
        onClose={() => setOpen(false)}
        language={lang}
        title={card.title}
        subtitle={card.technique}
        caption={card.descriptions.filter((description) => description.trim()).join(' ')}
        onPrevious={hasImages ? () => changeImage(-1) : undefined}
        onNext={hasImages ? () => changeImage(1) : undefined}
      >
        {hasImages ? (
          <div className="flex min-h-[45vh] w-full items-center justify-center px-12 sm:px-20">
            <img
              src={card.images[imageIndex]}
              alt={`${card.title} · ${imageIndex + 1} / ${card.images.length}`}
              className="max-h-[68vh] max-w-full object-contain"
            />
          </div>
        ) : (
          <div className="w-full min-h-[45vh] flex items-center justify-center bg-[#ebe7df]/60 border hairline">
            <span className="font-display text-2xl sm:text-4xl italic text-ink/45 text-center px-6">
              {lang === 'en' ? 'Add image paths in src/handcraftedGallery.ts' : 'Añade las rutas de las imágenes en src/handcraftedGallery.ts'}
            </span>
          </div>
        )}
      </Lightbox>
    </>
  );
}
