import React from 'react';
import './App.css';
import logo from './img/Outlaw Logo_fundo_transparente.png'; // Certifique-se de que o logo está na pasta public
import instagramLogo from './img/instagram_logo.png'; // Logo do Instagram
import whatsappLogo from './img/wpp_logo.png'; // Logo do WhatsApp

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Outlaw Motorsport Logo" className="logo" />
        <h1></h1>
        <p></p>
        <div className="logos">
          <a
            href="https://www.instagram.com/outlaw.motorsport"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramLogo} alt="Instagram Logo" className="social-logo" />
          </a>
          <a
            href="https://wa.me/5519983161709"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsappLogo} alt="WhatsApp Logo" className="social-logo" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
