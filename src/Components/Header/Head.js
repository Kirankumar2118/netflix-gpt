import { Bell, Search } from "lucide-react";
import ProfileMenu from "./ProfileMenu";
import { LOGO } from "../../Utils/constant";

export default function Head() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-black via-black/60 to-transparent">
      <div className="flex items-center justify-between px-12 py-4">
        <div className="flex items-center gap-10">
          <img className="w-28 cursor-pointer" src={LOGO} alt="logo" />

          <ul className="hidden lg:flex gap-6 text-white text-sm">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        <div className="flex items-center gap-6 text-white">
          <Search size={22} />
          <Bell size={22} />

          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}
