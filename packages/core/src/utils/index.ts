import { RotateOptions } from "../types";

export function setSVGAttributes(svg: string, attr: string, value: string) {
  return svg.replace('<svg', `<svg ${attr}="${value}"`);
}

export function rotateSvg(svgElement: SVGElement, options: RotateOptions) {
  const { duration = 2000, easing = 'linear', delay = 0, iterations = 'infinite', direction = 'normal' } = options

  // 确保元素有一个transform-origin
  svgElement.style.transformOrigin = 'center'

  // 创建关键帧
  const keyframes = [
    {
      transform: 'rotate(0deg)',
      offset: 0
    },
    {
      transform: 'rotate(360deg)',
      offset: 0
    }
  ]

  // 创建动画选项
  const animationOptions: KeyframeAnimationOptions = {
    duration,
    easing,
    delay,
    iterations,
    direction,
    fill: 'both',
    keyframes,
  }

  // 应用动画
  svgElement.animate(keyframes, animationOptions)

}
