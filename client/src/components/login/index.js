import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
  console.log('login', props);
  const [values, setValues] = useState({ email: '', password: '' });

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setValues((oldState) => ({ ...oldState, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.logginAction(values);
    // fetch("/api/auth/login", {
    //   method: "POST",
    //   body: JSON.stringify(values),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    //   .then(res => {
    //     console.log(res.status);
    //     if (res.status === 200) {
    //       props.history.push("/");
    //     } else {
    //       const error = new Error(res.error);
    //       throw error;
    //     }
    //   })
    //   .catch(err => {
    //     console.error(err);
    //     alert("Error logging in please try again");
    //   });
  };

  return (
    <>
      {props.user && props.isAuth && <Redirect to="/" />}
      <form onSubmit={onSubmit}>
        <h1>Login Below!</h1>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={values.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={values.password}
          onChange={handleInputChange}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Login;
