const ContentWrapper = ({ children, className = "" }) => {
  return (
    <div
      className={`
        mx-auto
        w-full
        max-w-screen-2xl
        px-4
        sm:px-6
        md:px-10
        lg:px-14
        xl:px-16
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
