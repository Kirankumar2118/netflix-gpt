const ExploreSkeleton = () => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {Array.from({ length: 18 }).map((_, index) => (
        <div key={index} className="animate-pulse">
          {/* Poster */}
          <div className="aspect-[2/3] w-full rounded-lg bg-zinc-800" />

          {/* Title */}
          <div className="mt-3 h-4 w-3/4 rounded bg-zinc-800" />

          {/* Rating */}
          <div className="mt-2 h-3 w-1/2 rounded bg-zinc-700" />
        </div>
      ))}
    </div>
  );
};

export default ExploreSkeleton;
