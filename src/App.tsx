import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Cover from "./components/Cover";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Cover test={true} />
        <a
          className="App-link text-lg mb-4 text-blue-400 hover:text-blue-500"
          href="https://www.linkedin.com/in/luis-garavito/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="underline">See my Linkedin</span> 🚀
        </a>
        <h3 className="text-base">Website under construction</h3>
      </header>
    </div>
  );
}

export default App;
