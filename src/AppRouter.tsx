import Header from 'components/common/Header';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DefaultLayout from 'components/layout/DefaultLayout';
import PrivateRoute from 'components/authGuard/PrivateRoute';
const Home = lazy(() => import('./pages/Home/Home'));
const Help = lazy(() => import('./pages/Help/Help'));
const Login = lazy(() => import('./pages/login/Login'));
const Checkout = lazy(() => import('./pages/checkout/Checkout'));
const ProductDetail = lazy(() => import('pages/productDetail/ProductDetail'));
const Dashboard = lazy(() => import('./admin/layout/DefaultLayout'));
const Page404 = lazy(() => import('admin/views/pages/page404/Page404'));
const Page500 = lazy(() => import('admin/views/pages/page500/Page500'));

const AppRouter = () => {
  return (
    <div>
      <Suspense fallback={<p>loading.......</p>}>
        <Router>
          {/* { !location.pathname.includes('/dashboard') && <Header /> }  // we cant use locatiion here ,
         so, to show navbar(header) conditionally , simply create a HOC (named DefaultLayout),write the extra thing(location) there
         and send this switch component . Then use that HOC here , so we will have both location and switch in
         this file */}
          <DefaultLayout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/help" component={Help} />
              <Route path="/product/:id" component={ProductDetail} />
              <Route path="/checkout/" component={Checkout} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute path="/dashboard" Component={Dashboard} />
              <Route path="/404" component={Page404} />
              <Route path="/500" component={Page500} />
            </Switch>
          </DefaultLayout>
        </Router>
      </Suspense>
    </div>
  );
};

export default AppRouter;
