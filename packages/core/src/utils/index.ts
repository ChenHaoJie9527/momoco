export function setSVGAttributes(svg: string, attr: string, value: string) {
  return svg.replace('<svg', `<svg ${attr}="${value}"`);
}
