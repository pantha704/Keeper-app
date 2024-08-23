import React from "react";

function Note(props) {
  const handleDelete = (e) => {
    props.onDelete(props.note);
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default Note;
