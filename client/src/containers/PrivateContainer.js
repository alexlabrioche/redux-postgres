import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Private from '../components/private';
import { logoutAction } from '../actions';

export default function AppContainer() {
  const dispatch = useDispatch();
  const logoutUser = useCallback(() => dispatch(logoutAction()), [dispatch]);
  return <Private logoutUser={logoutUser} />;
}
