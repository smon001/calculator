import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div  style={{ minHeight: '100vh', display: 'flex', backgroundColor: '#16181d' }}> 
      <Calculator />
    </div>
  );
}

export default App;
