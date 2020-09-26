import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import NavBar from '../Components/Navbar/Navbar';
import Productlist from '../Components/ProductList/Productlist';
import Order from '../Components/Order/Order'
import Home from '../Components/Home/Home';
import Confirmation from '../Components/Confirmation/Confirmation';
import NotFound from '../Components/NotFound/NotFound';
import ProductsDetails from '../Components/ProductDetails/ProductsDetails';

export const AppRoutes = () => {

    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/home" component={Home} />
                <Route exact path="/" component={Home} >
                    <Redirect to="/home" />
                </Route>
                <Route exact path="/productlist/:type" component={Productlist} />
                <Route exact path="/product/:id" component={ProductsDetails} />
                <Route exact path="/order" component={Order} />
                <Route exact path="/confirmation" component={Confirmation} />
                <Route component={NotFound} />
            </Switch>
        </>
    )
}
