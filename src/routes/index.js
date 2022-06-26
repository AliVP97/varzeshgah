import { Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import { DataEntry, Home, Login, Place } from "pages";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "services";
import { useState } from "react";

const Routes = () => {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("JWT") || auth.currentUser
  );

  onAuthStateChanged(auth, function (user) {
    if (user) {
      // User is signed in.
      setIsAuth(true);
      const {
        stsTokenManager: { accessToken, refreshToken, expirationTime },
      } = user;

      localStorage.setItem("JWT", accessToken);
      localStorage.setItem("rJWT", refreshToken);
      localStorage.setItem("expJWT", expirationTime);
    } else {
      // No user is signed in.
      setIsAuth(false);
      localStorage.clear();
    }
  });

  return (
    <RouterRoutes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path=":id" element={<Place />} />
        <Route
          path="dataEntry"
          element={isAuth ? <DataEntry /> : <Navigate to={"/login"} />}
        />
      </Route>
      <Route
        path="/login"
        element={isAuth ? <Navigate to={"/"} /> : <Login />}
      />
    </RouterRoutes>
  );
};

export default Routes;
