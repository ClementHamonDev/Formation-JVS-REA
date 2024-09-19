import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nom:', name);
    console.log('Email:', email);
    console.log('Message:', message);
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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

export default ContactForm;
