import { OPERATION_TYPE, SVGOperation } from "../types";

export function setSVGAttributes(svg: string, attr: string, value: string) {
  return svg.replace('<svg', `<svg ${attr}="${value}"`);
}

export function editSvg(svgElement: SVGElement, operation: SVGOperation) {
  if (!(svgElement instanceof SVGElement)) {
    console.error('Invalid SVG element');
    return;
  }

  switch (operation.type) {
    case OPERATION_TYPE.appendChild:
      appendChild(svgElement, operation.elementType, operation.attributes)
      break;
    case OPERATION_TYPE.removeChild:
      removeChild(svgElement, operation.selector)
      break;
    case OPERATION_TYPE.setAttribute:
      setAttribute(svgElement, operation.selector, operation.attribute, operation.value);
      break;
    case OPERATION_TYPE.changeColor:
      break;
    case OPERATION_TYPE.modifyPath:
      modifyPath(svgElement, operation.selector, operation.newPath)
      break;
    case OPERATION_TYPE.changeColor:
      break;
    case OPERATION_TYPE.resize:
      resizeSVG(svgElement, operation.width, operation.height)
      break;
    default:
      console.error('Invalid operation type', operation.type);
  }

  return svgElement;
}

export function setAttribute(svgElement: SVGElement, selector: string | undefined, attribute: string, value: string) {
  const element = selector ? svgElement.querySelector(selector) : svgElement;
  if (element) {
    element.setAttribute(attribute, value);
  } else {
    console.error('Element not found', selector);
  }
}

export function appendChild(svgElement: SVGElement, elementType: string, attributes: Record<string, string> = {}) {
  const newElement = document.createElementNS('http://www.w3.org/2000/svg', elementType);
  Object.entries(attributes).forEach(([attr, value]) => newElement.setAttribute(attr, value));
  svgElement.appendChild(newElement);
}

export function removeChild(svgElement: SVGElement, selector: string) {
  const element = svgElement.querySelector(selector);
  if (element) {
    svgElement.removeChild(element);
  } else {
    console.error('Element not found', selector);
  }
}

export function modifyPath(svgElement: SVGElement, selector: string, path: string) {
  const element = svgElement.querySelector(selector);
  if (element) {
    element.setAttribute('d', path);
  } else {
    console.error('Element not found', selector);
  }
}

export function resizeSVG(svgElement: SVGElement, width: number, height: number) {
  svgElement.setAttribute('width', `${width}px`);
  svgElement.setAttribute('height', `${height}px`);

  // TODO: 可能需要调整viewBox
  // svgElement.setAttribute('viewBox', `0 0 ${width} ${height}`)
}
