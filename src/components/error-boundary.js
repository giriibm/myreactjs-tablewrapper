import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(err, info) {
    this.setState({
      hasError: true,
      err,
      info
    });
  }

  render() {
      if(this.state.hasError) {
          return <div style={{padding: "10px", color: "red", border: "solid thick red"}}>
              <h2>Oop..! Found Error!</h2>
              {this.state.err.message}
          </div>
      }
    return this.props.children;
  }
}
