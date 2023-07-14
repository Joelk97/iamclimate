import blockContent from "./blockContent";
import blogPost from "./blogPost";
import eventi from "./eventi";
import BlockContent from "./locale/BlockContent";
import Slug from "./locale/Slug";
import String from "./locale/String";
import Text from "./locale/Text";

export const schema = {
  types: [BlockContent, blockContent, blogPost, Text, Slug, String, eventi],
};
