import { PortableTextBlock, TypedObject } from "sanity";
type Index = {
  [key: string]: string;
};
type IndexPortable = {
  [key: string]: PortableTextBlock[];
};
export interface Progetto {
  content: IndexPortable;
  title: Index;
  intro: Index;
  image: string;
}
export type Progetti = Progetto[];
