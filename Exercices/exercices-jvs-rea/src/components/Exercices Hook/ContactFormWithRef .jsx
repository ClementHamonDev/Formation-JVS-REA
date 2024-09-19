import React, { useRef } from 'react';

function ContactFormWithRef() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nom:', nameRef.current.value);
    console.log('Email:', emailRef.current.value);
    console.log('Message:', messageRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '300px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px'
    }}>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'flex', flexDirection: 'column' }}>
          Nom:
          <input
            type="text"
            ref={nameRef}
            style={{
              marginTop: '5px',
              padding: '5px',
              borderRadius: '3px',
              border: '1px solid #ccc'
            }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'flex', flexDirection: 'column' }}>
          Email:
          <input
            type="email"
            ref={emailRef}
            style={{
              marginTop: '5px',
              padding: '5px',
              borderRadius: '3px',
              border: '1px solid #ccc'
            }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'flex', flexDirection: 'column' }}>
          Message:
          <textarea
            ref={messageRef}
            style={{
              marginTop: '5px',
              padding: '5px',
              borderRadius: '3px',
              border: '1px solid #ccc',
              minHeight: '100px'
            }}
          />
        </label>
      </div>
      <button type="submit" style={{
        padding: '10px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer'
      }}>Envoyer</button>
    </form>
  );
}

export default ContactFormWithRef;
