import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import withAuth from './withAuth';
import PropTypes from 'prop-types';
import NavbarContainer from './containers/NavbarContainer';
import LoginContainer from './containers/LoginContainer';
import privateContainer from './containers/PrivateContainer';
import HomeContainer from './containers/HomeContainer';
import useCountRenders from './hooks/useCountRenders';

const App = React.memo(({ getUser, user }) => {
  useEffect(() => {
    getUser();
  }, []);
  const renders = useCountRenders();
  console.info(`🕵️‍♂️ APP renders ${renders} times`);

  return (
    <>
      <h1>{user && user.email}</h1>
      <NavbarContainer />
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/secret" component={withAuth(privateContainer)} />
        <Route path="/login" component={LoginContainer} />
      </Switch>
    </>
  );
});

App.propTypes = {
  isAuth: PropTypes.bool,
  getUser: PropTypes.func.isRequired,
};

export default App;
