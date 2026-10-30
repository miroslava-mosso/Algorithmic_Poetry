import { useState } from 'react';
import { getPoems } from '@/poems';
import { getMathAreas } from '@/mathAreas';
import { useReveal } from '@/useReveal';
import { useLang } from '@/i18n';
import { PoemCard } from '@/components/PoemCard';
import { MathAreaCard } from '@/components/MathAreaCard';
import { HodgeAlgorithm } from '@/components/HodgeAlgorithm';
import { LanguageToggle } from '@/components/LanguageToggle';

function BuyMeACoffeeIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M18.5 5H4.75A1.75 1.75 0 0 0 3 6.75v8.5A4.75 4.75 0 0 0 7.75 20h5.5A4.75 4.75 0 0 0 18 15.25V14h.5a3.5 3.5 0 0 0 0-7h-.5V5Zm-.5 7v3.25A2.75 2.75 0 0 1 15.25 18h-7.5A2.75 2.75 0 0 1 5 15.25V7h13v5Zm1-3h.5a1.5 1.5 0 0 1 0 3H19V9Z" />
      <path d="M7 2.5a1 1 0 0 1 2 0v1a1 1 0 0 1-2 0v-1Zm4 0a1 1 0 0 1 2 0v1a1 1 0 0 1-2 0v-1Zm4 0a1 1 0 0 1 2 0v1a1 1 0 0 1-2 0v-1Z" />
    </svg>
  );
}

function BuyMeACoffeeButton({ text }: { text: string }) {
  return (
    <a
      href="https://buymeacoffee.com/poesiaalgoa"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center"
      aria-label={text}
    >
      <img
        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
        alt={text}
        className="h-[42px] w-auto"
      />
    </a>
  );
}

