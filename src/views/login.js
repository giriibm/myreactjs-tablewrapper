import React, { Component } from "react";

const errorStyle = {
  color: "red",
  fontSize: "smaller"
};

export default class Login extends Component {
  onLoginClick = event => {
    // TODO::
    /*  let userNameInput = document.querySelector("#userName");
    let passwordInput = document.getElementById("password");

    let userName = userNameInput.value;
    let password = passwordInput.value; */

    let { userName, password, rememberMe } = this.state;

    console.log({ userName, password, rememberMe });
  };

  onUserNameChange = e => {
    let userNameInput = e.currentTarget; // event.target
    let userName = userNameInput.value;
    this.setState({
      userName: userName.toUpperCase()
    });
  };

  onUserNameFocus = e => {
    this.setState({
      userNameError: null
    });
  };

  onUserNameBlur = event => {
    let userNameInput = event.currentTarget; // event.target
    let userName = userNameInput.value;

    if (userName.length < 8) {
      this.setState({
        userNameError: "username should be minimum 8 characters long."
      });
    } else {
      this.setState({
        userNameError: null
      });
    }
  };

  onPasswordChange = e => {
    let password = e.currentTarget.value;
    this.setState({ password });
  };

  onRememberMeChange = e => {
    let checkbox = e.currentTarget;
    let rememberMe = checkbox.checked;
    this.setState({
      rememberMe
    });
  };

  state = {
    userNameError: null,
    userName: null,
    password: null,
    rememberMe: false,
    loginType: ""
  };

  render() {
    return (
      <div className="login">
        <div>
          <span>{this.state.userName}</span> /{" "}
          <span>{this.state.password}</span>
          <div>
            Remember Me: {this.state.rememberMe.toString().toUpperCase()}
          </div>
          <div>
            Login Type: {this.state.loginType}
          </div>
        </div>
        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="UserName"
            id="userName"
            onChange={this.onUserNameChange}
            onBlur={this.onUserNameBlur}
            onFocus={this.onUserNameFocus}
          />
          {this.state.userNameError ? (
            <div style={errorStyle}>{this.state.userNameError}</div>
          ) : null}
        </div>
        <div>
          <input type="checkbox" onChange={this.onRememberMeChange} />{" "}
          <label>Remeber Me</label>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={this.onPasswordChange}
          />
        </div>
        <div>
          <input value="cust" type="radio" name="loginType" onChange={this.onLoginTypeChange} />
          <label>Customer</label>
          <input value="vend" type="radio" name="loginType" onChange={this.onLoginTypeChange} />
          <label>Vendor</label>
          <input value="empl" type="radio" name="loginType" onChange={this.onLoginTypeChange} />
          <label>Employee</label>
        </div>
        <div>
          <button onClick={this.onLoginClick}>Login</button>
          <button>Reset</button>
        </div>
      </div>
    );
  }
  onLoginTypeChange = (e) => {
    this.setState({
      loginType: e.target.value
    });
  }
}
