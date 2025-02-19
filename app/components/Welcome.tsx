import React from "react";
import Navigation from "./Navigation";

export default function Welcome() {
  return (
    <>
      <Navigation />
      <main className="flex items-center justify-center pt-16 pb-4">
        <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
          <div className="max-w-[300px] w-full space-y-6 px-4">BODY</div>
        </div>
      </main>
    </>
  );
}
