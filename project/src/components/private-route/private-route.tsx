import {Route, Redirect, RouteProps} from 'react-router-dom';
import {AppRoute} from '../../const';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {exact, path, render} = props;
  const isAuthorized = false;

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        isAuthorized ? render() : <Redirect to={AppRoute.SignIn}/>
      )}
    />
  );
}

export default PrivateRoute;
