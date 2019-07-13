import React from 'react';

export default class Field extends React.Component {
  render () {
    const { player, onClick } = this.props;
    let fieldEnabled = true;
    if(typeof player === 'undefined'){
      fieldEnabled = false;
    }
    return (
      <button onClick={onClick} className='field' disabled={fieldEnabled}>
        {player}
      </button>
    );
  }
}
