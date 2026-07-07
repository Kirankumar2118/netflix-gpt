import { useEffect, useRef, useState } from "react";
import ProfileDropdown from "./ProfileDropdown";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const close = (e) => {
      if (!ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("click", close);

    return () => window.removeEventListener("click", close);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <img
        onClick={() => setOpen(!open)}
        src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
        className="w-7 rounded cursor-pointer"
        alt="profileimage"
      />

      {open && <ProfileDropdown />}
    </div>
  );
}
