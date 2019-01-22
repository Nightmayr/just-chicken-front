import React, { Component } from 'react';

class RestaurantCard extends Component{
    render() {
        return (
            <div class="card">
                <img src="" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">[RESTAURANT NAME]</h5>
                    <p class="card-text">[RESTAURANT INFO]</p>
                    <a href="/ID" class="btn btn-primary">MORE INFO</a>
                </div>
            </div>
            )
        }
        // 
}
    
export default RestaurantCard;
    
