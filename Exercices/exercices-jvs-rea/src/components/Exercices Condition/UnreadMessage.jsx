import React from 'react';

function UnreadMessages(props) {
    return (
      <div>
        {props.unreadCount > 0
          ? `Vous avez ${props.unreadCount} messages non lus`
          : "Aucun nouveau message"}
      </div>
    );
  }

export default UnreadMessages;