import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TheParent from './components/FPTC/ParentCallingChildrenFunction/TheParent'
import Father from './components/FCTP/EventBubbling/Father'
import Parent from './components/FSTS/Parent'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>FROM CHILDREN TO PARENT</h1>
          <Father/>
          <hr/>
        </div>
        <div>
        <h1>FROM PARENT TO CHILDREN</h1>
          <TheParent/>
          <hr/>
        </div>
        <div>
          <h1>BETWEEN SIBLINGS</h1>
          <Parent />
          <hr/>
        </div>
      </div>
    );
  }
}

export default App;
