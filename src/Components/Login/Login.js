import React, { useRef, useState } from "react";
import { checkValidData } from "../../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Utils/Firebase";
import LoginForm from "./LoginForm";
import { useDispatch } from "react-redux";
import { addUser } from "../../Redux/Userslice";
import { photoURL } from "../../Utils/constant";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [errormessage, seterrormessage] = useState("");
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setisSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    seterrormessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: photoURL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
            })
            .catch((error) => {
              seterrormessage(error.message);
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          seterrormessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          seterrormessage(errorMessage);
        });
    }
  };
  return (
    <LoginForm
      isSignIn={isSignIn}
      name={name}
      email={email}
      password={password}
      errormessage={errormessage}
      toggleSignInForm={toggleSignInForm}
      handleButtonClick={handleButtonClick}
    />
  );
};

export default Login;
