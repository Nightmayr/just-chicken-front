import React, { Component } from 'react';
import axios from 'axios';
import * as constants from "../Constants.js"


class NewComment extends Component{
    constructor() {
        super();
        this.state = {
            comment: "",
        };
    }

    commentChange = (event) => {
        this.setState({ comment: event.target.value });
    }


    handleInput = () => {

            axios({
                    method: "post",
                    url: constants.externalIP+"/just-chicken/api/comment/addComment",
                    data: {
                        userId: JSON.parse(sessionStorage.getItem('user')).id,
                        restaurantId: this.props.match.params.id,
                        comment: this.state.comment,
                        author: JSON.parse(sessionStorage.getItem('user')).username
                    }
                });
                window.location.reload();
                // window.location.replace('/restaurant');
                this.props.history.push('/restaurant');
            }
            


    render() {
        return (
            <div>
                <div class="container">
                    <div class="jumbotron">
                        <h3>Add Comment</h3>
                        <form>
                            <div class="form-group">
                                <label for="InputName">Comment</label>
                                <input type="text" class="form-control" id="inputName" value={this.state.comment} placeholder="Enter Comment" onChange={this.commentChange} required/>
                            </div>
                            <button type="submit" onClick={this.handleInput} class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewComment;