import { Settings, CircleHelp, LogOut } from "lucide-react";
import { signOut } from "firebase/auth";

import MenuItem from "./MenuItem";
import { auth } from "../../Utils/Firebase";
import { useNavigate } from "react-router-dom";

export default function ProfileDropdown() {
  const navigate = useNavigate();
  const onSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div
      className="
      absolute
      right-0
      mt-4
      w-60
     bg-[rgba(0,0,0,0.75)]
      border
      border-gray-700
      rounded
      text-white
      shadow-xl
      animate-in
      fade-in
      zoom-in
    "
    >
      <MenuItem icon={<Settings size={20} />} text="Account" />

      <MenuItem icon={<CircleHelp size={20} />} text="Help Centre" />

      <hr className="border-gray-700 my-2" />

      <MenuItem
        icon={<LogOut size={20} />}
        text="Sign out of Netflix"
        onClick={onSignOut}
      />
    </div>
  );
}
