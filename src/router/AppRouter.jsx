import { Route, Switch, Redirect } from 'react-router-dom';
import BookDetail from '../components/BookDetail';
import Header from '../components/Header';
import BooksList from '../components/BooksList';
import { useSelector } from 'react-redux';

function AppRouter() {
  const { books } = useSelector(state => state.booksReducer);

  return (
    <Switch>
      <Route component={BooksList} path="/" exact />
      {books.length > 0 ? <Route component={BookDetail} path="/book/:bookID" exact /> : null}
      <Redirect to="/" />
    </Switch>
  );
}
export default AppRouter;
