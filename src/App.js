import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer/Footer';
import Header from './Components/Header/Header';
import ProductDetails from './Components/ProductDetails/ProductDetails.js/ProductDetails';
import Productlist from './Components/ProductList/Productlist';
import MainRouting from './Routing/MainRouting';



function App() {
  return (
    <div className="App">
      <Header />
      <MainRouting />
      {/* <Productlist /> */}
      <ProductDetails />
      <Footer />
    </div>
  );
}

export default App;
