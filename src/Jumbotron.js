import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
// import New from './pages/New';


class Jumbotron extends Component{
    render() {
        return (
            <Router>
                <div>
                <div class="container" id="jumboContainer">
                    <div class="jumbotron">
                        <h1 class="display-4">Welcome to Just-Chicken</h1>
                        <p class="lead">View our curated list of fried chicken restaurants.</p>
                        <hr class="my-4"></hr>
                        <p>Don't see your favourite restaurant on the list?</p>
                        <a class="btn btn-primary btn-lg" href="new" role="button">Add Restaurant</a>
                    </div>
                </div>
                {/* <Route exact path="/new" component={New} /> */}

                </div>
            </Router>
        );
    }
}

export default Jumbotron;