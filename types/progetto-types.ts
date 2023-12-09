import { PortableTextBlock, TypedObject } from "sanity";
type Index = {
  [key: string]: string;
};
type IndexPortable = {
  [key: string]: PortableTextBlock[];
};
type Current = {
  current: string;
};
type Slug = {
  [key: string]: Current;
};
export interface Progetto {
  content: IndexPortable;
  title: Index;
  slug: Slug;
  date: string;
  intro: Index;
  image: string;
}
export type Progetti = Progetto[];
