import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import SignInModal from './components/Modals/SignInModal';
import SignUpModal from './components/Modals/SignUpModal';

function App() {
  return (
    <div className="">
      <Home />
      <SignInModal /> 
      <SignUpModal />
    </div>
  );
}

export default App;
