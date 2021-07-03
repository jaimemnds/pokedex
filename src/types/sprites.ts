export namespace Sprites {
  export interface Sprites {
    animated?: Sprites;
    back_default?: string;
    back_female?: string;
    back_gray?: string;
    back_shiny?: string;
    back_shiny_female?: string;
    front_default: string;
    front_female?: string;
    front_gray?: string;
    front_shiny?: string;
    front_shiny_female?: string;
  }

  export interface Own extends Sprites {
    other: Other;
    versions: Versions;
  }

  export interface Versions {
    'generation-i': GenerationI;
    'generation-ii': GenerationII;
    'generation-iii': GenerationIII;
    'generation-iv': GenerationIV;
    'generation-v': GenerationV;
    'generation-vi': GenerationVI;
    'generation-vii': GenerationVII;
    'generation-viii': GenerationVIII;
  }

  export interface GenerationI {
    'red-blue': Sprites;
    yellow: Sprites;
  }

  export interface GenerationII {
    crystal: Sprites;
    gold: Sprites;
    silver: Sprites;
  }

  export interface GenerationIII {
    emerald: Sprites;
    'firered-leafgreen': Sprites;
    'ruby-sapphire': Sprites;
  }

  export interface GenerationIV {
    'diamond-pearl': Sprites;
    'heartgold-soulsilver': Sprites;
    platinum: Sprites;
  }

  export interface GenerationV {
    'black-white': Sprites;
  }

  export interface GenerationVI {
    'omegaruby-alphasapphire': Sprites;
    'x-y': Sprites;
  }

  export interface GenerationVII {
    icons: Sprites;
    'ultra-sun-ultra-moon': Sprites;
  }

  export interface GenerationVIII {
    icons: Sprites;
  }

  export interface Other {
    dream_world: Sprites;
    'official-artwork': Sprites;
  }
}
