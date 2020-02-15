import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Login from './../components/login';
import { logginAction } from '../actions';

export default function LoginContainer() {
  const dispatch = useDispatch();
  const { user, isAuth } = useSelector((s) => s.login);

  const loginUser = useCallback((data) => dispatch(logginAction(data)), [dispatch]);

  return <Login loginUser={loginUser} user={user} isAuth={isAuth} />;
}
