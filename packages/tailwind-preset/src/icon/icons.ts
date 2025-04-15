import * as fs from 'node:fs'
import * as path from 'node:path'
import { optimize } from 'svgo'

export interface SvgData {
  name: string
  base64: string
  isMask: boolean
}

export function readDirectoryRecursively(directory: string, rootDir: string) {
  const result: SvgData[] = []
  try {
    const files = fs.readdirSync(directory)

    files.forEach(file => {
      const filePath = path.join(directory, file)
      const stat = fs.statSync(filePath)
      if (stat.isDirectory()) {
        result.push(...readDirectoryRecursively(filePath, rootDir))
      } else {
        try {
          const source = fs.readFileSync(path.resolve(filePath), 'utf-8')
          const base64 = optimize(source, {
            datauri: 'base64',
            multipass: true,
          }).data
          result.push({
            base64,
            name: filePath
              .replaceAll(rootDir + path.sep, '')
              .replaceAll('.svg', '')
              .replaceAll(path.sep, '/'),
            isMask: source.includes('currentColor'),
          })
        } catch (err) {
          console.error('juan tailwindcss-svg-icon error:', filePath)
        }
      }
    })

    return result
  } catch (e) {
    return result
  }
}

export function getIcons(iconPath: string) {
  const dir = path.resolve(iconPath)
  const files = readDirectoryRecursively(dir, dir)
  return Object.fromEntries(files.map(k => [k.name, k]))
}
