export type Technology = {
  name: string | null;
  src: string | null;
};
export type Frontend = {
  description: string | null;
};
export type Backend = {
  description: string | null;
};
export type Images = {
  src: string | null;
};
export type Project = {
  id: number;
  name: string;
  dateI: string;
  dateF: string;
  dateYear: string;
  role: string;
  description: string;
  src: string | null;
  link: string | null;
  tecnologies: Technology[];
  images: Images[] | null;
  backend: Backend[] | null;
  frontend: Frontend[] | null;
};
