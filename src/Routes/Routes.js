import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import NavBar from '../Components/Navbar/Navbar';
import Productlist from '../Components/ProductList/Productlist';
//import ProductDetails from  '../Components/ProductDetails/ProductDetails.js';
import Order from '../Components/Order/Order'
import Home from '../Components/Home/Home';
import Confirmation from '../Components/Confirmation/Confirmation';
import NotFound from '../Components/NotFound/NotFound';

export const AppRoutes = () => {
  
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/home" component={Home} />
                <Route exact path="/" component={Home} >
                    <Redirect to="/home" />
                </Route>
                <Route exact path="/productList" component={Productlist} />
                {/* <Route path="/product/:productId" component={ProductDetails} /> */}
                <Route exact path="/order" component={Order} />
                <Route exact path="/confirmation" component={Confirmation} />
                <Route component={NotFound} />
            </Switch>
        </>
    )
}
