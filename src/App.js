import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import CreateArea from "./component/CreateArea";
import Note from "./component/Note";
import { getNotes, addNote, deleteNote } from "./server/server";
import "./App.css";

export default function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes()
      .then((fetched) => setNotes(fetched))
      .catch((err) => console.error("Error loading notes:", err));
  }, []);

  const handleAddNote = (newNote) => {
    addNote(newNote)
      .then((savedNote) => setNotes((prev) => [...prev, savedNote]))
      .catch((err) => console.error("Add error:", err));
  };

  const handleDeleteNote = (id) => {
    deleteNote(id)
      .then(() => setNotes((prev) => prev.filter((n) => n.id !== id)))
      .catch((err) => console.error("Delete error:", err));
  };

  return (
    <div className="app-container">
      <Header />
      <CreateArea onAdd={handleAddNote} />

      <div className="notes-container">
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            handleDelete={handleDeleteNote}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}
