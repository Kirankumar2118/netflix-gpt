import { useState } from "react";

const useDetailsBanner = () => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const toHoursAndMinutes = (minutes) => {
    if (!minutes) return "N/A";

    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    return `${hours}h${mins ? ` ${mins}m` : ""}`;
  };

  return {
    show,
    setShow,
    videoId,
    setVideoId,
    toHoursAndMinutes,
  };
};

export default useDetailsBanner;
