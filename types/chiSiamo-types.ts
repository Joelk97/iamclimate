import { PortableTextBlock, TypedObject } from "sanity";

export interface ChiSiamo {
  text: {
    it: PortableTextBlock[];
    en?: PortableTextBlock[];
  };
  textStatutes: {
    it: PortableTextBlock[];
    en?: PortableTextBlock[];
  };
  titleMembers: {
    it: string;
    en?: string;
  };
  titleStatutes: {
    it: string;
    en?: string;
  };
  titleAboutUs: {
    it: string;
    en?: string;
  };
  textMembers: {
    it: PortableTextBlock[];
    en?: PortableTextBlock[];
  };
  title: {
    it: string;
    en?: string;
  };
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
