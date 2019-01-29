import React, { Component } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import '../ShowPage.css'


class Show extends Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurant: ""
        };

        axios({
            method: "get",
            url: "http://localhost:8080/just-chicken/api/restaurant/getRestaurant/" + this.props.match.params.id,
            responseType: "json"
        }).then(response => {
            this.setState({ restaurant: response.data });
            console.log(response.data.photo);
        });


    }

    handleBack = () => {
        this.props.history.push('/restaurant');
    }

    handleClick = (item) => {
        this.props.history.push('/restaurant/' + item.id);
    }


    // componentDidMount() {

    // }


    render() {
        const restaurantPhotoN = this.state.restaurant.photo;
        const images = require.context('../', true);
        const restaurantPhotoName = restaurantPhotoN;
        // let photo = "../"+this.state.restaurant.photo;
        // console.log(restaurantPhotoName);

        if (restaurantPhotoName == undefined) {
            var restaurantPhoto = "https://via/placeholder.com/206x300";
        } else {
            if (restaurantPhotoName.indexOf("http") > -1) {
                var restaurantPhoto = restaurantPhotoName;
            } else {
                var restaurantPhoto = images('./' + restaurantPhotoName); 
            }
        }

        // var restaurantPhoto = images('./'+restaurantPhotoName)

        return (
            <Router>
                <div>
                    <div class="container">
                        {/* <p class="lead">{this.state.restaurant.name}</p> */}
                        <div class="row">
                            <div class="col-md-3">
                                <div class="list-group">
                                    <li class="list-group-item">Address: {this.state.restaurant.address}</li>
                                    <li class="list-group-item">Map: </li>
                                    {/* <li class="list-group-item">Info 1</li> */}
                                </div>
                            </div>
                            <div class="col-md-9">
                                {/* <div class="jumbotron"> */}

                                <div class="thumbnail">
                                    <img classname="img-thumbnail" src={restaurantPhoto} alt="" />
                                    <div class="caption-full">
                                        <h4 class="pull-right">{this.state.restaurant.name}</h4>
                                        <h4> <a href=""></a> </h4>
                                        <p>{this.state.restaurant.description}</p>
                                        <Link class="btn btn-success" to="">Update Restaurant</Link>
                                        <Link class="btn btn-danger" to="">Delete Restaurant</Link>
                                    </div>

                                    <div class="well">
                                        <h3 class="pull-right">Comments</h3>
                                        {/* <div class="text-right"> */}
                                        <div>
                                            <hr></hr>
                                            <p>{this.state.restaurant.comment}</p>
                                            {/* <a class="btn btn-success" href="">New Comment</a> */}
                                            <div></div>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>

        );
    }
}

export default Show;