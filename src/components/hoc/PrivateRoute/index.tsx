import React from 'react';
import {Navigate} from 'react-router-dom';
import {HOME_ROUTE} from "../../../routes";

interface Props {
  component: any
}

const PrivateRoute: React.FC<Props> = ({component}) => {
  const isAuth = false;

  if (!isAuth) {
    return <Navigate to={HOME_ROUTE}/>;
  }
  return component
};

export default PrivateRoute;