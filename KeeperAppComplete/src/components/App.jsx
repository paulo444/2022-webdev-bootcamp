import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(event, title, content) {
    event.preventDefault();

    setNotes((prevValue) => {
      return [
        ...prevValue,
        { title: title, content: content, id: notes.length }
      ];
    });
  }

  function deleteNote(noteId) {
    console.log(
      notes.filter((currentNote) => {
        return currentNote.id !== noteId;
      })
    );
    setNotes(
      notes.filter((currentNote) => {
        return currentNote.id !== noteId;
      })
    );
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((currentNote) => {
        return (
          <Note
            key={currentNote.id}
            id={currentNote.id}
            title={currentNote.title}
            content={currentNote.content}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
