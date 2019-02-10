import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import axios from 'axios';
import Show from './pages/Show';
import * as constants from "./Constants.js"


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
            url: constants.externalIP+"/just-chicken/api/restaurant/getAllRestaurants",
            responseType: "json"
        }).then(response => {
            this.setState({ restaurant: response.data });
            console.log(this.state.restaurant);
        });
    }

    render() {

        const Restaurants = this.state.restaurant.map((item, i) => (
            <a href={"restaurant/"+item.id}>
                <div class="card">
                    <div id="photoframe">
                        {item.photo.indexOf("http") > -1 ? (
                            <img src={item.photo} class="card-img-top" alt="..." />
                        ) : (
                            <img src={require("./"+item.photo)} class="card-img-top" alt="..." />
                        )}
                    </div>
                <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                        <p class="card-text">{item.address}</p>
                    {/* <a href="/" class="btn btn-primary">MORE INFO</a> */}
                </div>
            </div>
        </a>
        ));

        return (
            <Router>
                <div class="list-of-cards">
                    {Restaurants}
                </div>
            </Router>
        );
    }
    // 
}

export default RestaurantCard;

