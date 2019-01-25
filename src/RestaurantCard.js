import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import axios from 'axios';
import Show from './pages/Show';



class RestaurantCard extends Component {

    constructor(props) {
        super(props);

        this.state = { restaurant: [] };
    }

    handleBack = () => {
        this.props.history.push('/');
    }

    handleClick = (item) => {
        this.props.history.push('/restaurant/' + item.id);
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "http://localhost:8080/just-chicken/api/restaurant/getAllRestaurants",
            responseType: "json"
        }).then(response => {
            this.setState({ restaurant: response.data });
            console.log(response.data);
        })
    }

    render() {
        return (
            <Router>

                <div class="list-of-cards">
                    <a href="/restaurant/id">
                        <div class="card">
                            <img src={require("./logo.png")} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{this.state.restaurant}</h5>
                                <p class="card-text">[RESTAURANT INFO]</p>
                                {/* <a href="/" class="btn btn-primary">MORE INFO</a> */}
                            </div>
                        </div>
                    </a>
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

                </div>
            </Router>
        );
    }
    // 
}

export default RestaurantCard;

