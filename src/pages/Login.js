import React from 'react';
import logo from '../imgs/logo.png'
import { Route } from 'react-router';
import Cadastro from './Cadastro';

const Login = () => {
  return (
    <div className="login--container">
      <img src={logo} alt="logo" />
      <div className="login--box">
        <div className="login--info-box">
          <Cadastro />
        </div>
      </div>
    </div>
  );
}

export default Login;
