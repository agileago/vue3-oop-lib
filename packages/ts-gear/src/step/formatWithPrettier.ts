import { exec } from 'child_process'
import fs from 'node:fs'
import path from 'node:path'
import { promisify } from 'util'
import { info } from '../tool/log'
import type { Project } from '../type'

const execAsync = promisify(exec)

/**
 * 检查项目是否使用Prettier并格式化生成的代码
 */
export const formatWithPrettierIfAvailable = async (tsGearConfigPath: string): Promise<void> => {
  try {
    // 检查项目根目录是否有prettier配置文件
    const projectRoot = process.cwd()
    const prettierConfigFiles = [
      '.prettierrc',
      '.prettierrc.js',
      '.prettierrc.json',
      '.prettierrc.yml',
      '.prettierrc.yaml',
      'prettier.config.js',
      'package.json',
    ]

    let hasPrettierConfig = false

    for (const configFile of prettierConfigFiles) {
      const configPath = path.join(projectRoot, configFile)
      if (fs.existsSync(configPath)) {
        if (configFile === 'package.json') {
          // 检查package.json中是否有prettier配置
          const packageJson = JSON.parse(fs.readFileSync(configPath, 'utf8'))
          if (packageJson.prettier || packageJson.devDependencies?.prettier || packageJson.dependencies?.prettier) {
            hasPrettierConfig = true
            break
          }
        } else {
          hasPrettierConfig = true
          break
        }
      }
    }

    if (hasPrettierConfig) {
      info('检测到Prettier配置，正在格式化生成的代码...')

      // 使用prettier格式化目录下的所有文件
      await execAsync(`npx prettier --write "${tsGearConfigPath}/**/*.{ts,js,json}"`)

      info('代码格式化完成')
    }
  } catch (error) {
    info(`格式化代码时出错: ${error}`)
  }
}
