import Welcome from "~/components/Welcome";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lost in Space: Home" },
    { name: "description", content: "Welcome to Lost in Space!" },
  ];
}

export default function HomeRoute() {
  return <Welcome />;
}
