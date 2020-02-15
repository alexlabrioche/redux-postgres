import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/navbar';

export default function NavbarContainer() {
  const { isAuth } = useSelector((s) => s.login);
  return <Navbar isAuth={isAuth} />;
}
