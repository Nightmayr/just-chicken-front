import React, { Component } from 'react';
import axios from 'axios';
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
        console.log(restaurantPhotoName);

        if (restaurantPhotoName == undefined) {
            var restaurantPhoto = "https://via/placeholder.com/206x300";
        } else {
            var restaurantPhoto = images('./' + restaurantPhotoName);
        }

        // var restaurantPhoto = images('./'+restaurantPhotoName)

        return (
            <div>
                <div class="container">
                    {/* <p class="lead">{this.state.restaurant.name}</p> */}
                    <div class="row">
                        <div class="col-md-3">
                            <div class="list-group">
                                <li class="list-group-item">Address: {this.state.restaurant.address}</li>
                                <li class="list-group-item">Info 1</li>
                                <li class="list-group-item">Info 1</li>
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

                                </div>

                                <div class="well">
                                    <div class="text-right">
                                        <a class="btn btn-success" href=""></a>
                                    </div>
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Show;