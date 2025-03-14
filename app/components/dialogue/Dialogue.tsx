import React from "react";
import { useDialogueStore } from "~/model/dialogStore";
import { MdxArticle } from "../content/MdxArticle";
import dialogueIndex from "~/dialogue/dialogueIndex";

export default function Dialogue() {
  const { currentDialogueId, canGoBack, goBack } = useDialogueStore();

  return (
    <div>
      <p>Current Dialogue: {currentDialogueId}</p>
      {currentDialogueId in dialogueIndex &&
        dialogueIndex[currentDialogueId as keyof typeof dialogueIndex] && (
          <React.Suspense fallback={<div>Loading...</div>}>
            <MdxArticle
              content={React.lazy(
                dialogueIndex[currentDialogueId as keyof typeof dialogueIndex]
              )}
            />
          </React.Suspense>
        )}
      {canGoBack() && <button onClick={goBack}>Previous</button>}
    </div>
  );
}
