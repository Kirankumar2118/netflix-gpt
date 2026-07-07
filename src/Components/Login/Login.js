import React, { useRef, useState } from "react";
import { checkValidData } from "../../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Utils/Firebase";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../Redux/Userslice";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [errormessage, seterrormessage] = useState("");
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
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
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL:
              "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg",
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
              navigate("/browse");
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
          const user = userCredential.user;
          navigate("/browse");

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
