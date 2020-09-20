import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import NavBar from '../Components/Navbar/Navbar';
import Productlist from '../Components/ProductList/Productlist';
import MainCarousal from '../Components/Carousal/MainCarousal';
export default class MainRouting extends Component {
    render() {
        return (
            <>
                <Router>
                    <React.Fragment>
                        <NavBar />
                        <Switch>
                            <Route exact={true} path="/" component={MainCarousal} />
                            <Route path="/productList" component={Productlist} />
                            <Route component={Error} />
                        </Switch>
                    </React.Fragment>
                </Router>
            </>
        )
    }
}
