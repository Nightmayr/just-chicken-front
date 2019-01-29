import React, { Component } from 'react';
import axios from 'axios';


class New extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            address: "",
            image: "",
            comment: "",
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

    restaurantCommentChange = (event) => {
        this.setState({ comment: event.target.value });
    }

    restaurantDescChange = (event) => {
        this.setState({ description: event.target.value });
    }
    
    handleInput = () => {
        axios({
            method: "post",
            url: "http://localhost:8080/just-chicken/api/restaurant/addRestaurant",
            data: {
                name: this.state.name,
                address: this.state.address,
                photo: this.state.photo,
                comment: this.state.comment,
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
                        <h3>New Restaurant</h3>
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
                                <label for="inputComment">Comment</label>
                                <input type="text" class="form-control" id="inputComment" value={this.state.comment} placeholder="Enter Comment" onChange={this.restaurantCommentChange}/>
                            </div>
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

export default New;