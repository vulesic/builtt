import React, { useState } from "react";
import TextInput from "./TextInput";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const validateEmail = (input: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(input) && input === 'test@test.com';
    setIsEmailError(!isValid);
    return isValid;
  };

  const validatePassword = (input: string) => {
    const isValid = input === "test@test.com";
    setIsPasswordError(!isValid);
    return isValid;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    validatePassword(password)
    if (email && validateEmail(email) && validatePassword(password)) {
      dispatch(loginSuccess(email));
      navigate('/shop');
    }
  };

  return (
    <div className="flex justify-center">
      <form className="flex flex-col w-full sm:w-[300px] md:w-[460px] px-5" onSubmit={handleSubmit}>
        <h3 className="font-bold text-xl mb-10">Prijavi se na svoj nalog</h3>
        <TextInput
          label="E-mail adresa"
          value={email}
          type={"text"}
          handleFunction={handleEmailChange}
          error={isEmailError}
          autoComplete="off"
        />
        <TextInput
          label="Upišite šifru"
          value={password}
          type={"password"}
          handleFunction={handlePasswordChange}
          error={isPasswordError}
          autoComplete="new-password"
        />
        <button
          type="submit"
          className="text-center text-white text-lg font-['Arial'] leading-[18px] bg-black rounded-[100px] py-3 mt-20"
        >
          Prijavi se na nalog
        </button>
      </form>
    </div>
  );
};

export default Login;
