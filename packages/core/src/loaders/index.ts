import { icons } from "../compiledIcons"

export interface LoaderIcon {
  name: string;
  svg: string;
  category?: string;
}

const loaderIcons: LoaderIcon[] = Object.entries(icons).map(([name, data]) => ({
  name,
  svg: data.svg,
  category: data.category
}))

export function getLoaderIcons(name: string): LoaderIcon | undefined {
  return loaderIcons.find(icon => icon.name === name)
}

export function getLoaderIconsByCategory(category: string): LoaderIcon[] {
  return loaderIcons.filter(icon => icon.category === category)
}

export function getAllCategories(): string[] {
  return Array.from(new Set(loaderIcons.map(icon => icon.category).filter(Boolean) as string[]));
}
