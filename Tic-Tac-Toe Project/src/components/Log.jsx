import React from "react";

function Log({ turns }) {
  return (
    <div>
      <ol id="log">
        {turns.map((turn) => (
          <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected {turn.square.row},{turn.square.col}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Log;
