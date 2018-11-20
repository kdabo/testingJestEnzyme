// by starting this file with the lowerCase(unlike in the case of components where we are exporting a class), means that this file is going to export by default a function
import React, { Component } from 'react';
import { connect } from 'react-redux';

// boilerplate for creating Higher Order Component
export default (ChildComonent) => {
  class ComposedComponent extends Component {

    //component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    //component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if(!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComonent {...this.props}/>;
    }
  }

  function mapStateToProps(state) {
    return {auth: state.auth}
  }

  return connect(mapStateToProps)(ComposedComponent);
}