import Header from 'components/common/Header';
import ProductDetail from 'components/home/ProductDetail';
import Checkout from 'pages/checkout/Checkout';
import Login from 'pages/login/Login';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home/Home'));
const Help = lazy(() => import('./pages/Help/Help'));
const AppRouter = () => {
  return (
    <div>
      <Suspense fallback={<p>loading.......</p>}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/help" component={Help} />
            <Route exact path="/login" component={Login} />
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/checkout/" component={Checkout} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
};

export default AppRouter;
