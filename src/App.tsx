import React from 'react';
import './App.css';
import Header from './components/Header';
// import Register from './components/Register';
import OpdRegistration from './components/OpdRegistration/OpdRegistration';

function App() {
  return (
    <div>
      <Header />
      {/* <Register /> */}
      <OpdRegistration />
    </div>
  );
}

export default App;
