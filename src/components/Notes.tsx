import { Note } from "../App";

interface Props {
  notes: Note[];
  handleDelete: (note: Note) => void;
}

const Notes = ({ notes, handleDelete }: Props) => {
  return (
    <>
      {notes.map((note) => (
        <div
          className="card mt-3 mx-3"
          key={note.id}
          style={{ backgroundColor: note.bgColor }}
        >
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
            <p className="card-subtitle ">{note.date}</p>
            <button
              className="btn btn-danger mt-3"
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
