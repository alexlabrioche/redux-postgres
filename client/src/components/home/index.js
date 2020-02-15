import React, { useState, useEffect } from 'react';

const Home = ({ registerUser }) => {
  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({ email: '', pasword: '' });

  useEffect(() => {
    fetch('/api/home')
      .then((res) => res.text())
      .then((res) => setMessage(res));
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('              form', form);
    registerUser(form);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  return (
    <div>
      <h1>{message ? message : 'Chargement...'}</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="email" name="email" value={form.email} onChange={handleFormChange} />
        <input type="password" name="password" value={form.password} onChange={handleFormChange} />
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default Home;
