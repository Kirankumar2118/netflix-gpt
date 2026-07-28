import React from "react";
import ReactPlayer from "react-player";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        show ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        onClick={hidePopup}
        className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Video Player */}
      <div
        className={`relative aspect-video w-[90%] max-w-4xl bg-black transition-transform duration-300 ${
          show ? "scale-100" : "scale-50"
        }`}
      >
        <button
          onClick={hidePopup}
          className="absolute -top-8 right-0 text-sm font-medium text-white transition-colors hover:text-red-500"
        >
          Close
        </button>

        <ReactPlayer
          src={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default VideoPopup;
