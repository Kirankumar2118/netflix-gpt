import { useSelector } from "react-redux";
import ContentWrapper from "../ContentWrapper";
import avatar from "../../Assets/avatar.png";
import Img from "../Img";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);

  const Skeleton = () => (
    <div className="w-28 flex-shrink-0 text-center sm:w-36 md:w-44">
      <div className="mx-auto h-28 w-28 animate-pulse rounded-full bg-neutral-800 sm:h-36 sm:w-36 md:h-44 md:w-44" />

      <div className="mt-4 h-4 w-full animate-pulse rounded bg-neutral-800" />

      <div className="mx-auto mt-2 h-4 w-2/3 animate-pulse rounded bg-neutral-800" />
    </div>
  );

  return (
    <section className="mb-14">
      <ContentWrapper>
        <h2 className="mb-6 text-2xl font-semibold text-white">Top Cast</h2>

        {!loading ? (
          <div className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-2">
            {data?.map((item) => {
              const imgUrl = item?.profile_path
                ? url.profile + item.profile_path
                : avatar;

              return (
                <div
                  key={item.id}
                  className="w-28 flex-shrink-0 text-center sm:w-36 md:w-44"
                >
                  <div className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full sm:h-36 sm:w-36 md:mb-6 md:h-44 md:w-44">
                    <Img
                      src={imgUrl}
                      className="h-full w-full object-cover object-top transition duration-500 hover:scale-110"
                    />
                  </div>

                  <h3 className="truncate text-sm font-semibold text-white md:text-lg">
                    {item.name}
                  </h3>

                  <p className="mt-1 line-clamp-2 text-xs text-gray-400 md:text-sm">
                    {item.character}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex gap-5 overflow-hidden">
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} />
            ))}
          </div>
        )}
      </ContentWrapper>
    </section>
  );
};

export default Cast;
