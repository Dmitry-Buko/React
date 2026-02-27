import React, { Component } from "react";

class LifecycleComponent extends Component {
  state = { count: 0, isVisible: true}
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log('DidMount. Example data:', data))
    .catch(err => console.log(err));
  }
  componentDidUpdate(){
    console.log('DidUpdate. Component was update. Now count:', this.state.count);
  }
  componentWillUnmount(){
    console.log('WillUnmount. Component was deleted');
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log(`ComponentUpdate. New count will: ${nextState.count}`);
    return nextState.count % 2 === 0
  }
  toggleVisibility = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible
    }));
  };
  render() {
    return (
      <div>
        <h3>Life Cycle</h3>
        <p>Count: {this.state.count}</p>
        <button onClick={() => {this.setState({count: this.state.count + 1})}}>Increase +1</button>
      </div>
    );
  }
}

export default LifecycleComponent;
