import React, {Component} from 'react'

class TheChild extends Component {
  state = {
    prueba: 'cualquiercosa',
  }
  
   
    // this function is called in parent
    myFunc() {
      return "hello";
    }
    
    render() {
      this.changeState = async() => {
        await this.setState({
          prueba: "flipalo!"
        })
        this.props.callback()
      }
        return (
       <button onClick={this.changeState}>Child</button>
        );
      }
  }

export default TheChild
  
  