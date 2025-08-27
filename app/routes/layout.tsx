import { Outlet } from "react-router";
import Navbar from "~/components/Navbar";
import HeroBg from "~/components/HeroBg";
import "@fontsource-variable/montserrat";
import "@fontsource-variable/open-sans";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="pt-15 pb-10 relative z-10 flex-1">
        <Outlet />
      </main>
      <footer className="bg-rose-950 opacity-85 backdrop-blur-xl p-4 text-white text-center z-2">
        &copy; {new Date().getFullYear()} UCL SportsFest. All rights reserved.
      </footer>
      <HeroBg />
    </div>
  );
}
