import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';

class CommentBox extends Component {

    state = {comment: ''};

    

    handleTextChange = (event) => {
        this.setState({comment:event.target.value});
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        this.props.saveComment(this.state.comment);

        // set the comment to empty after submit
        this.setState({comment:''});
    }

    handleFetchComments = () => {
        this.props.fetchComments();
    }

    render(){
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h4>Add a Comment</h4>
                <textarea onChange={this.handleTextChange} value={this.state.comment}/>
                <div>
                    <button> 
                        Submit Comment
                    </button>
                    <button className='fetch-comments' onClick={this.handleFetchComments}>
                        Fetch Comments
                    </button>
                </div>
            </form>
        );
    }    
}



export default connect(null, actions)(requireAuth(CommentBox));