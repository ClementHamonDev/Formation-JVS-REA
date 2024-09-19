import React from 'react';

function MessageDisplay(props) {
    return (
      <div>
        {props.isLoggedIn && <h1>Bienvenue !</h1>}
      </div>
    );
  }

export default MessageDisplay;