import { describe, it, expect, vi } from "vitest"
import { rotateSvg } from "../animations/rotate"

describe('rotateSvg', () => {
  it('should rotate the svg element', () => {
    // 创建一个模拟的SVG元素
    const svgElement = {
      style: {} as CSSStyleDeclaration,
      animate: vi.fn(),
    } as unknown as SVGElement;

    // 调用rotateSvg函数
    rotateSvg(svgElement);

    // 检查是否设置了transform-origin
    expect(svgElement.style.transformOrigin).toBe('center');

    // 检查animate是否被调用，以及调用参数是否正确
    expect(svgElement.animate).toHaveBeenCalledWith(
      [
        { transform: 'rotate(0deg)', "offset": 0, },
        { transform: 'rotate(360deg)', "offset": 0, }
      ],
      {
        duration: 2000,
        easing: 'linear',
        delay: 0,
        iterations: 'infinite',
        direction: 'normal',
        fill: 'both',
      }
    );
  })

  it('applies custom options', () => {
    const svgElement = {
      style: {} as CSSStyleDeclaration,
      animate: vi.fn(),
    } as unknown as SVGElement;

    rotateSvg(svgElement, {
      duration: 1000,
      easing: 'ease-in-out',
      delay: 500,
      iterations: 5,
      direction: 'alternate'
    });

    expect(svgElement.animate).toHaveBeenCalledWith(
      expect.any(Array),
      {
        duration: 1000,
        easing: 'ease-in-out',
        delay: 500,
        iterations: 5,
        direction: 'alternate',
        fill: 'both',
      }
    );
  })
})