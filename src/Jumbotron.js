import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class Jumbotron extends Component{
    render() {
        return (
            <Router>
                <div class="container" id="jumboContainer">
                    <div class="jumbotron">
                        <h1 class="display-4">Welcome to Just-Chicken</h1>
                        <p class="lead">View our curated list of fried chicken restaurants.</p>
                        <hr class="my-4"></hr>
                        <p>Don't see your favourite restaurant on the list?</p>
                        <Link class="btn btn-primary btn-lg" to="new" role="button">Add Restaurant</Link>
                    </div>
                    <Route exact path="/new" component={New} />
                </div>
            </Router>
        );
    }
}

export default Jumbotron;