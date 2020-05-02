import React, { Component } from 'react';

class Form extends Component {
  defaultState = {
    name: '',
    job: ''
  };

  state = this.defaultState;

  onChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  onClickSubmit = () => {
    const res = this.props.adder(this.state);
    if (res) this.onClickReset();
  };

  onClickReset = () => {
    this.setState(this.defaultState);
  };

  render() {
    const { name, job } = this.state;

    return (
      <form>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={this.onChange}
        />
        <label htmlFor='job'>Job</label>
        <input
          type='text'
          name='job'
          id='job'
          value={job}
          onChange={this.onChange}
        />
        <br />
        <input type='button' value='Submit' onClick={this.onClickSubmit} />
        <input type='button' value='Reset' onClick={this.onClickReset} />
      </form>
    );
  }
}

export default Form;
