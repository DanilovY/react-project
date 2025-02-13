import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './components/App.jsx';
// import { LoginForm } from './components/App.jsx';
import 'modern-normalize';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <LoginForm /> */}
  </StrictMode>
);
