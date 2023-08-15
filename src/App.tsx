import { useState } from "react";
import "./App.css";
import CreateNote from "./components/CreateNote";
import { NavBar } from "./components/NavBar";
import Notes from "./components/Notes";

export interface Note {
  id: string;
  title: string;
  description: string;
}
function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  function onDelete(note: Note) {
    setNotes(notes.filter((n) => (n.id !== note.id ? note : null)));
  }
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <Notes notes={notes} handleDelete={(note) => onDelete(note)} />
          <CreateNote handleNoteSubmit={(note) => setNotes([...notes, note])} />
        </div>
      </div>
    </>
  );
}

export default App;
