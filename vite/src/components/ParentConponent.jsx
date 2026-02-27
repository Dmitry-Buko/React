import React, { Component } from "react";
import LifecycleComponent from "./LifecycleComponent";

class ParentConponent extends Component {
  state = { isVisivle: true };

  toggle = () => this.setState({ isVisivle: !this.state.isVisivle });

  render() {
    return (
      <div>
        <h3>Parent component</h3>
        <button onClick={this.toggle}>
          {this.state.isVisivle ? "Delete component" : "Add component"}
        </button>
        {this.state.isVisivle ? (
          <LifecycleComponent />
        ) : (
          <p>Component deleted. Check the console</p>
        )}
      </div>
    );
  }
}
export default ParentConponent;
