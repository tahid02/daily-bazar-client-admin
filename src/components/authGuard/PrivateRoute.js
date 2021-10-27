import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { AppState } from 'redux/reducers/rootReducer';

// eslint-disable-next-line react/prop-types
function PrivateRoute({ Component, ...rest }) {
  const { data } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        data ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
