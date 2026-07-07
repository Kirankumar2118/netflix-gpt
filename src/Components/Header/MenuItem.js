export default function MenuItem({ icon, text, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-4 px-5 py-3 hover:bg-white/10 cursor-pointer transition"
    >
      {icon}

      <span>{text}</span>
    </div>
  );
}
