import React, { Component } from 'react';


class Login extends Component{
    constructor() {
        super();
        this.state = {
            username: "",
            email:"",
            password: "",
        };
    }

    render() {
        return (
            <div>
                <div class="container">
                    <div class="jumbotron">
                        <h3>Login</h3>
                        <form>
                            <div class="form-group">
                                <label for="InputName">Username</label>
                                <input type="text" class="form-control" id="inputName" value={this.state.username} placeholder="Enter Username" onChange={this.usernameChange} required/>
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Email</label>
                                <input type="text" class="form-control" id="inputAddress" value={this.state.email} placeholder="Enter Email" onChange={this.emailChange} required/>
                            </div>
                            <div class="form-group">
                                <label for="inputImage">Password</label>
                                <input type="password" class="form-control" id="inputImage" value={this.state.password} placeholder="Enter Password" onChange={this.passwordChange} required/>
                            </div>
                            <button type="submit" onClick={this.handleInput} class="btn btn-primary">Submit</button>
                        </form>

                    </div>

                </div>

            </div>
        );
    }
}

export default Login;