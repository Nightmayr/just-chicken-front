import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Restaurant from './pages/Restaurant';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import New from './pages/New';
import Show from './pages/Show';


class Navbar extends Component {
    render() {
        return (
            <Router>

                <div>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <img src={require("./logo.png")} width="100" height="70" alt="" class="d-inline-block align-top" />
                        <a class="navbar-brand" href="/">
                            Just-Chicken
                    </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                    <Link class="nav-link" to="/restaurant">Restaurant <span class="sr-only">(current)</span></Link>
                                </li>
                                {/* <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li> */}

                            </ul>
                            <form class="form-inline my-2 my-lg-0">
                                < ul class="navbar-nav mr-auto" >
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/login">Login</Link>
                                    </li>
                                </ul>
                                < ul class="navbar-nav mr-auto" >
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/register">Register</Link>
                                    </li>
                                </ul>

                                {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                            </form>
                        </div>



                    </nav>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/restaurant" component={Restaurant} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/new" component={New} />
                    <Route exact path="/restaurant/:id" component={Show} />


                </div>
            </Router>

        );
    }
}

export default Navbar;