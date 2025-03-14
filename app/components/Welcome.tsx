import React from "react";
import Navigation from "./Navigation";
import SampleDialogue from "./dialogue/SampleDialogue";
import { useDialogueStore } from "~/model/dialogStore";

export default function Welcome() {
  const { currentDialogueId } = useDialogueStore();
  return (
    <>
      <Navigation />
      <main className="flex items-center justify-center pt-16 pb-4">
        <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
          <div className="max-w-[300px] w-full space-y-6 px-4">
            Current Dialogue Id: {currentDialogueId}
            <SampleDialogue />
          </div>
        </div>
      </main>
    </>
  );
}