function App() {
  const ref = useReveal<HTMLDivElement>();
  const [activeTab, setActiveTab] = useState('poesia');
  const { lang, t } = useLang();

  const poems = getPoems(lang);
  const mathAreas = getMathAreas(lang);

  const tabs = [
    { id: 'poesia', label: t('Reglas del juego', 'Rules of the game') },
    { id: 'galeria', label: t('Galería', 'Gallery') },
    { id: 'areas', label: t('Áreas', 'Areas') },
    { id: 'algoritmo', label: t('Mi algoritmo', 'My algorithm') },
    { id: 'contacto', label: t('Contacto', 'Contact') },
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
  <div className="flex items-center gap-4 sm:gap-10">
    <button type="button" onClick={() => { setActiveTab('poesia'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="font-display text-lg tracking-wide flex items-center gap-2">
      <span className="inline-block w-2 h-2 bg-[#f4b6c2] rotate-45" />
      {t('Poesía potencial', 'Potential poetry')}
    </button>

    <BuyMeACoffeeButton
  text={t('Invítame un café', 'Buy me a coffee')}
/>
  </div>

  <div className="flex items-center gap-4">

            <LanguageToggle />
            <span className="font-mono-lt text-[10px] text-ink/40 hidden sm:inline">
              {t('Poesía Algorítmica 2026', 'Algorithmic Poetry 2026')}
            </span>
          </div>
        </div>
        <nav aria-label={t('Secciones', 'Sections')} role="tablist" className="mx-auto max-w-[1180px] px-5 sm:px-8 pt-4 pb-6 flex items-center gap-5 sm:gap-10 overflow-x-auto font-mono-lt text-sm sm:text-[13px] uppercase text-ink/70">
          {tabs.map((tab, index) => (
            <span key={tab.id} className="inline-flex items-center gap-5 sm:gap-10 shrink-0">
              {index > 0 && (
                <span aria-hidden="true" className="inline-block w-1.5 h-1.5 bg-[#f4b6c2] rotate-45 shrink-0" />
              )}
              <button
                id={`tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                onClick={() => {
                  setActiveTab(tab.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`shrink-0 transition hover:text-ink ${activeTab === tab.id ? 'text-ink pink-underline-thin' : ''}`}
              >
                {tab.label}
              </button>
            </span>
          ))}
        </nav>
      </header>

      <main>
      {activeTab === 'poesia' && <div id="panel-poesia" role="tabpanel" aria-labelledby="tab-poesia">
      {/* ── Hero ────────────────────────────────────────── */}
      <section id="top" className="relative">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 pt-20 sm:pt-5 pb-20 sm:pb-28">

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <h1 className="reveal font-display text-[13vw] sm:text-[8vw] leading-[0.95] tracking-tight max-w-[14ch]">
                {t('La poesía', 'Poetry')}<br />
                <span className="italic">{t('como', 'as')}</span>{' '}
                <span className="pink-underline">{t('geometría', 'geometry')}</span>
              </h1>

              <p className="reveal font-body text-xl sm:text-2xl leading-[1.5] mt-10 max-w-[52ch] text-ink/80">
                {t(
                  'Cuaderno personal de poesía visual inspirada en el Oulipo y la literatura potencial. Cada poema obedece a una restricción matemática diferente. Las palabras juegan con el espacio, se constriñen, obedecen formas geométricas, y cada una tiene un significado diferente.',
                  'A personal notebook of visual poetry inspired by Oulipo and potential literature. Each poem obeys a different mathematical constraint. Words play with space, constrict, obey geometric shapes, and each one has a different meaning.'
                )}
              </p>

              <div className="reveal mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono-lt text-[11px] uppercase text-ink/55">
                <span>{t('4 poemas visuales', '4 visual poems')}</span>
                <span className="text-ink/20">/</span>
                <span>{t('5 áreas matemáticas', '5 mathematical areas')}</span>
                <span className="text-ink/20">/</span>
                <span>{t('1 constricción diferente para cada poema', '1 different constraint for each poem')}</span>
                <span className="text-ink/20">/</span>
                <span>{t('1 algoritmo nuevo', '1 new algorithm')}</span>
                <span className="text-ink/20">/</span>
                <a href="#galeria" onClick={(e) => { e.preventDefault(); navigateTo('galeria', 'galeria'); }} className="pink-underline-thin text-ink hover:text-ink transition">
                  {t('Ver galería', 'View gallery')}
                </a>
              </div>
            </div>

            <div className="reveal flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] aspect-[4/5] overflow-hidden border hairline p-2 bg-[#ebe7df]">

<img
  src={`${import.meta.env.BASE_URL}Po-poema_2.001.jpeg`}
  alt={t('Poema visual sobre una escultura en un patio', 'Visual poem about a sculpture in a courtyard')}
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
            <span className="font-mono-lt text-[11px] uppercase text-ink/50">§ {t('Reglas del juego', 'Rules of the game')} </span>
            <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-[1.05]">
              {t('Instrucciones para ponerle límites a un ', 'Instructions for setting limits on a ')}<span className="pink-underline italic">{t('poema', 'poem')}</span>.
            </h2>
          </div>
          <div className="reveal font-body text-lg sm:text-xl leading-[1.6] text-ink/80 space-y-5">
            <p>
              {t(
                'El Oulipo —Ouvroir de littérature potentielle, traducido el español como taller de literatura potencial,— es un grupo de literatura experimental que nació en París en 1960. Dentro de ella se encuentra la poesía potencial, que es una práctica de creación poética no-convencional, cuya forma de hacer poesía es todo menos esperar a que llegue la inspiración divina. Quien escribe lo hace experimentando con reglas llamadas restricciones, que sirven como obstáculos que se le imponen al lenguaje para descubrir cómo responde la poesía ante ellos, con la finalidad de —algún día— encontrar todos los poemas posibles.',
                'Oulipo —Ouvroir de littérature potentielle, translated as workshop of potential literature— is an experimental literature group born in Paris in 1960. Within it lies potential poetry, a practice of unconventional poetic creation whose way of making poetry is anything but waiting for divine inspiration. The writer experiments with rules called constraints, which serve as obstacles imposed on language to discover how poetry responds to them, with the goal of —someday— finding all possible poems.'
              )}
            </p>

            <p>
              {t(
                'Sucede que a través de juegos y reglas se unen las matemáticas y la literatura para buscar nuevas posibilidades y estructuras para generar poemas. Este cuaderno digital recoge mi propia lectura/escritura de esa tradición.',
                'It happens that through games and rules, mathematics and literature come together to seek new possibilities and structures for generating poems. This digital notebook gathers my own reading/writing of that tradition.'
              )}
            </p>

            <p className="font-body text-lg sm:text-xl leading-[1.55] text-ink/75 not-italic">
              {t('Agradezco infinitamente a', 'I am infinitely grateful to')}{' '}
              <a className="burnt-marker" href="https://www.instagram.com/batsssht/" target="_blank" rel="noreferrer">
                <strong>Regina Roze</strong>
              </a>{' '}
              {t(
                'por introducirme al mundo de la poesía potencial a través de los laboratorios online de poesía potencial en México,',
                'for introducing me to the world of potential poetry through the online potential poetry laboratories in Mexico,'
              )}{' '}
              <a className="burnt-marker" href="https://www.instagram.com/popoesia/" target="_blank" rel="noreferrer">
                <strong>popoesía</strong>
              </a>{t(
                ', en donde aprendí a hacer muchos de los poemas que aquí muestro. Y si tienen curiosidad por aprender muchas otras constricciones y juegos, les recomiendo mucho unirse a sus laboratorios.',
                ', where I learned to make many of the poems I show here. And if you are curious to learn many other constraints and games, I highly recommend joining her laboratories.'
              )}
            </p>
          </div>
        </div>
      </section>

      </div>}

      {/* ── Galería ─────────────────────────────────────── */}
      {activeTab === 'galeria' && <div id="panel-galeria" role="tabpanel">
      <section id="galeria" className="border-b hairline">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 pt-10 sm:pt-16 pb-10">
          <div className="reveal grid gap-10 sm:grid-cols-[1.5fr_0.8fr]">
            <div>
              <span className="font-mono-lt text-[11px] uppercase text-ink/50">§ {t('Galería', 'Gallery')}</span>
              <h2 className="font-display text-4xl sm:text-5xl mt-4" style={{ lineHeight: '1.3' }}>
                {t('Cuatro', 'Four')} <span className="pink-underline">{t('formas', 'forms')}</span> {t('geométricas, cuatro', 'geometric, four')} <span className="pink-underline">{t('poemas', 'poems')}</span> {t('diferentes', 'different')}
              </h2>
            </div>
            <div>
              <p className="font-body text-lg sm:text-xl leading-[1.6] text-ink/60">
                {t(
                  'Pasa el cursor y haz clic sobre cada poema para verlo en grande. La restricción geométrica define la forma y el texto su contenido.',
                  'Hover and click on each poem to see it enlarged. The geometric constraint defines the form and the text its content.'
                )}
              </p>
              <div className="mt-5 pt-3 border-t hairline">
                <p className="font-mono-lt text-[11px] uppercase text-ink/50 leading-[1.7]">
                  {t('Textos originales de:', 'Original texts by:')} <span className="text-ink">Miroslava Mosso Rojas</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 pt-8 pb-3 grid gap-0 grid-cols-2 lg:grid-cols-4 border hairline border-b-0 border-l-0 border-r-0">
          <h3 className="font-display text-2xl sm:text-3xl">
            <span className="border-l-2 border-[#f4b6c2] pl-5 py-1">{t('Versión digitalizada', 'Digitized version')}</span>
          </h3>
        </div>
    <div className="mx-auto max-w-[1180px] px-5 sm:px-8 pb-10 grid gap-0 grid-cols-2 lg:grid-cols-4">
          {poems.map((p, i) => (
            <PoemCard key={p.id} poem={p} i={i} />
          ))}
        </div>
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 pb-3">
          <h3 className="font-display text-2xl sm:text-3xl">
            <span className="border-l-2 border-[#f4b6c2] pl-5 py-1">{t('Versión artesanal', 'Handcrafted version')}</span>
          </h3>
        </div>
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 pb-10 grid gap-0 grid-cols-2 lg:grid-cols-4">
          {poems.map((p, i) => (
            <PoemCard
              key={`${p.id}-original`}
              poem={{ ...p, id: `${p.id}-original`, index: `O${i + 1}` }}
              i={i}
              placeholder
            />
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
              <span className="font-mono-lt text-[11px] uppercase text-ink/50">§ {t('Áreas', 'Areas')}</span>
              <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-[1.05]">
                {t('Cinco', 'Five')} <span className="pink-underline">{t('territorios', 'territories')}</span> {t('matemáticos', 'mathematical')}
              </h2>
            </div>
            <p className="font-body text-lg sm:text-xl text-ink/60 max-w-[36ch]">
              {t(
                'Cada área matemática abre una manera distinta de jugar con el lenguaje. Hay tres ejemplos por cada territorio matemático.',
                'Each mathematical area opens a different way to play with language. There are three examples for each mathematical territory.'
              )}
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
          alt={t('Mar tranquilo, horizonte azul y arena', 'Calm sea, blue horizon and sand')}
          className="w-full h-full object-cover object-center"
          style={{ filter: 'saturate(0.88) contrast(1.04)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f5f1]/0 via-[#f7f5f1]/0 to-[#0d0d0d]/80" />
        <p className="absolute bottom-7 left-1/2 -translate-x-1/2 font-mono-lt text-[11px] uppercase text-[#f7f5f1]/65 tracking-[0.22em] text-center whitespace-nowrap">
          {t('una restricción no es el límite de la creatividad, sino el lugar donde empiezan nuevas posibilidades', 'a constraint is not the limit of creativity, but the place where new possibilities begin')}
        </p>
      </div>

      {/* ── Contacto / Footer ──────────────────────────── */}
      <footer id="contacto" className="bg-ink text-[#f7f5f1] min-h-[50vh] flex items-center">
        <div className="mx-auto max-w-[1180px] w-full px-5 sm:px-8 py-20 sm:py-20">
          <div className="reveal grid gap-8 sm:gap-10 sm:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="font-mono-lt text-[11px] uppercase text-[#f7f5f1]/50">§ {t('Contacto', 'Contact')}</span>
              <h2 className="font-display text-4xl sm:text-5xl mt-2 leading-[1.05]">
                {t('Escribámonos.', "Let's write to each other.")}
              </h2>
              <p className="font-body text-lg text-[#f7f5f1]/70 mt-4 max-w-[44ch]">
                {t(
                  'Si escribes un poema usando el algoritmo',
                  'If you write a poem using the algorithm'
                )}{' '}
                <span className="pink-underline-thin">
                  <a href="#mi-algoritmo" onClick={(e) => { e.preventDefault(); navigateTo('algoritmo', 'mi-algoritmo'); }} className="hover:text-ink transition">
                    {t('El diamante de Hodge', 'The Hodge diamond')}
                  </a>
                </span>{' '}
                {t(
                  'y te gustaría compartirlo, ¡envíanoslo por correo electrónico para publicarlo en nuestra página!',
                  'and would like to share it, send it to us by email to publish it on our page!'
                )}
              </p>
              <p className="font-body text-lg text-[#f7f5f1]/70 mt-4 max-w-[44ch]">
                {t(
                  'Puedes mandarlo como un dibujo hecho a mano o de manera digital, fotografía, composición visual, collage o cualquier otra forma visual que explore las posibilidades del algoritmo.',
                  'You can send it as a hand-drawn or digital drawing, photograph, visual composition, collage, or any other visual form that explores the possibilities of the algorithm.'
                )}
              </p>
              <p className="font-body text-lg text-[#f7f5f1]/70 mt-4 max-w-[44ch]">
  {t(
    'Publicaré todos los poemas que me manden en la sección llamada',
    'All submitted poems will be published in the section called'
  )}{' '}
  <span className="pink-underline-thin">
    <a
      href="#panel-moduli-space"
      onClick={(e) => {
        e.preventDefault();
        navigateTo('moduli-space', 'panel-moduli-space');
      }}
      className="hover:text-ink transition"
    >
      Moduli Space
    </a>
  </span>
  {t(
    '. Intentaré actualizar la página una vez al mes. No hay fecha límite para mandar tu poema.',
    '. I will try to update the page once a month. There is no deadline for submitting your poem.'
  )}
</p>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <p className="font-mono-lt text-[10px] uppercase text-[#f7f5f1]/45">{t('Correo', 'Email')}</p>
                <p className="font-display text-2xl mt-1">poesia.algoritmica@proton.me</p>
              </div>
              <div>
                <p className="font-mono-lt text-[10px] uppercase text-[#f7f5f1]/45">{t('Manda tu poema', 'Send your poem')}</p>
                <p className="font-body text-lg mt-1">
                  {t('Incluye lo siguiente:', 'Include the following:')}
                </p>


<ul className="font-body text-base sm:text-lg mt-2 list-disc pl-6 leading-snug space-y-0.5">
  <li>
    {t(
      'El diamante de Hodge con los números originales y otro con las palabras sustituidas.',
      'The Hodge diamond with the original numbers and another with the words substituted.'
    )}
  </li>
  <li>{t('La geometría a la que corresponde.', 'The geometry it corresponds to.')}</li>
  <li>{t('(Opcional) Números de Betti.', '(Optional) Betti numbers.')}</li>
  <li>{t('Título de tu poema.', 'Title of your poem.')}</li>
  <li>{t('Nombre o pseudónimo de su autor(a).', "Author's name or pseudonym.")}</li>
  <li>{t('Fecha de creación.', 'Date of creation.')}</li>
</ul>
              </div>

              {/* ── Apoya el proyecto / Buy Me a Coffee ── */}
              <div className="mt-6 pt-5 border-t border-[#f7f5f1]/15">
                <p className="font-mono-lt text-[10px] uppercase text-[#f7f5f1]/45">
                  {t('Apoya el proyecto', 'Support the project')}
                </p>

                <p className="font-body text-base sm:text-lg text-[#f7f5f1]/70 mt-2 max-w-[42ch]">
                  {t(
                    'Si disfrutas este espacio de experimentación entre poesía y matemáticas, puedes invitarme a un café para ayudar a que este proyecto siga creciendo.',
                    'If you enjoy this space for experimentation between poetry and mathematics, you can buy me a coffee to help this project keep growing.'
                  )}
                </p>

                <BuyMeACoffeeButton
  text={t('Invítame un café', 'Buy me a coffee')}
/>

                <p className="font-mono-lt text-[9px] uppercase tracking-wide text-[#f7f5f1]/35 mt-2">
                  {t('Aportación voluntaria', 'Voluntary support')}
                </p>
              </div>
            </div>
          </div>

          <div className="reveal mt-8 pt-5 border-t border-[#f7f5f1]/15 flex flex-wrap items-center justify-between gap-4 font-mono-lt text-[10px] uppercase text-[#f7f5f1]/45">
            <span>{t('Cuaderno digital de poesía potencial', 'Digital notebook of potential poetry')} · {new Date().getFullYear()}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[#f4b6c2] rotate-45" />
              {t('Constricción 2-dimensional', '2-dimensional constraint')}
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
              <h2 className="font-display text-4xl sm:text-5xl mt-4" style={{ lineHeight: '1.2em' }}>
                {t('El', 'The')} <span className="pink-underline italic">moduli space</span> {t('de poemas del diamante de Hodge', 'of poems from the Hodge diamond')}
              </h2>
            </div>
            <p className="font-body text-lg sm:text-xl leading-[1.6] text-ink/80">
              {t(
                'En esta sección intentamos construir un espacio de parámetros, también conocido como el moduli space, de todos los poemas que ustedes nos quieran mandar, siguiendo la constricción del diamante de Hodge en',
                'In this section we attempt to construct a parameter space, also known as the moduli space, of all the poems you wish to send us, following the Hodge diamond constraint in'
              )}{' '}
              <a href="#mi-algoritmo" onClick={(e) => { e.preventDefault(); navigateTo('algoritmo', 'mi-algoritmo'); }} className="pink-underline-thin">{t('Mi algoritmo', 'My algorithm')}</a>.{' '}
              {t('Las instrucciones para mandar tu poema se encuentran en', 'Instructions for sending your poem can be found in')}{' '}
              <a href="#contacto" onClick={(e) => { e.preventDefault(); navigateTo('contacto', 'contacto'); }} className="pink-underline-thin">{t('Contacto', 'Contact')}</a>.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 pb-16 grid gap-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border hairline border-b-0 border-l-0 border-r-0">
          {Array.from({ length: 3 }, (_, i) => (
            <PoemCard key={`moduli-${i}`} poem={{ id: `moduli-${i}`, index: `0${i + 1}`, title: t('Aqui va a ir tu poema', 'Your poem goes here'), author: '', year: '', shape: 'cruz', technique: t('Aqui irá tu nombre o pseudónimo', 'Your name or pseudonym goes here'), manifest: t('PRÓXIMAMENTE', 'COMING SOON'), lines: [] }} i={i} placeholder />
          ))}
        </div>
      </section>}
      </main>
    </div>
  );
}

export default App;
