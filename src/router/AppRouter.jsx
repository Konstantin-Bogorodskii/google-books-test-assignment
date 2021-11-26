import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../components/Home';
import BookDetail from '../components/BookDetail';

function AppRouter() {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={BookDetail} path="/book/:bookId" exact />
      <Redirect to="/" />
    </Switch>
  );
}
export default AppRouter;
