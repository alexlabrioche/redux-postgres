import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Private = ({ logoutUser }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/secret')
      .then((res) => res.text())
      .then((res) => setMessage(res));
  }, []);

  const logout = () => {
    logoutUser();
  };

  return (
    <div>
      <h1>Je suis privé</h1>
      <p>{message}</p>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};
Private.propTypes = {
  isAuth: PropTypes.bool,
  logoutUser: PropTypes.func.isRequired,
};

export default Private;
