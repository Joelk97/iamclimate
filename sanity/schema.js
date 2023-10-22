import blockContent from "./blockContent";
import blogPost from "./blogPost";
import chiSiamo from "./chiSiamo";
import eventi from "./eventi";
import BlockContent from "./locale/BlockContent";
import Slug from "./locale/Slug";
import String from "./locale/String";
import Text from "./locale/Text";
import members from "./members";

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
  ],
};
