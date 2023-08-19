
import React ,{useContext} from 'react'
import Noteitem from './Noteitem';
import noteContext from "../Context/notes/noteContext"
// import Not
const Notes = () => {
    const context = useContext(noteContext) ;
    const {notes,setNotes}=context;
  return (
    <div>
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