import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions';
import Home from '../components/home';

export default function HomeContainer() {
  const dispatch = useDispatch();

  const registerUserAction = useCallback((data) => dispatch(registerUser(data)), [dispatch]);

  return <Home registerUser={registerUserAction} />;
}
