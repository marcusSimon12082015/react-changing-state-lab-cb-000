import React from 'react';
import Field from './Field';

export default class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    let className = 'board';
    return (
      <div className={className}>
        {
          this.props.board.map((field,i) =>(
            <Field key={i} player={field} onClick={onClick.bind(null,i)} />
          ))
        }
      </div>
    );
  }
}
