import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0
  };
  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button data-testid="counter-button" onClick={this.handleClick}>
          {count}
        </button>
      </div>
    );
  }
}
