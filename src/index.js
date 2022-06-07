import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// wrapping App with BrowserRouter
// BrowserRouter connects browser URL with React App, now we have all react-router features App component tree
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

