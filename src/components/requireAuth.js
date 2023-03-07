import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
export default (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.isAuthenticated();
    }

    // our componetnt just got updated
    componentDidUpdate() {
      this.isAuthenticated();
    }

    isAuthenticated() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }

    render() {
      return <ChildComponent />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps, actions)(ComposedComponent);
};
