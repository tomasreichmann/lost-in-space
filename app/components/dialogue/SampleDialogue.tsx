import { MdxArticle } from "../content/MdxArticle";
import doc, { frontmatter } from "../../dialogue/01_intro/cold_awakening.mdx";

export default function SampleDialogue() {
  console.log(doc);
  // return null;
  return <MdxArticle content={doc} frontmatter={frontmatter} />;
}
