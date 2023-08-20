import React,{useContext,useState} from 'react'
import noteContext from "../Context/notes/noteContext"
const AddNote = () => {
    const context = useContext(noteContext) ;
    const {addNote}=context;
const [note,setNote]=useState({title:"",description:""})

    const handleClick=(e)=>{
        e.preventDefault();
      addNote(note.title,note.description)  
    }
    const onChange=(e)=>{
         setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div>
       <div className="container my-3">
    <h1>Add a note</h1>
    <form className='my-3'>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title of your Note:</label>
    <input type="text" className="form-control" name="title" id="title" aria-describedby="emailHelp"onChange={onChange}/>
    {/* <div id="titlehelp" className="form-text">We'll save it for you for your future.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description:</label>
    <input type="text" className="form-control" id="description" onChange={onChange}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" name="description" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onclick={handleClick}>Submit</button>
</form></div> 
    </div>
  )
}

export default AddNote
