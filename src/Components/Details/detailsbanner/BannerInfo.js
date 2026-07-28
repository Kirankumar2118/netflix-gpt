import dayjs from "dayjs";

const BannerInfo = ({ data, toHoursAndMinutes }) => {
  return (
    <div className="mt-6 space-y-4 border-t border-b border-white/10 py-4">
      {data?.status && <InfoItem label="Status" value={data.status} />}

      {(data?.release_date || data?.first_air_date) && (
        <InfoItem
          label="Release Date"
          value={dayjs(data?.release_date || data?.first_air_date).format(
            "MMM D, YYYY",
          )}
        />
      )}

      {data?.runtime && (
        <InfoItem label="Runtime" value={toHoursAndMinutes(data.runtime)} />
      )}
    </div>
  );
};

const InfoItem = ({ label, value }) => (
  <div className="flex flex-wrap gap-2 text-gray-300">
    <span className="font-semibold text-white">{label}:</span>
    <span>{value}</span>
  </div>
);

export default BannerInfo;
