import fs from "fs"
import path from "path"

export interface LoaderIcon {
  name: string;
  svg: string;
  category?: string;
}

const iconDir = path.join(__dirname, "../icons")

function readSvgFilesRecursively(dir: string, baseDir: string = dir): LoaderIcon[] {
  let results: LoaderIcon[] = []
  const list = fs.readdirSync(dir)

  list.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat && stat.isDirectory()) {
      results = results.concat(readSvgFilesRecursively(filePath, baseDir))
    } else if (path.extname(file).toLowerCase() === ".svg") {
      const category = path.relative(baseDir, dir)
      const name = path.join(category, path.basename(file, '.svg')).replace(/\\/g, '/')
      results.push({
        name,
        svg: fs.readFileSync(filePath, "utf-8"),
        category: category !== '' ? category : undefined,
      })
    }
  })
  return results
}

const loaderIcons = readSvgFilesRecursively(iconDir)

export function getLoaderIcon(name: string): LoaderIcon | undefined {
  try {
    return loaderIcons.find(icon => icon.name === name)
  } catch (error: any) {
    throw new Error(error.message)
  }
}

export function getLoaderIconsCategory(category: string): LoaderIcon[] {
  return loaderIcons.filter(icon => icon.category === category)
}

export function getAllCategories(): string[] {
  return Array.from(new Set(loaderIcons.map(icon => icon.category).filter(Boolean) as string[]));
}
