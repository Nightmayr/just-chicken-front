import React, { Component } from 'react';


class New extends Component {
    render() {
        return (
            // <div style={{ width: 30 %: margin: 30px auto }}>
            // <form action="/campgrounds" method="POST">
            //     <div class="form-group">
            //         <input class="form-control" type="text" name="name" placeholder="name"/>
            //     </div>
            //     <div class="form-group">
            //         <input class="form-control" type="text" name="image" placeholder="image url"/>                
            //     </div>
            //     <div class="form-group">
            //         <input class="form-control" type="text" name="description" placeholder="description"/>                
            //     </div>
            //     <div class="form-group">
            //         <button class="btn btn-lg btn-primary btn-block">Submit!</button>
            //     </div>
            //     </form>
            //     </div>

            <div>
                <div class="container">
                    <div class="jumbotron">
                        <h3>New Restaurant</h3>
                        <form>
                            <div class="form-group">
                                <label for="InputName">Restaurant Name</label>
                                <input type="text" class="form-control" id="inputName" aria-describedby="emailHelp" placeholder="Enter Name" />
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="Address" />
                            </div>
                            <div class="form-group">
                                <label for="inputPhoto">Image</label>
                                <input type="text" class="form-control" id="inputPhoto" placeholder="Image URL" />
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Address</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="Address" />
                            </div>
                            {/* This will be replaced by join in tables */}
                            <div class="form-group">
                                <label for="inputAddress">Comment</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="Address" />
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