import React, { Component } from "react";
import "./App.css";
import { SmurfProvider } from "../SmurffyContext/SmurfProvider";
import AddSmurfs from "../SmurffyContext/AddSmurfs";
import SmurfList from "../SmurffyContext/SmurfList";
class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div> */}
        <SmurfProvider>
          <AddSmurfs />
          <SmurfList />
        </SmurfProvider>
        {/* <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}
      </div>
    );
  }
}

export default App;
