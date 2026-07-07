import React from "react";

const LoginForm = ({
  isSignIn,
  name,
  email,
  password,
  errormessage,
  toggleSignInForm,
  handleButtonClick,
}) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="
            w-full
            max-w-[450px]
            bg-[rgba(0,0,0,0.55)]
            backdrop-blur-sm
            rounded
            px-6
            py-8
            sm:px-10
            sm:py-12
            md:px-16
            md:py-14
          "
    >
      <h1 className="text-white text-3xl md:text-4xl font-bold mb-8">
        {isSignIn ? "Sign In" : "Sign Up"}
      </h1>
      {!isSignIn && (
        <input
          required
          ref={name}
          type="text"
          placeholder="Username"
          className="w-full h-14 px-4 mb-4 rounded bg-[#2f2f2f] border border-[#5a5a5a] text-white placeholder:text-gray-400 focus:outline-none focus:border-white"
        />
      )}
      <input
        ref={email}
        type="text"
        placeholder="Email"
        className="w-full h-14 px-4 mb-4 rounded bg-[#2f2f2f] border border-[#5a5a5a] text-white placeholder:text-gray-400 focus:outline-none focus:border-white"
      />

      <input
        ref={password}
        type="password"
        placeholder="Password"
        className="w-full h-14 px-4 mb-6 rounded bg-[#2f2f2f] border border-[#5a5a5a] text-white placeholder:text-gray-400 focus:outline-none focus:border-white"
      />

      <button
        className="w-full h-12 rounded bg-[#E50914] hover:bg-[#C11119] text-white font-semibold transition"
        onClick={handleButtonClick}
      >
        {isSignIn ? "Sign In" : "Sign Up"}
      </button>

      <p className="text-[#e87c03] text-sm mt-1 mb-3">{errormessage}</p>

      <div className="flex justify-between items-center mt-6 text-sm text-gray-300">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="accent-white w-4 h-4" />
          Remember me
        </label>

        <p className="hover:underline cursor-pointer">Need help?</p>
      </div>

      <p className="mt-10 text-gray-400">
        {isSignIn ? "New to Netflix? " : "already registerd."}
        <span
          className="text-white font-medium hover:underline cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignIn ? "Sign up now." : "Sign in now."}
        </span>
      </p>
    </form>
  );
};

export default LoginForm;
