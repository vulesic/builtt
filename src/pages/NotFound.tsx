import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const storedUserData = localStorage.getItem('userData');
  const userData = storedUserData ? JSON.parse(storedUserData) : null;

  useEffect(() => {
    if (!userData) {
      navigate('/');
    }
  }, [userData, navigate]);

  return (
    <div className='NotFound'>
      Stranica ne postoji!
    </div>
  )
};

export default NotFound;
