import React from 'react';

export default class CommentBox extends React.Component {
    state = {
        comment: ''
    };

    _handleChange = event => {
        this.setState({ comment: event.target.value });
    };

    _handleSubmit = (event) => {
        event.preventDefault();

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
