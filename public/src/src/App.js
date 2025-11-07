import React, { useState } from 'react';
import logo from './logo.png';

function App() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const login = () => {
    if (email === 'admin@offbeateducation.co.uk' && pass === 'Offbeat2025!') {
      alert('SUCCESS: Logged in as Admin! Full app loading...');
    } else {
      alert('Demo: admin@offbeateducation.co.uk / Offbeat2025!');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial' }}>
      <img src={logo} alt="Offbeat Education" style={{ width: 120, marginBottom: 20 }} />
      <h1 style={{ color: '#1a1a1a' }}>Offbeat Education</h1>
      <p style={{ color: '#00C4B4', fontStyle: 'italic' }}>Alternative Provision</p>
      
      <input 
        placeholder="Email" 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
        style={{ display: 'block', margin: '10px auto', padding: 12, width: 320, border: '1px solid #ccc', borderRadius: 8 }} 
      />
      <input 
        placeholder="Password" 
        type="password" 
        value={pass} 
        onChange={e => setPass(e.target.value)} 
        style={{ display: 'block', margin: '10px auto', padding: 12, width: 320, border: '1px solid #ccc', borderRadius: 8 }} 
      />
      <button 
        onClick={login} 
        style={{ 
          padding: '12px 32px', 
          fontSize: 16, 
          background: '#00C4B4', 
          color: 'white', 
          border: 'none', 
          borderRadius: 8,
          cursor: 'pointer'
        }}
      >
        Login
      </button>
      <p style={{ marginTop: 20, fontSize: 12, color: '#666' }}>
        Demo: admin@offbeateducation.co.uk / Offbeat2025!
      </p>
    </div>
  );
}

export default App;
