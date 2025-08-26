import { Outlet } from "react-router";
import Navbar from "~/components/Navbar";
import HeroBg from "~/components/HeroBg";
import "@fontsource-variable/montserrat";
import "@fontsource-variable/open-sans";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main className="py-15 relative z-10 min-h-screen">
        <Outlet />
      </main>
      <footer className="bg-rose-950 opacity-85 backdrop-blur-xl p-4 text-white text-center relative z-2">
        &copy; {new Date().getFullYear()} UCL SportsFest. All rights reserved.
      </footer>
      <HeroBg />
    </div>
  );
}
