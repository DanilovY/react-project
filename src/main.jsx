// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { LoginForm } from './components/App.jsx';
import ReactDOM from 'react-dom/client';
import { UserContext } from './userContext.js'; //context
import './index.css';
import { App } from './components/App.jsx';
import 'modern-normalize';

const initialUserValue = {
  username: 'Mango',
  isLoggedIn: true,
};

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <UserContext value={initialUserValue}>
//     <App />
//   </UserContext>
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContext.Provider value={initialUserValue}>
    <App />
  </UserContext.Provider>
);
