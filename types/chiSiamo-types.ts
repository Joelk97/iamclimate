import { PortableTextBlock, TypedObject } from "sanity";
type Index = {
  [key: string]: string;
};
type IndexPortable = {
  [key: string]: PortableTextBlock[];
};
export interface ChiSiamo {
  text: IndexPortable;
  textStatutes: IndexPortable;
  titleMembers: Index;
  titleStatutes: Index;
  titleAboutUs: Index;
  textMembers: IndexPortable;
  title: Index;
  members: member[];
}
export type member = {
  memberImage: string;
  name: string;
  text: {
    it: string;
    en?: string;
  };
};
