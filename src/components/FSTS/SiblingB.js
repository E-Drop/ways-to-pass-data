import React, {Component} from 'react'

class SiblingB extends Component {

    updateToParent = (e) => {
        this.props.myFunc(e)
    }
    render() {
      return (
        <div>
          <button onClick={this.updateToParent}>this is BrotherB</button>
        </div>
      );
    }
    // Define 'siblingAFunc' and 'siblingBFunc' here
  }

  export default SiblingB