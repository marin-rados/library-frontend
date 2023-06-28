import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'

function LogoutForm() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');

    navigate('/welcome');
  };

  return (
    <form onSubmit={handleLogout}>
      <button className='logout-button' type="submit">Logout</button>
    </form>
  );
}

export default LogoutForm;
