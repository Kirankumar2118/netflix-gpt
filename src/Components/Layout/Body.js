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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          }),
        );
      } else {
        dispatch(removeUser());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
