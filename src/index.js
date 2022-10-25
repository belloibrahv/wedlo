import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import serverConfig from './mock-api/server';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

if (process.env.NODE_ENV === 'development') {
  serverConfig({ environment: 'development' });
}

root.render(
    <React.StrictMode>
       <Router basename='/'>
         <App />
       </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
