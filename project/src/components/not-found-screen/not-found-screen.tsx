import {Link} from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <section>
      <h1>404. PAGE NOT FOUND</h1>
      <Link to="/">Go to main page</Link>
    </section>
  );
}

export default NotFoundScreen;
