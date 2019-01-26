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

    handleInput = () => {
        axios({
            method: "post",
            url: "http://localhost:8080/just-chicken/api/restaurant/addRestaurant",
            data: {
                username: this.state.name,
                address: this.state.address,
                image: this.state.image,
                comment: this.state.comment,
                description: this.state.description
            }
        });
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
                                <input type="text" class="form-control" id="inputName" value={this.state.name} placeholder="Enter Name" />
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Address</label>
                                <input type="text" class="form-control" id="inputAddress" value={this.state.address} placeholder="Enter Address" />
                            </div>
                            <div class="form-group">
                                <label for="inputPhoto">Image</label>
                                <input type="text" class="form-control" id="inputPhoto" value={this.state.image} placeholder="Enter Image URL" />
                            </div>
                            {/* Comments will be replaced by join in tables */}
                            <div class="form-group">
                                <label for="inputComment">Comment</label>
                                <input type="text" class="form-control" id="inputComment" value={this.state.comment} placeholder="Enter Comment" />
                            </div>
                            <div class="form-group">
                                <label for="inputDescription">Description</label>
                                <input type="text" class="form-control" id="inputDescription" value={this.state.description} placeholder="Enter Description" />
                            </div>
                            {/* <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div> */}
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>

                    </div>

                </div>

            </div>
        );
    }
}

export default New;