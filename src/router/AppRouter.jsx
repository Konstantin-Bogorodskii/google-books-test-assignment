import { Route, Switch, Redirect } from 'react-router-dom';
import BookDetail from '../components/BookDetail';
import Header from '../components/Header';
import BooksList from '../components/BooksList';

function AppRouter() {
  return (
    <Switch>
      <Route component={BooksList} path="/" exact />
      <Route component={BookDetail} path="/book/:bookID" exact />
      <Redirect to="/" />
    </Switch>
  );
}
export default AppRouter;
