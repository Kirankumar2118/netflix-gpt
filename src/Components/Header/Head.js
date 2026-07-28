import { Search, X } from "lucide-react";
import ProfileMenu from "./ProfileMenu";
import { LOGO } from "../../Utils/constant";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Head() {
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.trim().length > 0) {
      navigate(`/search/${query.trim()}`);
      setShowSearch(false);
      setQuery("");
    }
  };

  const navigationHandler = (type) => {
    navigate(`/explorer/${type}`);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-black via-black/80 to-transparent">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:h-18 sm:px-6 md:h-20 md:px-10 lg:px-14 xl:px-16">
        {/* Left Section */}
        <div className="flex items-center gap-4 lg:gap-8">
          {/* Logo */}
          <img
            src={LOGO}
            alt="Netflix"
            className="w-20 cursor-pointer sm:w-24 md:w-28 lg:w-32"
            onClick={() => navigate("/browse")}
          />

          {/* Navigation */}
          <ul className="flex items-center gap-3 text-[11px] font-medium text-white sm:gap-4 sm:text-xs md:gap-5 md:text-sm">
            <li
              className="cursor-pointer transition hover:text-gray-300"
              onClick={() => navigationHandler("tv")}
            >
              TV Shows
            </li>

            <li
              className="cursor-pointer transition hover:text-gray-300"
              onClick={() => navigationHandler("movie")}
            >
              Movies
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 text-white sm:gap-3 md:gap-5">
          {/* Search Icon */}
          <Search
            size={20}
            onClick={() => setShowSearch(true)}
            className="cursor-pointer transition-all duration-300 hover:scale-110 hover:text-gray-300"
          />

          {/* GPT Button */}
          <button
            className="
              rounded-md
              bg-[#E50914]
              px-2
              py-1
              text-[10px]
              font-medium
              transition
              hover:bg-[#C11119]
              sm:px-3
              sm:text-xs
              md:px-4
              md:py-1.5
              md:text-sm
            "
          >
            GPT Search
          </button>

          {/* Profile */}
          <ProfileMenu />
        </div>
      </div>

      {/* Search Box */}
      <div
        className={`
          absolute
          right-10
          top-full
          mt-2
          w-[300px]
          sm:w-[340px]
          md:w-[400px]
          transition-all
          duration-300
          ${
            showSearch
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 pointer-events-none opacity-0"
          }
        `}
      >
        <div className="flex items-center gap-3 rounded-lg border border-gray-700 bg-black/95 px-4 py-3 shadow-2xl backdrop-blur-md">
          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            value={query}
            autoFocus={showSearch}
            placeholder="Search movies or TV shows..."
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={searchQueryHandler}
            className="
              flex-1
              bg-transparent
              text-sm
              text-white
              placeholder:text-gray-500
              outline-none
              md:text-base
            "
          />

          <button
            onClick={() => {
              setShowSearch(false);
              setQuery("");
            }}
            className="rounded-full p-1 transition hover:bg-white/10"
          >
            <X size={20} className="text-gray-300" />
          </button>
        </div>
      </div>
    </header>
  );
}
