import { Outlet } from "react-router";
import Navbar from "~/components/Navbar";
import HeroBg from "~/components/HeroBg";
import "@fontsource-variable/montserrat";
import "@fontsource-variable/open-sans";

export default function Layout() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main className="pt-15 pb-20 relative z-10">
        <Outlet />
      </main>
      <footer className="bg-rose-950 opacity-85 backdrop-blur-xl p-4 text-white text-center absolute bottom-0 right-0 left-0 z-2">
        &copy; {new Date().getFullYear()} UCL SportsFest. All rights reserved.
      </footer>
      <HeroBg />
    </div>
  );
}
