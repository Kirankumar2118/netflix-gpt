const CrewSection = ({ label, people = [] }) => {
  if (!Array.isArray(people) || people.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 border-b border-white/10 py-4">
      <span className="font-semibold text-white">{label}:</span>

      <span className="text-gray-300">
        {people.map((person, index) => (
          <span key={person.id || index}>
            {person.name}
            {index !== people.length - 1 && ", "}
          </span>
        ))}
      </span>
    </div>
  );
};

const BannerCrew = ({ director, writer, creators }) => {
  return (
    <>
      <CrewSection label="Director" people={director} />
      <CrewSection label="Writer" people={writer} />
      <CrewSection label="Creator" people={creators} />
    </>
  );
};

export default BannerCrew;
