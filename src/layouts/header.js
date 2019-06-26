import React from "react";
import "./header.css";
export class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>{this.props.org}</h1>
      </header>
    );
  }
}
