type Technology = {
  name: string;
  src: string;
};

type Project = {
  id: number;
  name: string;
  dateI: string;
  dateF: string;
  dateYear: string;
  role: string;
  description: string;
  src: string;
  link: string;
  tecnologies: Technology[];
  images: string[] | null;
  backend: string | null;
  frontend: Technology[] | null;
};
