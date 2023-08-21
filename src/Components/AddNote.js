import React, { useContext, useState } from "react";
import noteContext from "../Context/notes/noteContext";
const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description);
    setNote({ title: "", description: "" })
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container my-3">
        <h1>Add a note</h1>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title of your Note:
            </label>
            <input
              value={note.title}
              type="text"
              className="form-control"
              name="title"
              id="title"
              aria-describedby="emailHelp"
              onChange={onChange}
              minLength={3} required
            />
            {/* <div id="titlehelp" className="form-text">We'll save it for you for your future.</div> */}
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <input
            value={note.description}
              type="text"
              name="description"
              className="form-control"
              id="description"
              onChange={onChange}
              minLength={5} required
            />
          </div>
          
          <button
          disabled={note.title.length<3||note.description.length<5}
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
