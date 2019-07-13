import React from 'react';

export default class Status extends React.Component {
  render () {
    const { winner } = this.props;
    let display;
    if (typeof winner === 'undefined') {
      display = 'Tie';
    } else {
      display = winner + ' wins';
    }
    let className = 'status';
    return (
      <div className={className} style='background-color:grey;'>
        <p>{display}</p>
      </div>
    );
  }
}
