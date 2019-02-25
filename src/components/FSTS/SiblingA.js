import React, {Component} from 'react'

class SiblingA extends Component {

    updateToParent = (e) => {
        this.props.myFunc(e)
    }
    render() {
      return (
        <div>
          <button onClick={this.updateToParent}>this is BrotherA</button>
        </div>
      );
    }
    // Define 'siblingAFunc' and 'siblingBFunc' here
  }

  export default SiblingA
  
  