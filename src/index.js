import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import fb from './db';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
