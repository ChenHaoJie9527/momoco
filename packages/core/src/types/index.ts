export interface IconOptions {
  size?: number;
  color?: string;
  speed?: number;
  duration?: number;
}

export type SVGAttribute = {
  [key: string]: string | number;
}

export interface RotateOptions {
  duration?: number;
  easing?: string;
  delay?: number;
  direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
  iterations?: any;
}
