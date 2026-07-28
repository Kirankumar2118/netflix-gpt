import Img from "../../Img";

const BannerBackdrop = ({ backdrop }) => {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <Img
          src={backdrop}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Top Fade */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 to-transparent" />

      {/* Side Vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
    </>
  );
};

export default BannerBackdrop;
