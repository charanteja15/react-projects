import React, { useState } from "react";

function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditButton() {
    setIsEditing((editing) => !editing); //best practice to update the state based on previous value is passing a function inside setIsEditing()
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  //isEditing is true then show input field

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  //let buttonCaption = "Edit"; //based on input filed is changes, it will show Edit / save   method 1
  //method 2-- we use terninary operation in button tag {isEditing ?"Save" : "Edit"}
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        defaultValue={playerName}
        onChange={handleChange} /* two way binding */
      />
    );
    // buttonCaption = "Save";
  }

  return (
    <li classname={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditButton}>{isEditing ? "Save" : "Edit"}</button>
      {/* ///method 1-- {buttonCaption}  and method 2-- terninary operator  */}
    </li>
  );
}

export default Player;
