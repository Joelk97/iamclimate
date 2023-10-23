import blockContent from "./schemas/blockContent";
import blogPost from "./schemas/blogPost";
import chiSiamo from "./schemas/chiSiamo";
import eventi from "./schemas/eventi";
import BlockContent from "./schemas/locale/BlockContent";
import Slug from "./schemas/locale/Slug";
import String from "./schemas/locale/String";
import Text from "./schemas/locale/Text";
import members from "./schemas/members";
import slogan from "./schemas/slogan";

export const schema = {
  types: [
    BlockContent,
    blockContent,
    blogPost,
    Text,
    Slug,
    String,
    eventi,
    chiSiamo,
    members,
    slogan,
  ],
};
