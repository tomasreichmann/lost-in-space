import Game from "~/components/Game";
import type { Route } from "./+types/game";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lost in Space: Game" },
    { name: "description", content: "Welcome to Lost in Space!" },
  ];
}

export default function GameRoute() {
  return <Game />;
}
