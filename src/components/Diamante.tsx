
/** Zurvan — superposición tipográfica del espacio y el tiempo. */

type DiamanteProps = {
  lines: string[];
  compact?: boolean;
};

export function Diamante({
  lines: _lines,
  compact = false,
}: DiamanteProps) {
  const space = '#171717';
  const time = '#8f2638';

  const vertical = (
    text: string,
    color: string,
    position: string,
    direction: 'up' | 'down' = 'down',
    small = false,
  ) => (
    <span
      className={`absolute whitespace-nowrap font-mono-lt ${
        small ? 'text-[8px]' : 'text-[10px] sm:text-xs'
      } ${position}`}
      style={{
        color,
        writingMode: 'vertical-rl',
        transform: `translate(-50%, -50%) ${
          direction === 'up' ? 'rotate(180deg)' : ''
        }`,
      }}
    >
      {text}
    </span>
  );

  const horizontal = (
    text: string,
    color: string,
    position: string,
    small = false,
  ) => (
    <span
      className={`absolute whitespace-nowrap font-mono-lt ${
        small ? 'text-[8px]' : 'text-[10px] sm:text-xs'
      } ${position}`}
      style={{
        color,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {text}
    </span>
  );

  return (
    <div className={compact ? 'w-full' : 'w-full overflow-x-auto'}>
      <div
        className={`relative mx-auto aspect-[6/5] w-full font-mono-lt ${
          compact
            ? 'max-w-[360px] min-w-0 overflow-hidden'
            : 'min-w-[340px] max-w-[620px]'
        }`}
      >
        {/* ESPACIO — negro */}
        {vertical('superficie', space, 'left-[8%] top-[24%]', 'down', compact)}

        {horizontal(
          'suavemente',
          space,
          compact ? 'left-[25%] top-[39%]' : 'left-[25%] top-[37%]',
          compact,
        )}

        {horizontal(
          'infinita',
          space,
          compact ? 'left-[50%] top-[39%]' : 'left-[47%] top-[37%]',
          compact,
        )}

        {horizontal(
          'está',
          space,
          compact ? 'left-[76%] top-[39%]' : 'left-[72%] top-[37%]',
          compact,
        )}

        {vertical(
          'cerrada',
          space,
          compact ? 'left-[94%] top-[24%]' : 'left-[89%] top-[24%]',
          'up',
          compact,
        )}

        {vertical(
          'sí misma',
          space,
          compact ? 'left-[50%] top-[61%]' : 'left-[47%] top-[57%]',
          'down',
          compact,
        )}

        {/* TIEMPO — rojo oscuro */}
        {horizontal(
          'los amaneceres seguirán',
          time,
          compact ? 'left-[50%] top-[25%]' : 'left-[43%] top-[27%]',
          compact,
        )}

        {vertical(
          'existir en el tiempo',
          time,
          compact ? 'left-[19%] top-[64%]' : 'left-[24%] top-[61%]',
          'up',
          compact,
        )}

        {vertical(
          'repitiéndose y los cerezos',
          time,
          compact ? 'left-[81%] top-[59%]' : 'left-[66%] top-[53%]',
          'down',
          compact,
        )}

        {horizontal(
          'aunque deje de',
          time,
          compact ? 'left-[25%] top-[85%]' : 'left-[14%] top-[83%]',
          compact,
        )}

        {horizontal(
          'seguirán floreciendo',
          time,
          compact ? 'left-[76%] top-[85%]' : 'left-[82%] top-[83%]',
          compact,
        )}
      </div>
    </div>
  );
}
