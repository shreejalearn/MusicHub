import React from 'react';
import { Route, useNavigate } from 'react-router-dom';

function ProtectedRoute({ user, component: Component, ...rest }) {
  const navigate = useNavigate();

  return (
    <Route
      {...rest}
      element={user ? <Component user={user} /> : navigate('/login')}
    />
  );
}

export default ProtectedRoute;
