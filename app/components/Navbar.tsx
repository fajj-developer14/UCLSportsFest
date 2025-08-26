import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const categories = ["Home", "Categories", "Schedule", "Register", "Contact"];
  return (
    <nav className="w-full bg-rose-950 opacity-85 backdrop-blur-xl px-4 py-4 font-montserrat uppercase absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex flex-col items-center overflow-hidden sm:flex-row sm:justify-between">
        <div className="flex justify-between items-center space-x-4 w-full">
          <h1 className="uppercase font-medium text-lg tracking-wider text-white">
            UCL SportsFest
          </h1>
          <button
            className="w-6 sm:hidden"
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
          className={`text-center w-full tracking-wider text-xs sm:flex sm:items-center justify-end transition-all duration-200 ease-in-out ${isMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 sm:max-h-none sm:opacity-100 "} `}
        >
          {categories.map((c) => (
            <li className="w-full sm:w-auto sm:pl-4 md:pl-6">
              <a
                href="#"
                className="inline-block text-slate-200 cursor-pointer hover:text-white hover:scale-110 transition-all duration-100 ease-in-out"
              >
                {c}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
