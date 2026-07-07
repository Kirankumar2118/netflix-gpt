import { Bell, Search } from "lucide-react";
import ProfileMenu from "./ProfileMenu";

export default function Head() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-black via-black/60 to-transparent">
      <div className="flex items-center justify-between px-12 py-4">
        <div className="flex items-center gap-10">
          <img
            className="w-28 cursor-pointer"
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
          />

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
