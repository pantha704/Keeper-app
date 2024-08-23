import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = (note) => {
    setNotes((prevNotes) => prevNotes.filter((n) => n != note));
  };

  return (
    <div>
      <Header />
      <div>
        <CreateArea onAdd={addNote} />
      </div>
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            note={note}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
