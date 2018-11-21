import React from 'react';

export default class CommentBox extends React.Component {
    render() {
        return (
            <form>
                <h4>Add a comment</h4>
                <textarea />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    }
}
