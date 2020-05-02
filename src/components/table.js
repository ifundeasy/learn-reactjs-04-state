import React, { Component } from 'react';

const THeader = function () {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};
const TBody = (props) => {
  const { characters, removeCharacter } = props;
  const rows = characters.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { myData, remover } = this.props;

    return (
      <div style={{ marginTop: '20px', overflowX: 'auto' }}>
        <table>
          <THeader />
          <TBody characters={myData} removeCharacter={remover} />
        </table>
      </div>
    );
  }
}

export default Table;
