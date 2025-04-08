import { clearObject } from './tool/clearObject'
import type { Project, ProjectGlobalMap } from './type'

const projectGlobal: ProjectGlobalMap = {}

export const getGlobal = (project: Project) => {
  if (!projectGlobal[project.name]) {
    projectGlobal[project.name] = {
      definitionMap: {},
      requestMap: {},
      requestRefSet: new Set(),
      requestEnumSet: new Set(),
      enumMap: {},
    }
  }
  return projectGlobal[project.name]
}

export const restore = (project: Project) => {
  const g = projectGlobal[project.name]
  clearObject(g.definitionMap)
  clearObject(g.requestMap)
  clearObject(g.enumMap)
  g.requestRefSet.clear()
  g.requestEnumSet.clear()
}
