import { useEffect, useRef, useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import { useSelector } from "react-redux";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const user = useSelector((store) => store.user);

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
        src={user?.photoURL}
        className="w-7 rounded cursor-pointer"
        alt="profileimage"
      />

      {open && <ProfileDropdown />}
    </div>
  );
}
