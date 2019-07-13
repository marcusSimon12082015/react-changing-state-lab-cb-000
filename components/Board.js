import React from 'react';
import Field from './Field';

export default class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    let className = 'board';
    return (
      <div className={className}>
        {
          this.props.board.map((field) =>(
            <Field player={field} onClick={this.handleClick} />
          ))
        }
      </div>
    );
  }
}
