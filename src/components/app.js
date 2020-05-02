import React, { Component } from 'react';
import Table from './table';
import Form from './form';

class App extends Component {
  characters = [
    {
      name: 'Charlie',
      job: 'Janitor'
    },
    {
      name: 'Mac',
      job: 'Bouncer'
    },
    {
      name: 'Dee',
      job: 'Aspring actress'
    },
    {
      name: 'Dennis',
      job: 'Bartender'
    }
  ];

  state = {
    characters: this.characters
  };

  remover = (index) => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((el, i) => {
        return i !== index;
      })
    });
  };

  adder = (character) => {
    if (character.name && character.job) {
      this.setState({ characters: [...this.state.characters, character] });
      return true
    }
    return
  };

  render() {
    return (
      <>
        <h1
          style={{
            width: '100%',
            backgroundColor: '#e8e8e8',
            marginTop: '0px'
          }}>
          React App
        </h1>
        <Table myData={this.state.characters} remover={this.remover} />
        <br />
        <Form adder={this.adder} />
      </>
    );
  }
}

export default App;
