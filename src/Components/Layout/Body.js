import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";

import { auth } from "../../Utils/Firebase";
import { fetchDatafromApi } from "../../Utils/Api";
import { appRouter } from "./Routes";

import { addUser, removeUser } from "../../Redux/Userslice";
import { getApiConfiguration, getGenerse } from "../../Redux/HomeSlice";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchApiConfiguration = async () => {
      const data = await fetchDatafromApi("/configuration");

      dispatch(
        getApiConfiguration({
          backdrop: data.images.secure_base_url + "original",
          poster: data.images.secure_base_url + "original",
          profile: data.images.secure_base_url + "original",
        }),
      );
    };

    const genresCall = async () => {
      const endpoints = ["tv", "movie"];

      const responses = await Promise.all(
        endpoints.map((type) => fetchDatafromApi(`/genre/${type}/list`)),
      );

      const allGenres = {};

      responses.forEach(({ genres }) => {
        genres.forEach((genre) => {
          allGenres[genre.id] = genre;
        });
      });

      dispatch(getGenerse(allGenres));
    };

    fetchApiConfiguration();
    genresCall();
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await user.reload();

        const updatedUser = auth.currentUser;

        if (!updatedUser) return;

        dispatch(
          addUser({
            uid: updatedUser.uid,
            email: updatedUser.email,
            displayName: updatedUser.displayName,
            photoURL: updatedUser.photoURL,
          }),
        );
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
