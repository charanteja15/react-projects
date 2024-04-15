//to show game is over and to restart the game
import React from "react";
function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h1>Game Over!</h1>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={onRestart}>Rematch?</button>
      </p>
    </div>
  );
}

export default GameOver;