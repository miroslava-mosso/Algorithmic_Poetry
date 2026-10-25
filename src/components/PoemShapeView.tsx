
import type { PoemShape } from '@/poems';
import { Pajarito } from '@/components/Pajarito';
import { Cruz } from '@/components/Cruz';
import { Diamante } from '@/components/Diamante';
import { Piramide } from '@/components/Piramide';
import { Cono } from '@/components/Cono';
import { Ola } from '@/components/Ola';
import { Gemelos } from '@/components/Gemelos';
import { Espiral } from '@/components/Espiral';
import { Centrifugo } from '@/components/Centrifugo';
import { Liana } from '@/components/Liana';

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
    case 'liana':
      return <Liana lines={lines} />;
    case 'pajarito':
      return <Pajarito lines={lines} />;
    case 'cruz':
      return <Cruz lines={lines} />;
    case 'diamante':
      return <Diamante lines={lines} compact={compact} />;
    case 'piramide':
      return <Piramide lines={lines} />;
    case 'cono':
      return <Cono lines={lines} />;
    case 'ola':
      return <Ola lines={lines} />;
    case 'gemelos':
      return <Gemelos lines={lines} />;
    case 'espiral':
      return <Espiral lines={lines} />;
    case 'centrifugo':
      return <Centrifugo lines={lines} />;
    default:
      return null;
  }
}
