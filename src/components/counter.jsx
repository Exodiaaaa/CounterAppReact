import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(PreviousProps, PreviousState) {
    console.log("PreviousProps", PreviousProps);
    console.log("PreviousState", PreviousState);
    /* if (PreviousProps.Counter.value !== this.props.counter.value) {
      //Ajax call and get new data from server
    }*/
  }
  componentWillUnmount() {
    console.log("counter - Unmount");
  }
  /* constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  } Solution n1*/
  /*  handleIncrement = () => {
    //in react we dont update the state directly like this.state.count++
    //arrow function dont rebind this they inherit it
    //solution standard
    this.setState({ count: this.state.count + 1 }); //setState method in component class if figure out which part of state it change it bring the dom and sync with the virtuel dom
  };*/

  /*doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };instead of making all this  and call this event check the onClick line*/
  render() {
    console.log("Counter- Rendered");

    //  console.log("props", this.props);         <h4>{this.props.id}</h4> using passing children

    return (
      //in react we dont use div we use React.fragement
      <div>
        <span style={{ color: "white" }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zéro" : value;
  }
}

export default Counter;
