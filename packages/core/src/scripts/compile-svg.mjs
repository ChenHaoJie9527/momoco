import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


async function compileSvgToJs(dir) {
  const icons = {};

  async function readSvgFilesRecursively(dir, baseDir = dir) {
    const files = await fs.readdir(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = await fs.stat(filePath);

      if (stat.isDirectory()) {
        await readSvgFilesRecursively(filePath, baseDir);
      } else if (path.extname(file).toLocaleLowerCase() === '.svg') {
        const category = path.relative(baseDir, dir)
        const name = path.join(category, path.basename(file, '.svg')).replace(/\\/g, '/');
        const content = await fs.readFile(filePath, 'utf-8');
        icons[name] = {
          name,
          svg: content,
          category: category !== '' ? category : undefined
        }
      }
    }
  }

  await readSvgFilesRecursively(dir);

  const output = `export const icons = ${JSON.stringify(icons, null, 2)};`;
  await fs.writeFile(path.join(__dirname, '../compiledIcons.ts'), output);
}

const iconDir = path.join(__dirname, '../icons');
compileSvgToJs(iconDir).catch(console.error)
