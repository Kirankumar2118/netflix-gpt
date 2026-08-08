const Spinner = ({ initial = false }) => {
  return (
    <div
      className={`flex w-full items-center justify-center gap-2 ${
        initial ? "min-h-[70vh]" : "h-32"
      }`}
    >
      <span className="h-3 w-3 animate-bounce rounded-full bg-red-600 [animation-delay:-0.3s]" />
      <span className="h-3 w-3 animate-bounce rounded-full bg-red-600 [animation-delay:-0.15s]" />
      <span className="h-3 w-3 animate-bounce rounded-full bg-red-600" />
    </div>
  );
};

export default Spinner;
