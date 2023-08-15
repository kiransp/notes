import { Note } from "../App";

interface Props {
  notes: Note[];
  handleDelete: (note: Note) => void;
}

const Notes = ({ notes, handleDelete }: Props) => {
  return (
    <>
      {notes.map((note) => (
        <div className="card" key={note.id}>
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(note)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Notes;
