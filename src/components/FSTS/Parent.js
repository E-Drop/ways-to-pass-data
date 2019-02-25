import React, {Component} from 'react'
import SiblingA from './SiblingA'
import SiblingB from './SiblingB'
class ParentComponent extends Component {
    state = {
        propA: '',
        propB: '',
    }
    siblingAFunc = () => {
        this.setState({
            propA: 'clicadoA',
            propB: 'clicadoA'
        })
    }
    siblingBFunc = (e) => {
        this.setState({
            propA: 'clicadoB',
            propB: 'clicadoB'
        })
    }
    render() {
      return (
        <div>
        <table>
        <tr>
            <td>
                <SiblingA
                    myProp={this.state.propA}
                    myFunc={this.siblingAFunc}
                />
            </td>
            <td><p>{this.state.propA}</p></td>
        </tr>
        <tr>
            <td>
                <SiblingB
                    myProp={this.state.propB}
                    myFunc={this.siblingBFunc}
                />
            </td>
            <td><p>{this.state.propB}</p></td>
        </tr>
          
          
          </table>
        </div>
      );
    }
    // Define 'siblingAFunc' and 'siblingBFunc' here
  }

  export default ParentComponent
  
  