import React, { useState } from "react";
import Navigation from "~/components/Navigation";
import { SceneEnum, useGameStore } from "~/model/gameState";

export default function Game() {
  const { currentSceneId, setSceneId } = useGameStore();

  const handleGameAction = () => {
    setSceneId(SceneEnum.End);
  };

  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Lost in Space Game</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div>
            SceneIds:{" "}
            {Object.values(SceneEnum).map((sceneId) => (
              <button
                key={sceneId}
                onClick={() => setSceneId(sceneId)}
                className={`
                px-4 py-2 rounded-md transition duration-300 ease-in-out
                ${
                  currentSceneId === sceneId
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
              `}
              >
                {sceneId}
              </button>
            ))}
          </div>
          <button
            onClick={handleGameAction}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Play
          </button>
        </div>
      </div>
    </>
  );
}
