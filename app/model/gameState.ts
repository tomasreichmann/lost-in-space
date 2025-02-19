import { create } from "zustand";

export enum SceneEnum {
  Start = "Start",
  End = "End",
}

interface GameState {
  currentSceneId: SceneEnum;
  setSceneId: (sceneId: SceneEnum) => void;
}

export const useGameStore = create<GameState>((set) => ({
  currentSceneId: SceneEnum.Start,
  setSceneId: (sceneId) => set({ currentSceneId: sceneId }),
}));
