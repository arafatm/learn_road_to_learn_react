import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
		var person = { first: "Leroy", last: "Jenkins" }
    return (
      <div className="App">
        <h2>Welcome, {person.first} {person.last}</h2>
      </div>
    );
  }
}

export default App;
