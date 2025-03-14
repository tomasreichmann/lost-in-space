// dialogueIndex.ts
const currentFilePath = import.meta.url;
console.log("currentFilePath", currentFilePath);
const getDocument = (currentDialogueId: string) => {
  return {
    url: new URL(
      `./${currentDialogueId}.mdx`,
      __APP_ABSOLUTE_PATH__ + "/dialogue/"
    ).toString(),
    doc: /* @vite-ignore */ import(`./${currentDialogueId}.mdx`),
  };
};

const dialogueIndex = {
  TODO: () => getDocument("TODO"),
  "01_intro/cold_awakening": () => getDocument("01_intro/cold_awakening"),
  "01_intro/illuminated_cryo_pod": () =>
    getDocument("01_intro/illuminated_cryo_pod"),
  // other dialogues...
};
export default dialogueIndex;
