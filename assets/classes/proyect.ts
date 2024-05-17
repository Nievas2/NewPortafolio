export interface Proyect {
  id: number;
  name: string;
  dateI: string;
  dateF: string;
  dateYear: string;
  description: string;
  link: string;
  src: any;
  tecnologies: Tecnology[];
  images: Image[];
}

export interface Tecnology {
  name: string;
  src: string;
}

export interface Image {
  src: string;
}
