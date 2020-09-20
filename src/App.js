import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Footer from './Components/Footer/Footer/Footer';
import Header from './Components/Header/Header';
import {AppRoutes} from './Routes/Routes'


import './App.css';

function App() {
  return (
    <div className="App" >
      <Header />

        <Router>
          <AppRoutes />
        </Router>

      <Footer />
    </div>
  );
}

export default App;