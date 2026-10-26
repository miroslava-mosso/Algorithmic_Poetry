
import type { PoemShape } from '@/poems';
import { Cruz } from '@/components/Cruz';
import { Diamante } from '@/components/Diamante';
import { Piramide } from '@/components/Piramide';
import { Cono } from '@/components/Cono';
import { Espiral } from '@/components/Espiral';


interface Props {
  shape: PoemShape;
  lines: string[];
  compact?: boolean;
}

/** Renders the geometric form of a poem, dispatching to the right shape component. */
export function PoemShapeView({
  shape,
  lines,
  compact = false,
}: Props) {
  switch (shape) {
    case 'cruz':
      return <Cruz lines={lines} />;
    case 'diamante':
      return <Diamante lines={lines} compact={compact} />;
    case 'cono':
      return <Cono lines={lines} compact={compact} />;
    case 'espiral':
      return <Espiral lines={lines} />;
    default:
      return null;
  }
}
