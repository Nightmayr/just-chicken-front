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
            console.log(this.state.restaurant);
        });
    }

   

    render() {

        const Restaurants = this.state.restaurant.map((item, i) => (
            <a href="/restaurant/id">
            <div class="card">
                <img src={require("./"+item.photo)} class="card-img-top" alt="..." />
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

