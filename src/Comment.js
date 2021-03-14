
import React, { Component } from 'react';

export default class Comment extends Component {
    render() {
        return (
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }
}

//this is getting information from another prop
//and running it inside the div.