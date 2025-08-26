import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "UCL SportsFest" }, { name: "description", content: "" }];
}

export default function Home() {
  return (
    <>
      <h1 className="text-amber-300">hello</h1>
    </>
  );
}
