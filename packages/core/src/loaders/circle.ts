export interface CircleLoaderOptions {
  size?: number;
  strokeWidth?: number;
  color?: string;
}

export function createCircleLoader(options: CircleLoaderOptions = {}): SVGElement {
  const {
    size = 40,
    strokeWidth = 4,
    color = '#000000'
  } = options;

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', size.toString());
  svg.setAttribute('height', size.toString());
  svg.setAttribute('viewBox', `0 0 ${size} ${size}`);

  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;

  circle.setAttribute('cx', center.toString());
  circle.setAttribute('cy', center.toString());
  circle.setAttribute('r', radius.toString());
  circle.setAttribute('fill', 'none');
  circle.setAttribute('stroke', color);
  circle.setAttribute('stroke-width', strokeWidth.toString());
  circle.setAttribute('stroke-dasharray', (2 * Math.PI * radius).toString());
  circle.setAttribute('stroke-linecap', 'round');

  const animateTransform = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
  animateTransform.setAttribute('attributeName', 'transform');
  animateTransform.setAttribute('type', 'rotate');
  animateTransform.setAttribute('dur', '1s');
  animateTransform.setAttribute('from', `0 ${center} ${center}`);
  animateTransform.setAttribute('to', `360 ${center} ${center}`);
  animateTransform.setAttribute('repeatCount', 'indefinite')

  circle.appendChild(animateTransform);
  svg.appendChild(circle);

  return svg
}