import React, { Component } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import '../ShowPage.css';
import logo from '../logo.png';
import Map from '../Map'


class Show extends Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurant: [],
            comments: []
        };

        axios({
            method: "get",
            url: "http://localhost:8080/just-chicken/api/restaurant/getRestaurant/" + this.props.match.params.id,
            responseType: "json"
        }).then(response => {
            this.setState({
                restaurant: response.data,
                comments: response.data.comment
            });
            console.log(response.data);
            console.log(response.data.comment);
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

        if (restaurantPhotoName === undefined) {
            var restaurantPhoto = { logo };
        } else {
            if (restaurantPhotoName.indexOf("http") > -1) {
                var restaurantPhoto = restaurantPhotoName;
            } else {
                var restaurantPhoto = images('./' + restaurantPhotoName);
            }
        }


        const Comments = this.state.comments.map((item, i) => (
            <div>
                <p>{item.author}</p>
                <p>{item.comment}</p>
            </div>
        ));

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
                                    {/* <div id="map-container">
                                        <Map/>
                                    </div> */}
                                    {/* <li class="list-group-item">Info 1</li> */}
                                </div>
                            </div>
                            <div className="col-md-9">
                                {/* <div class="jumbotron"> */}

                                <div id="show-card" class="card" >
                                    <img id="show-card-img" class="card-img-top" src={restaurantPhoto} alt={this.state.restaurant.photo} />
                                    <div class="card-body">
                                        <h5 class="card-title">{this.state.restaurant.name}</h5>
                                        <p class="card-text">{this.state.restaurant.description}</p>
                                        <a className="btn btn-success" href={"/update/"+this.props.match.params.id}>Update Restaurant</a>
                                        <Link className="btn btn-danger" to="" onClick={this.deleteRestaurant}>Delete Restaurant</Link>
                                    </div>
                                </div>

                                    <div className="well">
                                        <h3 className="pull-right">Comments</h3>
                                        {/* <div class="text-right"> */}
                                        <div>
                                        <a className="btn btn-success" href={"/newcomment/"+this.props.match.params.id}>New Comment</a>
                                            <hr></hr>
                                            {Comments}
                                            <div></div>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
            </Router>

        );
    }
}

export default Show;