import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./Routes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Utils/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../Redux/Userslice";
import { fetchDatafromApi } from "../../Utils/Api";
import { getApiConfiguration, getGenerse } from "../../Redux/HomeSlice";

const Body = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    fetchApiConfiguration();
    genresCall();
  }, []);

  const fetchApiConfiguration = async () => {
    const data = await fetchDatafromApi("/configuration");
    const url = {
      backdrop: data.images.secure_base_url + "original",
      poster: data.images.secure_base_url + "original",
      profile: data.images.secure_base_url + "original",
    };
    dispatch(getApiConfiguration(url));
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDatafromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);

    data?.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });
    dispatch(getGenerse(allGenres));
  };
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
