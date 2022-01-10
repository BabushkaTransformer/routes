import React from 'react';
import {routes} from "../routes";
import {Route, Routes} from "react-router";
import PrivateRoute from "./hoc/PrivateRoute";


const AppRouter = () => {

  return (
    <Routes>
      {routes.map((route) => {
        const component = route.isPrivate ? <PrivateRoute {...route} /> : route.component;
        return <Route key={route.path} path={route.path} element={component}/>
      })}
    </Routes>
  );
};

export default AppRouter;
