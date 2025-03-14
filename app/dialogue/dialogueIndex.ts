// dialogueIndex.ts
const dialogueIndex = {
  "01_intro/cold_awakening": () => import("./01_intro/cold_awakening.mdx"),
  "01_intro/illuminated_cryo_pod": () =>
    import("./01_intro/illuminated_cryo_pod.mdx"),
  // other dialogues...
};
export default dialogueIndex;
