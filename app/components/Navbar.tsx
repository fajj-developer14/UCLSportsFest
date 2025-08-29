import { useState } from "react";
import { Link } from "react-router";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = [
    { name: "Home", link: "/" },
    { name: "Categories", link: "/categories" },
    { name: "Schedule", link: "/schedule" },
    { name: "Register", link: "/register" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <nav className="w-full bg-rose-950 opacity-85 backdrop-blur-xl px-4 py-4 font-montserrat uppercase fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex flex-col items-center overflow-hidden sm:flex-row sm:justify-between sm:items-center">
        <div className="flex justify-between items-center space-x-4 w-full">
          <h1 className="uppercase font-medium text-lg tracking-wider text-white">
            UCL SportsFest
            <span className="text-xs ml-1 text-rose-500 animate-pulse">
              '25
            </span>
          </h1>
          <button
            className="w-6 sm:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="fill-slate-100"
            >
              <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
            </svg>
          </button>
        </div>
        <ul
          className={`text-center w-full tracking-wider text-xs sm:flex sm:translate-y-0.5 lg:text-sm justify-end transition-all duration-250 ease-in-out ${isMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 sm:max-h-none sm:opacity-100 "} `}
        >
          {sections.map((c, i) => (
            <li className="w-full sm:w-auto sm:pl-2 md:pl-5">
              <Link
                to={c.link}
                className="inline-block pr-0.5 text-slate-200 cursor-pointer hover:text-white hover:scale-110 transition-all duration-100 ease-in-out"
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
