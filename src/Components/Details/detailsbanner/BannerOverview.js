const BannerOverview = ({ overview }) => {
  if (!overview) return null;

  return (
    <div className="mt-8">
      <h2 className="mb-3 text-2xl font-semibold text-white">Overview</h2>

      <p className="max-w-4xl leading-7 text-gray-300">{overview}</p>
    </div>
  );
};

export default BannerOverview;
