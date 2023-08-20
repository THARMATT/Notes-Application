
import React ,{useContext} from 'react'
import Noteitem from './Noteitem';
import noteContext from "../Context/notes/noteContext"
import AddNote from './AddNote';
// import Not
const Notes = () => {
    const context = useContext(noteContext) ;
    const {notes,addNote}=context;
  return (
    <div>
      <AddNote/>
      <div className="row my-3">
    <h2>Your notes</h2>
    {notes.map((note)=>{
      return  <Noteitem key={note.id} note={note}/>;
    })}
    </div>
    </div>
  ) 
}

export default Notes
