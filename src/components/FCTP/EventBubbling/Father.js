import React,{Component} from "react";

import Son from "./Son";

class Father extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    return (
      <div onChange={this.handleChange}>
        <h2>PARENT {this.state.name}</h2>
        <Son />
      </div>
    );
  }
}
export default Father;