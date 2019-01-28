import React, { Component } from 'react';
import axios from 'axios';


class Show extends Component{

    constructor(props) {
        super(props);
        this.state = { 
            restaurant: ""
         };
    }

    handleBack = () => {
        this.props.history.push('/restaurant');
    }

    // handleClick = (item) => {
    //     this.props.history.push('/restaurant/' + item.id);
    // }


    componentDidMount() {
        axios({
            method: "get",
            url: "http://localhost:8080/just-chicken/api/restaurant/getRestaurant/"+this.props.match.params.id,
            responseType: "json"
        }).then(response => {
            this.setState({ restaurant: response.data });
            console.log(this.state.restaurant);
        });
    }


    render() {
           


        return (
            <div>
                 <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <p class="lead">{this.state.restaurant.name}</p>
                        <div class="list-group">
                            <li class="list-group-item">Info 1</li>
                            <li class="list-group-item">Info 1</li>
                            <li class="list-group-item">Info 1</li>
                        </div>
                    </div>
                    <div class="jumbotron">

                    </div>
                </div>
            </div>
            </div>
            
        );
    }
}

export default Show;