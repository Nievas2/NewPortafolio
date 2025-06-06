export interface Project {
  id: number
  name: string
  dateI: string
  dateF: string
  dateYear: string
  role: string
  description: string
  src: string | null
  link: string | null
  tecnologies: Tecnology[]
  images: Image[] | null
  backend: Backend[] | null
  frontend: Frontend[] | null
}

export interface Tecnology {
  name: string
  src: string
}

export interface Image {
  src: string
}

export interface Backend {
  description: string
}

export interface Frontend {
  description: string
}
