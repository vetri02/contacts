import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class FamilyTree extends React.Component {
    render() {
        const family = this.props.contacts;

        return <ol>
                {family.map((person, index) => (
                <li key={index}>{person.name}</li>
            ))}
            </ol>
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <FamilyTree contacts={[
            {name: 'Yazhini'},
            {name: 'Tamil'},
            {name: 'Vetri'}
        ]}/>
        <FamilyTree contacts={[
            {name: 'Foo'},
            {name: 'Bar'},
            {name: 'Xee'}
        ]}/>
        <FamilyTree contacts={[
            {name: 'Tqngo'},
            {name: 'Adam'},
            {name: 'Warren'}
        ]}/>
      </div>
    );
  }
}

export default App;
