export const checkValidData = (email, password) => {
  const isemailisvaild =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);

  const ispasswordisvaild =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])\S{8,}$/.test(password);

  if (!isemailisvaild) return "Please enter a valid email address.";
  if (!ispasswordisvaild)
    return "Password must be at least 8 characters and include an uppercase letter, lowercase letter, number, and special character.";

  return null;
};
