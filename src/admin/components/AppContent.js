// eslint-disable-next-line no-use-before-define
import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CContainer, CSpinner } from '@coreui/react';

// routes config
import routes from '../routes';
import { useSelector } from 'react-redux';

const AppContent = () => {
  // const { data } = useSelector((state) => state.auth);
  // const filteredRoute = routes.filter((route) =>
  //   route?.role.includes(data?.role)
  // );

  const { data } = useSelector((state) => state.auth);
  const filteredRoutes = routes.filter((route) =>
    route.role.includes(data?.data?.role)
  );
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Switch>
          {filteredRoutes.map((route, idx) => {
            // so, now if the user is merchant , then only merchant's route will be created
            // now, if the merchant try to go to user list in search bar by typing "dashboard/users", no page wont show,
            // route didn't event declared(created here) for that page
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <>
                      <route.component {...props} />
                    </>
                  )}
                />
              )
            );
          })}
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </Suspense>
    </CContainer>
  );
};

export default React.memo(AppContent);
