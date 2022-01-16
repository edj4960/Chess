import React, { useState } from 'react';
import Spot from './Spot';
import './Board.scss';

const Board = () => {
  const length = 500;
  let color = '#cccccc';

  const toggleColor = () => {
    if (color === '#cccccc') {
      color = '#F6F6F6';
    } else {
      color = '#cccccc';
    }
  }

  const renderRow = (rowNum: number) => {
    toggleColor();
    var rowSpots = [];
    for (let i: number = 0; i < 8; i++) {
      rowSpots.push(<Spot key={i} color={color} x={i} y={rowNum} />);
      toggleColor();
    }

    return (
      <div className="board-row" style={{height: length/8}} key={rowNum}>
        {rowSpots}
      </div>
    )
  }

  const renderAllRows = () => {
    var rows = [];
    for (let i: number = 0; i < 8; i++) {
      rows.push(renderRow(i));
    }

    return rows;
  }

  return (
    <div style={{ width: length, height: length, backgroundColor: 'black' }}>
      {renderAllRows()}
    </div>
  )
}

export default Board;