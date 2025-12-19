import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bulma/css/bulma.min.css';
import './main.css'
createRoot(document.getElementById('root')).render(
    <App />
)
