import type { MathShapeId } from '@/mathAreas';

export interface TranslatedVerse {
  text: string;
  color?: string;
  opacity?: number;
  segments?: { text: string; color: string }[];
}

export interface TranslatedPoemSection {
  title?: string;
  lines: TranslatedVerse[];
}

const ink = '#0d0d0d';
const blue = '#1677C8';
const mutedInk = 'rgba(13,13,13,0.45)';

export const mathPoemTranslations: Partial<Record<MathShapeId, TranslatedPoemSection[]>> = {
  reflexion: [
    {
      title: 'Original poem',
      lines: [
        { text: 'Remnants, debris after the gale', color: ink },
        { text: 'The passage of time', color: ink },
        { text: 'eroded the earth,', color: ink },
        { text: 'mutilated the memory of the', color: ink },
        { text: 'precise image.', color: ink },
      ],
    },
    {
      title: 'Reflected poem',
      lines: [
        { text: 'Precise image,', color: ink },
        { text: '—the one of the memory—', color: ink },
        { text: 'it was mutilated; the earth eroded it,', color: ink },
        { text: 'the passage of time,', color: ink },
        { text: 'the gale,', color: ink },
        { text: '—the one that came after—', color: ink },
        { text: 'debris, remnants.', color: ink },
      ],
    },
  ],
  'circulo-vicioso': [
    {
      lines: [
        { text: 'A homogeneous, porous process through which things escape; what we once knew is now no more than fragmented memories.', color: ink },
      ],
    },
  ],
  'koch-snowflake': [
    {
      title: 'First iteration',
      lines: [{ text: 'a cat watches us', color: ink }],
    },
    {
      title: 'Second iteration',
      lines: [
        { text: '', segments: [{ text: 'A', color: ink }, { text: ' phone is ringing', color: blue }] },
        { text: '', segments: [{ text: 'Cat', color: ink }, { text: ' who got lost', color: blue }] },
        { text: '', segments: [{ text: 'It', color: ink }, { text: ' meowed from outside', color: blue }] },
        { text: '', segments: [{ text: 'watches', color: ink }, { text: ' our quiet secrets', color: blue }] },
      ],
    },
  ],
  'hopf-link': [
    {
      lines: [
        { text: 'While the house smelled of freshly baked cake', color: ink },
        { text: 'Something broke when the siblings were separated', color: ink },
      ],
    },
  ],
  'figure-eight-knot': [
    {
      lines: [
        { text: 'What do you see when you close your eyes? Nothingness, emptiness, darkness, the fear of losing myself and not being able to return. Sometimes I feel I have lived a thousand lives. I have already forgotten many of them.', color: ink },
      ],
    },
  ],
  'trefoil-knot': [
    {
      lines: [
        { text: 'What do you see when you close your eyes? I wake and cannot tell reality from dreams. A minute stretches out in time. Memories of a distant past life. Dawn comes each day as long as I keep existing.', color: ink },
      ],
    },
  ],
  'grafo-arbol': [
    {
      lines: [
        { text: 'root', color: ink },
        { text: 'voice  ·  light', color: ink },
        { text: 'river  ·  sun  ·  sea  ·  sky', color: mutedInk },
        { text: 'wave  ·  fish  ·  dawn  ·  chalk  ·  salt  ·  wave  ·  gray  ·  blue', color: '#f4b6c2' },
        { text: 'COMING SOON', color: mutedInk },
      ],
    },
  ],
  konigsberg: [
    {
      lines: [
        { text: 'island', color: ink },
        { text: 'bank  ·  bank', color: mutedInk },
        { text: 'north  ·  south', color: mutedInk },
        { text: 'COMING SOON', color: '#f4b6c2' },
      ],
    },
  ],
  bipartito: [
    {
      lines: [
        { text: 'earth  ·  fire  ·  wind', color: ink },
        { text: 'water  ·  ice  ·  fog', color: ink },
        { text: 'COMING SOON', color: mutedInk },
      ],
    },
  ],
  primo: [
    {
      lines: [
        { text: 'Clear sky opens above us', color: ink },
        { text: 'crickets softly call', color: ink },
        { text: 'crickets sing', color: ink },
        { text: 'You walk beside me till dawn', color: ink },
        { text: 'the morning soon breaks', color: ink },
        { text: 'silence roars', color: ink },
        { text: 'how loudly loneliness rings', color: ink },
        { text: 'distance stays present', color: ink },
        { text: 'far away—', color: ink },
        { text: 'turn on the little light,', color: ink },
        { text: 'breathe.', color: ink },
      ],
    },
  ],
  fibonacci: [
    {
      lines: [
        { text: 'light', color: ink },
        { text: 'shawl', color: ink },
        { text: 'ember', color: ink },
        { text: 'woven wool', color: ink },
        { text: 'a shawl to warm me', color: ink },
        { text: 'under a wide and cloudless sky', color: ink },
      ],
    },
  ],
  piema: [
    {
      lines: [
        { text: 'Cannot sleep tonight', color: ink },
        { text: 'darkness', color: ink },
        { text: "I won't close my", color: ink },
        { text: 'eyes,', color: ink },
        { text: 'lose the north and disappear', color: ink },
        { text: "Feel the clock's numbers flickering there as you sleep", color: ink },
        { text: 'blinking, watching over you as you sleep at night.', color: ink },
      ],
    },
  ],
  dado: [
    {
      lines: [
        { text: 'rest  ·  luck  ·  cutting', color: mutedInk },
        { text: 'honey  ·  descends  ·  axolotl', color: mutedInk },
      ],
    },
  ],
  markov: [
    {
      lines: [
        { text: 'from → notebook → erase', color: ink },
        { text: 'your → name', color: ink },
      ],
    },
  ],
};
