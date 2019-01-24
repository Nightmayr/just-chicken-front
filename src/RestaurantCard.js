import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Show from './Show';


class RestaurantCard extends Component {
    render() {
        return (
            <Router>

                <div class="list-of-cards">
                    <Link to="/restaurant/id">
                        <div class="card">
                            <img src={require("./logo.png")} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">[RESTAURANT NAME]</h5>
                                <p class="card-text">[RESTAURANT INFO]</p>
                                {/* <a href="/" class="btn btn-primary">MORE INFO</a> */}
                            </div>
                        </div>
                    </Link>
                    <div class="card">
                        <img src="" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">[RESTAURANT NAME]</h5>
                            <p class="card-text">[RESTAURANT INFO]</p>
                            <a href="/ID" class="btn btn-primary">MORE INFO</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src="" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">[RESTAURANT NAME]</h5>
                            <p class="card-text">[RESTAURANT INFO]</p>
                            <a href="/ID" class="btn btn-primary">MORE INFO</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src="" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">[RESTAURANT NAME]</h5>
                            <p class="card-text">[RESTAURANT INFO]</p>
                            <a href="/ID" class="btn btn-primary">MORE INFO</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src="" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">[RESTAURANT NAME]</h5>
                            <p class="card-text">[RESTAURANT INFO]</p>
                            <a href="/ID" class="btn btn-primary">MORE INFO</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src="" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">[RESTAURANT NAME]</h5>
                            <p class="card-text">[RESTAURANT INFO]</p>
                            <a href="/ID" class="btn btn-primary">MORE INFO</a>
                        </div>
                    </div>

                    <Route exact path="/restaurant/id" component={Show} />
                </div>
            </Router>
        );
    }
    // 
}

export default RestaurantCard;

