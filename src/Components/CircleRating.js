import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleRating = ({ rating }) => {
  const ratingValue = Number(rating);

  const pathColor =
    ratingValue < 5 ? "#ef4444" : ratingValue < 7 ? "#f59e0b" : "#22c55e";

  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black p-1 shadow-lg md:h-12 md:w-12">
      <CircularProgressbar
        value={ratingValue}
        maxValue={10}
        text={ratingValue.toFixed(1)}
        styles={buildStyles({
          pathColor,
          textColor: "#ffffff",
          trailColor: "#374151",
          backgroundColor: "#000000",
          textSize: "30px",
          pathTransitionDuration: 0.5,
        })}
      />
    </div>
  );
};

export default CircleRating;
