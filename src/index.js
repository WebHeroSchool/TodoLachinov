import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< Updated upstream
import { element } from './App';

ReactDOM.render(element, document.getElementById('root'));
=======
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
>>>>>>> Stashed changes
