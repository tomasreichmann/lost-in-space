import React from "react";
import { useDialogueStore } from "~/model/dialogStore";
import { MdxArticle } from "../content/MdxArticle";
import dialogueIndex from "~/dialogue/dialogueIndex";

export default function Dialogue() {
  const { currentDialogueId, canGoBack, goBack } = useDialogueStore();
  const urlRef = React.useRef<null | string>(null);

  return (
    <div>
      <p>Current Dialogue: {currentDialogueId}</p>
      <p>
        <button onClick={() => window.open(urlRef.current as string)}>
          Edit in VSCode
        </button>
      </p>

      {currentDialogueId in dialogueIndex &&
        dialogueIndex[currentDialogueId as keyof typeof dialogueIndex] && (
          <React.Suspense fallback={<div>Loading...</div>}>
            <MdxArticle
              content={React.lazy(() => {
                const { doc, url } =
                  dialogueIndex[
                    currentDialogueId as keyof typeof dialogueIndex
                  ]();
                console.log(url);
                urlRef.current = `vscode://${url}`;
                return doc;
              })}
            />
          </React.Suspense>
        )}
      {canGoBack() && <button onClick={goBack}>Previous</button>}
    </div>
  );
}
