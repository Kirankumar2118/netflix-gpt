import { useSelector } from "react-redux";

const Genres = ({ data = [] }) => {
  const { Generes } = useSelector((state) => state.home);

  return (
    <div className="flex flex-wrap justify-end gap-1">
      {data.map((id) => {
        const genre = Generes?.[id];

        if (!genre) return null;

        return (
          <span
            key={id}
            className="
              rounded-md
              bg-red-600
              px-2
              py-1
              text-[10px]
              font-medium
              text-white
              whitespace-nowrap
              shadow-md
              transition
              duration-200
              hover:bg-red-700
            "
          >
            {genre.name}
          </span>
        );
      })}
    </div>
  );
};

export default Genres;
