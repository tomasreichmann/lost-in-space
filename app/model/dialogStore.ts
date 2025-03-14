import { create } from "zustand";

// Dialogue Store Interface
interface DialogueState {
  currentDialogueId: string;
  dialogueHistory: string[];
  advanceDialogue: (newDialogueId: string) => void;
  canGoBack: () => boolean;
  goBack: () => void;
}

// Create Zustand Store
export const useDialogueStore = create<DialogueState>((set, get) => ({
  currentDialogueId: "01_intro/cold_awakening",
  dialogueHistory: ["01_intro/cold_awakening"],

  advanceDialogue: (newDialogueId) =>
    set((state) => ({
      currentDialogueId: newDialogueId,
      dialogueHistory: [...state.dialogueHistory, newDialogueId],
    })),

  canGoBack: () => get().dialogueHistory.length > 1,

  goBack: () =>
    set((state) => {
      if (state.dialogueHistory.length <= 1) return state;

      const newHistory = [...state.dialogueHistory];
      newHistory.pop(); // Remove current dialogue

      return {
        currentDialogueId: newHistory[newHistory.length - 1],
        dialogueHistory: newHistory,
      };
    }),
}));
