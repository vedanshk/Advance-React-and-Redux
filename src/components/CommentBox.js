import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ comment: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.comment);
    this.setState({ comment: "" });
    this.props.saveComment(this.state.comment);
  }

  render() {
    return (
      <div>
        {" "}
        <form onSubmit={this.handleSubmit} className="commentBox">
          <h4>Add Comment</h4>
          <textarea
            onChange={this.handleChange}
            value={this.state.comment}
          ></textarea>
          <button>Submit</button>
        </form>
        <button className="fetch-comment" onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    );
  }
}

export default connect(null, actions)(CommentBox);
