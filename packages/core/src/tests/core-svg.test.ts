import { describe, it, expect } from 'vitest';
import { createIcon, getIconTypes } from '../icons';

describe('Core SVG Library', () => {
  it('createIcon returns an SVG string', () => {
    const svg = createIcon('spinner', { size: 24, color: '#000000' });
    expect(svg).toContain('<svg');
    expect(svg).toContain('</svg>');
  });

  it('getIconTypes returns an array of strings', () => {
    const types = getIconTypes();
    expect(Array.isArray(types)).toBe(true);
    expect(types.length).toBeGreaterThan(0);
    expect(types.every(type => typeof type === 'string')).toBe(true);
  });
});
