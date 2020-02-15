import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import App from '../App';
import { getUserAction } from '../actions';

export default function AppContainer() {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.login.user);

  const getUser = useCallback(() => dispatch(getUserAction()), [dispatch]);

  return <App getUser={getUser} user={user} />;
}
