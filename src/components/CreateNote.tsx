import { useForm } from "react-hook-form";
import { Note } from "../App";
import { v1 as uuidv1 } from "uuid";

interface FormProps {
  id: string;
  title: string;
  description: string;
}

interface Props {
  handleNoteSubmit: (note: Note) => void;
}

function CreateNote({ handleNoteSubmit }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>();

  const id = uuidv1();

  function onSubmit(data: FormProps) {
    const temp = { ...data };
    temp["id"] = id;
    handleNoteSubmit(temp);
    reset();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Create a note</h2>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          {...register("title", { required: true })}
          className="form-control"
          id="title"
          aria-describedby="notes title"
        />
        {errors.title && <p className="text-danger">Title is required</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description", { required: true })}
          className="form-control"
          id="description"
          aria-describedby="notes description"
        />
        {errors.description && (
          <p className="text-danger">Description is required</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default CreateNote;
