import React from "react";
import Login from "../views/login";
import List from "../components/list";

import employees from "./../employees.json";

import "./body.css";
import Clock from "../components/clock";
import ErrorBoundary from "../components/error-boundary";
import { MyTable } from "../components/my-table";

export class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fruits: ["Mango", "Banana", "Jackfruit", "Jack", "Papaya"],
      title: "Fruits",
      showClock: true,
      employees,
      flip: 1
    };

    console.log(employees);
  }

  onChangeTitle = () => {
    // this.state.title = "Favourite Fruits"; // Dont do this

    let newState = {
      title: "Favourite Fruits"
    };
    this.setState(newState);
  };

  employeeNameRenderer = emp => {
    return emp.name.firstName + " " + emp.name.lastName;
  };

  onCouseSelect = item => {
    alert(item + " is selected");
  };

  showHideClock = () => {
    this.setState({ showClock: !this.state.showClock });
  };

  showBugger = () => {
    this.setState({
      showBugger: true
    });
  };

  sortbyName = () => {
    this.setState({
      employees: this.state.employees.sort((a,b)=>{
        return a.name.firstName.localeCompare(b.name.firstName) * this.state.flip
      }),
      flip: -this.state.flip
    })
  }

  renderHeader = () => {
    return (
      <>
        <th>#</th>
        <th onClick={this.sortbyName}>Name</th>
        <th>Gender</th>
        <th>Designation</th>
      </>
    );
  };

  renderRow = (row, index) => {
    return (
      <>
        <td>{index + 1}</td>
        <td>
          {row.name.firstName} {row.name.lastName}
        </td>
        <td>{row.gender === "m" ? "Male" : "Female"}</td>
        <td>{row.designation}</td>
      </>
    );
  };

  /* 
  componentDidCatch(err, info) {
    console.log("INSIDe: BODY", { err, info });

    this.setState({
      hasError: true,
      err, info
    });
  } */

  render() {
    /* if(this.state.hasError) {
      return <div className="body">
        <h1>Something went wrong!</h1>
        <section style={{padding: "10px", color: "red"}}>
          {this.state.err.message}
        </section>
      </div>
    } */
    return (
      <ErrorBoundary>
        <div className="body">
          <div>
            <MyTable striped dark hover bordered responsive
              items={this.state.employees}
              tableHeadersRenderer={this.renderHeader}
              tableRowRenderer={this.renderRow}
            />
          </div>

          <Holder>
            {" "}
            <button>kjhhjhh</button> this is my custome info for holder
          </Holder>

          <div>
            <button onClick={this.showHideClock}>Show/Hide Clock</button>
            {this.state.showClock ? (
              <h1>
                <Clock />
              </h1>
            ) : null}
          </div>
          <ErrorBoundary>
            <div>
              <button onClick={this.showBugger}>Show Bugger</button>
              {this.state.showBugger && <Bugger />}
            </div>
          </ErrorBoundary>
          <h2>
            {this.state.title}
            <button onClick={this.onChangeTitle}>Change Title</button>
          </h2>

          <Login />

          <div className="list-holder">
            <List items={employees} labelRenderer={this.employeeNameRenderer} />
            <List items={this.state.fruits} />
            <List items={["jagan", "langa", "Giri", "vimal"]} />
          </div>
          <List
            onSelect={this.onCouseSelect}
            className="horizontal-list"
            items={["ReactJS", "AngularJS", "DOJO", "EMberJS", "NockoutJS"]}
          />
        </div>
      </ErrorBoundary>
    );
  }
}

const Bugger = () => {
  return {};
};

const Holder = props => {
  return (
    <div>
      hi this is holder component
      <div>{props.children}</div>
    </div>
  );
};
