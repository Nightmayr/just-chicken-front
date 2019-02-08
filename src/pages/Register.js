import React, { Component } from 'react';
import axios from 'axios';
import * as constants from "../Constants.js"

class Register extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPass: "",
            users: [],
            checker: ""
        };
    }

    usernameChange = (event) => {
        this.setState({ username: event.target.value });
    }

    emailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    passwordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    passwordConfirmChange = (event) => {
        this.setState({ confirmPass: event.target.value });
    }

    handleInput = () => {
        if (this.state.username && this.state.email && this.state.password && this.state.confirmPass) {
            if (this.state.password === this.state.confirmPass) {
                axios({
                    method: "post",
                    url: constants.externalIP+"/just-chicken/api/user/addUser",
                    data: {
                        username: this.state.username,
                        email: this.state.email,
                        password: this.state.password,
                    }
                }).then(response => {
                    console.log("hi");
                    console.log(response);
                    if (typeof response.data == "string") {
                        this.setState({ checker: response.data })
                    } else {
                        this.setState({ checker: "Account created successfully" })
                        setTimeout(() => {
                            window.location.reload();
                            // window.location.replace('/restaurant');
                            this.props.history.push('/restaurant');
                        }, 2000);
                    }
                }).catch(error => {
                    console.log("bi");
                    console.log(error)
                });

            }

        }
    }


    render() {
        return (
            <div>
                <div class="container">
                    <div class="jumbotron">
                        <h3>Register User</h3>
                        <form>
                            <div class="form-group">
                                <label for="InputName">Username</label>
                                <input type="text" class="form-control" id="inputName" value={this.state.username} placeholder="Enter Username" onChange={this.usernameChange} required />
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Email</label>
                                <input type="email" class="form-control" id="inputAddress" value={this.state.email} placeholder="Enter Email" onChange={this.emailChange} required />
                            </div>
                            <div class="form-group">
                                <label for="inputImage">Password</label>
                                <input type="password" class="form-control" id="inputImage" value={this.state.password} placeholder="Enter Password" onChange={this.passwordChange} required />
                            </div>
                            <div class="form-group">
                                <label for="inputImage">Confirm Password</label>
                                <input type="password" class="form-control" id="inputImage" value={this.state.confirmPass} placeholder="Enter Password" onChange={this.passwordConfirmChange} required />
                            </div>
                            <p>{this.state.checker}</p>
                            <input onClick={this.handleInput} class="btn btn-primary" value="Submit" />
                        </form>

                    </div>

                </div>

            </div>
        );
    }
}

export default Register;