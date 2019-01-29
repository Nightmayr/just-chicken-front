import React, { Component } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import '../ShowPage.css';
import logo from '../logo.png';


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

    deleteRestaurant = () => {
        axios({
            method: "delete",
            url: "http://localhost:8080/just-chicken/api/restaurant/deleteRestaurant/" + this.props.match.params.id,
            responseType: "json"
        })
        window.location.replace('/restaurant');
    }

    handleBack = () => {
        this.props.history.push('/restaurant');
    }

    handleClick = (item) => {
        this.props.history.push('/restaurant/' + item.id + '/update');
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
            var restaurantPhoto = {logo};
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
                    <div className="container">
                        {/* <p class="lead">{this.state.restaurant.name}</p> */}
                        <div className="row">
                            <div className="col-md-3">
                                <div className="list-group">
                                    <li className="list-group-item">Address: {this.state.restaurant.address}</li>
                                    <li className="list-group-item">Map: </li>
                                    {/* <li class="list-group-item">Info 1</li> */}
                                </div>
                            </div>
                            <div className="col-md-9">
                                {/* <div class="jumbotron"> */}

                                <div class="thumbnail">
                                    <img className="img-thumbnail" src={restaurantPhoto} alt={this.state.restaurant.photo} />
                                    <div className="caption-full">
                                        <h4 className="pull-right">{this.state.restaurant.name}</h4>
                                        <h4> <a href=""></a> </h4>
                                        <p>{this.state.restaurant.description}</p>
                                        <Link className="btn btn-success" to={"/update/"+this.props.match.params.id}>Update Restaurant</Link>
                                        <Link className="btn btn-danger" to="" onClick={this.deleteRestaurant}>Delete Restaurant</Link>
                                    </div>

                                    <div className="well">
                                        <h3 className="pull-right">Comments</h3>
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