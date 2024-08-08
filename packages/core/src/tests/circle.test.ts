import { describe, it, expect } from 'vitest';
import { createCircleLoader } from '../loaders/circle';

describe('createCircleLoader', () => {
  it('creates an SVG element', () => {
    const loader = createCircleLoader();
    expect(loader.tagName).toBe('svg');
  });

  it('applies default options', () => {
    const loader = createCircleLoader();
    expect(loader.getAttribute('width')).toBe('40');
    expect(loader.getAttribute('height')).toBe('40');
  });

  it('applies custom options', () => {
    const loader = createCircleLoader({ size: 60, strokeWidth: 6, color: '#ff0000' });
    expect(loader.getAttribute('width')).toBe('60');
    expect(loader.getAttribute('height')).toBe('60');
    const circle = loader.querySelector('circle');
    expect(circle?.getAttribute('stroke')).toBe('#ff0000');
    expect(circle?.getAttribute('stroke-width')).toBe('6');
  });
});