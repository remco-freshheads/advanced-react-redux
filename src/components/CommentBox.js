import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

export class CommentBox extends React.Component {
    state = {
        comment: ''
    };

    _handleChange = event => {
        this.setState({ comment: event.target.value });
    };

    _handleSubmit = (event) => {
        event.preventDefault();

        this.props.saveComment(this.state.comment);

        this.setState({ comment: '' });
    };

    render() {
        return (
            <form onSubmit={ this._handleSubmit }>
                <h4>Add a comment</h4>
                <textarea onChange={ this._handleChange } value={this.state.comment} />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    }
}

export default connect(null, actions)(CommentBox);
