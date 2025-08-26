import type { Route } from "./+types/home";
import Hero from "~/components/Hero";
export function meta({}: Route.MetaArgs) {
  return [{ title: "UCL SportsFest" }, { name: "description", content: "" }];
}

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}
