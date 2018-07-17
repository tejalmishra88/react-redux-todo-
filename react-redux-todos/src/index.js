import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';  //connect react with redux  
import store from './store';  

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
