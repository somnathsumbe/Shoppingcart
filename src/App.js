import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer/Footer';
import Header from './Components/Header/Header';
import MainRouting from './Routing/MainRouting';



function App() {
  return (
    <div className="App">
      <Header />
      <MainRouting />
      <Footer />
    </div>
  );
}

export default App;
