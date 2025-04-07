import { join } from 'path'
import rimraf from 'rimraf'
import ts from 'typescript'
import { targetFileNames } from '../constant'
import { info } from '../tool/log'
import type { Project } from '../type'

const { sync } = rimraf

export function toJS(project: Project, tsGearConfigPath: string): void {
  const compilerOptions: ts.CompilerOptions = {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ESNext,
  }
  const targetPath = join(tsGearConfigPath, project.dest, project.name)
  const fileNames = [join(targetPath, targetFileNames.index)]
  const program = ts.createProgram(fileNames, compilerOptions)
  // 运行前先清除已有的js文件
  // sync(join(targetPath, '*.js'))
  const emitResult = program.emit()

  const exitCode = emitResult.emitSkipped ? 1 : 0
  if (exitCode === 0) {
    info(`project "${project.name}" transpiled to javascript success.`)
    // 成功后清除ts文件
    sync(join(targetPath, '*.ts'))
  }
}
