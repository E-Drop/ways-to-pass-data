import React, { Component } from 'react'
import TheChild from './TheChild'
class TheParent extends Component {
  state = {
        estad: "asda"
      }  
// You can save the state of children on father but the update must be do it by callback
  updateState = () => {
    this.setState({
      estad: this.foo.state.prueba
    })
  }
  render() {
      
      return (
        <div>
        <TheChild
        // pasing reference "ref" i make a pointer in child component
        // and i can access to that pointer in parent(this.foo = childComponent)
          ref={foo => {
            this.foo = foo;
          }}
          callback={this.updateState}
        />
        <p>I'm parent and have the children state = "{this.state.estad}"<br/>click on children for update 
        children state and make the callback<br/> to the parent and update in parent state of children: 
        </p>
        </div>
      );
    }


    componentDidMount() {
      var func = this.foo.myFunc();
      var childState = this.foo.state;
      this.setState({
        estad: childState.prueba
      })
    }
  }
  export default TheParent;
  