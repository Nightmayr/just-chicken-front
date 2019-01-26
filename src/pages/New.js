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



    render() {
        return (
            <div>
                <div class="container">
                    <div class="jumbotron">
                        <h3>New Restaurant</h3>
                        <form>
                            <div class="form-group">
                                <label for="InputName">Restaurant Name</label>
                                <input type="text" class="form-control" id="inputName" aria-describedby="emailHelp" placeholder="Enter Name" />
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="Enter Address" />
                            </div>
                            <div class="form-group">
                                <label for="inputPhoto">Image</label>
                                <input type="text" class="form-control" id="inputPhoto" placeholder="Enter Image URL" />
                            </div>
                            {/* Comments will be replaced by join in tables */}
                            <div class="form-group">
                                <label for="inputComment">Comment</label>
                                <input type="text" class="form-control" id="inputComment" placeholder="Enter Comment" />
                            </div>
                            <div class="form-group">
                                <label for="inputDescription">Description</label>
                                <input type="text" class="form-control" id="inputDescription" placeholder="Enter Description" />
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