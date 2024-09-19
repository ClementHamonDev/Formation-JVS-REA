import React from 'react';

function LoginButton(props) {
    return (
      <button>
        {props.isLoggedIn ? "Se déconnecter" : "Se connecter"}
      </button>
    );
  }

export default LoginButton;