import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './navbarScroll'; // Import the scroll handling script

ReactDOM.render(<App />, document.getElementById('root'));


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
