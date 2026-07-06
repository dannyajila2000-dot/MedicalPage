export interface Service {
  slug: string;
  title: string;
  description: string;
}

export interface Doctor {
  name: string;
  specialty: string;
  bio: string;
}

export interface ServiceHighlight {
  slug: string;
  title: string;
  image: string;
  href: string;
}
