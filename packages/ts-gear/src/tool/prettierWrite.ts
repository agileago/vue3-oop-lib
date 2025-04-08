import { writeFileSync } from 'fs'

/**
 * read from tsg config project prettier config
 * write formatted typescript data
 * */
export const prettierWrite = ({ file, data }: { file: string; data: string }) => {
  writeFileSync(file, data)
}
