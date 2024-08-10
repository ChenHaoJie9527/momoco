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
      break;
    case OPERATION_TYPE.setAttribute:
      setAttribute(svgElement, operation.selector, operation.attribute, operation.value);
      break;
    case OPERATION_TYPE.changeColor:
      break;
    case OPERATION_TYPE.modifyPath:
      break;
    case OPERATION_TYPE.changeColor:
      break;
    default:
      console.error('Invalid operation type', operation.type);
  }

  return svgElement;
}

function setAttribute(svgElement: SVGElement, selector: string | undefined, attribute: string, value: string) {
  const element = selector ? svgElement.querySelector(selector) : svgElement;
  if (element) {
    element.setAttribute(attribute, value);
  } else {
    console.error('Element not found', selector);
  }
}

function appendChild(svgElement: SVGElement, elementType: string, attributes: Record<string, string> = {}) {
  const newElement = document.createElementNS('http://www.w3.org/2000/svg', elementType);
  Object.entries(attributes).forEach(([attr, value]) => newElement.setAttribute(attr, value));
  svgElement.appendChild(newElement);
}
