import ContentWrapper from "../../ContentWrapper";

const BannerSkeleton = () => {
  return (
    <div className="animate-pulse pt-24">
      <ContentWrapper>
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          {/* Poster Skeleton */}
          <div className="aspect-[2/3] w-full rounded-xl bg-neutral-800 md:max-w-[350px]" />

          {/* Content Skeleton */}
          <div className="flex-1 space-y-5">
            <div className="h-10 w-3/4 rounded-full bg-neutral-800" />

            <div className="h-6 w-1/2 rounded-full bg-neutral-800" />

            <div className="h-8 w-40 rounded-full bg-neutral-800" />

            <div className="h-20 w-full rounded-xl bg-neutral-800" />

            <div className="h-6 w-2/3 rounded-full bg-neutral-800" />

            <div className="h-6 w-1/2 rounded-full bg-neutral-800" />

            <div className="h-6 w-3/4 rounded-full bg-neutral-800" />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default BannerSkeleton;
