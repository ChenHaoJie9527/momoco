export interface IconOptions {
  size?: number;
  color?: string;
  speed?: number;
  duration?: number;
}

export type SVGAttribute = {
  [key: string]: string | number;
}

/**
 * duration: 定义动画的持续时间
 * easing: 定义动画的缓动函数，控制动画在其持续时间内如何进行 'linear'、'ease'、'ease-in'、'ease-out'、'ease-in-out'
 * delay: 定义动画开始前的延迟时间
 * direction: 定义动画的方向 'normal' | 'reverse' | 'alternate' | 'alternate-reverse'
 * iterations: 定义动画应该重复的次数 Infinity无限循环
 */
export interface RotateOptions {
  duration?: number;
  easing?: string;
  delay?: number;
  direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
  iterations?: number;
}
