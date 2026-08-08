import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Utils/Firebase";
import { checkValidData } from "../../Utils/Validate";
import { PHOTOURL } from "../../Utils/constant";
import LoginForm from "./LoginForm";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignIn((prev) => !prev);
    setErrorMessage("");
  };

  const handleButtonClick = async () => {
    const message = checkValidData(email.current.value, password.current.value);

    setErrorMessage(message);

    if (message) return;

    try {
      if (!isSignIn) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value,
        );

        await updateProfile(userCredential.user, {
          displayName: name.current.value,
          photoURL: PHOTOURL,
        });

        // Refresh the user so onAuthStateChanged receives updated profile
        await userCredential.user.reload();
      } else {
        await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value,
        );
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <LoginForm
      isSignIn={isSignIn}
      name={name}
      email={email}
      password={password}
      errormessage={errorMessage}
      toggleSignInForm={toggleSignInForm}
      handleButtonClick={handleButtonClick}
    />
  );
};

export default Login;
