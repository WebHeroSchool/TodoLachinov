import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< Updated upstream
import { element } from './App';

=======
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

import { element } from './App';

>>>>>>> Stashed changes
ReactDOM.render(element, document.getElementById('root'));