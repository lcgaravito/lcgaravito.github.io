import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cover from './components/Cover';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Cover test= {true} />
        <h3>Website under construction</h3>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/luis-garavito/"
          target="_blank"
          rel="noopener noreferrer"
        >
          See my Linkedin
        </a>
      </header>
    </div>
  );
}

export default App;
