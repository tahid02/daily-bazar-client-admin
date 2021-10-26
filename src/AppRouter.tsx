import Header from 'components/common/Header';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
        
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/help" component={Help} />
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/checkout/" component={Checkout} />
            <Route exact path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/404" component={Page404} />
            <Route path="/500" component={Page500} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
};

export default AppRouter;
