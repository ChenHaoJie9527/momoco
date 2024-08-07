import { IconOptions } from "../types"

export function createIcon(type: string, options: IconOptions) {
  return `<svg>${type} icon with ${JSON.stringify(options)}</svg>`
}

export function getIconTypes() {
  return ['spinner', 'dots', 'bar']
}
