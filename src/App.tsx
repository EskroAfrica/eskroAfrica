import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import SignInModal from './components/SignInModal';

function App() {
  return (
    <div className="">
      <Home />
      <SignInModal /> 
    </div>
  );
}

export default App;
