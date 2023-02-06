import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../hooks';

export const PrivateRoute = (props: any) => {
  const { children } = props;
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};
