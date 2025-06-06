export interface Study {
  id: number
  name: string
  dateI: string
  dateF: string
  dateYear: string
  title: string
  description: string
  src: string
  tecnologies: Tecnology[]
}

export interface Tecnology {
  name: string
  src: string
}
