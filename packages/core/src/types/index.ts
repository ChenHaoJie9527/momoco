export interface IconOptions {
  size?: number;
  color?: string;
  speed?: number;
  duration?: number;
}

export type SVGAttribute = {
  [key: string]: string | number;
}

export enum OPERATION_TYPE {
  setAttribute = 'setAttribute',
  appendChild = 'appendChild',
  removeChild = 'removeChild',
  resize = 'resize',
  modifyPath = 'modifyPath',
  changeColor = 'changeColor'
}

export type OperationType = 'setAttribute' | 'appendChild' | 'removeChild' | 'modifyPath' | 'changeColor' | 'resize';

export interface SetAttributeOperation {
  type: 'setAttribute';
  selector?: string;
  attribute: string;
  value: string;
}

export interface AppendChildOperation {
  type: 'appendChild';
  elementType: string;
  attributes?: Record<string, string>;
}

export interface RemoveChildOperation {
  type: 'removeChild';
  selector: string;
}

export interface ResizeOperation {
  type: 'resize';
  width: string;
  height: string;
}

export interface ModifyPathOperation {
  type: 'modifyPath';
  selector: string;
  newPath: string;
}

export interface ChangeColorOperation {
  type: 'changeColor';
  selector?: string;
  colorType: 'fill' | 'stroke';
  color: string;
}

export type SVGOperation =
  | SetAttributeOperation
  | AppendChildOperation
  | RemoveChildOperation
  | ModifyPathOperation
  | ChangeColorOperation
  | ResizeOperation;


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
