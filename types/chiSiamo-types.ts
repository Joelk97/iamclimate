import { PortableTextBlock, TypedObject } from "sanity";

export interface ChiSiamo {
  text: {
    it: PortableTextBlock[];
  };
  title: {
    it: string;
    en: string;
  };
}
