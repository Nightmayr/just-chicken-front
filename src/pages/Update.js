import React, { Component } from 'react';
import axios from 'axios';

import * as constants from "../Constants.js"


class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            image: "",
            comments: "",
            description: ""
        };
    }
    
    restaurantNameChange = (event) => {
        this.setState({ name: event.target.value });
    }
    
    restaurantAddressChange = (event) => {
        this.setState({ address: event.target.value });
    }

    restaurantPhotoChange = (event) => {
        this.setState({ photo: event.target.value });
    }

    restaurantDescChange = (event) => {
        this.setState({ description: event.target.value });
    }
    
    handleInput = () => {
        console.log(this.state.name);

        axios({
            method: "get",
            url: constants.externalIP+":8080/just-chicken/api/restaurant/getRestaurant/" + this.props.match.params.id,
            responseType: "json"
        }).then(response => {
            // axios({
            //     method: "put",
            //     url: "http://localhost:8080/just-chicken/api/restaurant/updateRestaurant/" + this.props.match.params.id,
            //     data: {
            //         name: this.state.name,
            //         address: this.state.address,
            //         photo: this.state.photo,
            //         comments: response.data.comment,
            //         description: this.state.description
            //     }
            // });
            console.log(response.data);
            console.log(response.data.comment);
        });

        axios({
            method: "put",
            url: constants.externalIP+":8080/just-chicken/api/restaurant/updateRestaurant/" + this.props.match.params.id,
            data: {
                name: this.state.name,
                address: this.state.address,
                photo: this.state.photo,
                comments: this.state.comments,
                description: this.state.description
            }
        });
        window.location.reload();
        // window.location.replace('/restaurant');
        this.props.history.push('/restaurant');
    }

    handleBack = () => {
        this.props.history.push('/restaurant');
    }

    render() {
        return (
            <div>
                <div class="container">
                    <div class="jumbotron">
                        <h3>Update Restaurant</h3>
                        <form>
                            <div class="form-group">
                                <label for="InputName">Restaurant Name</label>
                                <input type="text" class="form-control" id="inputName" value={this.state.name} placeholder="Enter Name" onChange={this.restaurantNameChange} />
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Address</label>
                                <input type="text" class="form-control" id="inputAddress" value={this.state.address} placeholder="Enter Address" onChange={this.restaurantAddressChange}/>
                            </div>
                            <div class="form-group">
                                <label for="inputImage">Image</label>
                                <input type="text" class="form-control" id="inputImage" value={this.state.photo} placeholder="Enter Image URL" onChange={this.restaurantPhotoChange} />
                            </div>
                            {/* Comments will be replaced by join in tables */}
                            <div class="form-group">
                                <label for="inputDescription">Description</label>
                                <input type="text" class="form-control" id="inputDescription" value={this.state.description} placeholder="Enter Description" onChange={this.restaurantDescChange}/>
                            </div>
                            {/* <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div> */}
                            <button type="submit" onClick={this.handleInput} class="btn btn-primary">Submit</button>
                        </form>

                    </div>

                </div>

            </div>
        );
    }
}

export default Update;