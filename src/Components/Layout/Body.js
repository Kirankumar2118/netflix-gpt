import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./Routes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../Redux/Userslice";

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
