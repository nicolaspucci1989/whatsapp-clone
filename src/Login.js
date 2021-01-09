import React from 'react';

import { Button } from "@material-ui/core";
import './Login.css'
import { auth, provider } from "./firebase";

const Login = () => {

  const signIn = () => {
    auth.signInWithPopup(provider)
      .then(res => console.log(res))
      .catch(err => alert(err.message))
  }

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt=""/>
        <div className="login__text">
          <h1>Sign in to whatsapp</h1>
        </div>
        <Button onClick={signIn}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
