import React, {Component} from 'react'


class Son extends Component {
    constructor(props) {
        super(props);
        this.state = {
          empty: true
        };
      }
    
      handleChange = event => {
        this.setState({
          empty: event.target.value.length === 0
        });
      };
    
      inputStyle() {
        if (!this.state.empty) {
          return {};
        }
        return {
          backgroundColor: "pink"
        };
      }
    
      render() {
        return (
          <input
            style={this.inputStyle()}
            onChange={this.handleChange}
            placeholder="SON"
          />
        );
      }
    }
    export default Son;