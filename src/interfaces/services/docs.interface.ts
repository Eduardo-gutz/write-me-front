export interface CreateDocDTO {
  name: string
  fileName: string
  format: string
  user: string
  lines: string[]
}

export interface DocDTO {
  id: string
  name: string
  fileName: string
  format: string
  lines: string[]
}

export interface DocList extends Omit<DocDTO, 'lines'> {}
