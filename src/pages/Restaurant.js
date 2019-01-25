import React, { Component } from 'react';
import Jumbotron from '../Jumbotron';
import RestaurantCard from '../RestaurantCard';

class Restaurant extends Component{
    render() {
        return (
            <div class="container">
                <Jumbotron />
                <RestaurantCard />
            </div>
        );
    }
}

export default Restaurant;