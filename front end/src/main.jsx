import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AuthProvider from './context/AuthContext';
import { BrowserRouter as Router } from "react-router-dom";
import '../src/assets/tailwind.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>    
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </React.StrictMode>,
)