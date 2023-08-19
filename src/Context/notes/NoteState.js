import { useState } from "react";
import NoteContext from "./noteContext";
import props from 'prop-types';
// import { useState } from "react";
const NoteState = (props) => {
  const notesInitial = 
    [
        {
          "_id": "64df3aa73131aa692e096c87",
          "user": "64ddff93da38819de7b90ba5",
          "title": "my text",
          "description": "do your work",
          "__v": 0
        },
        {
          "_id": "64df3ce83131aa692e096c89",
          "user": "64ddff93da38819de7b90ba5",
          "title": "my text",
          "description": "do your work",
          "__v": 0
        },
        {
          "_id": "64df4f14783b2675d0de6e4d",
          "user": "64ddff93da38819de7b90ba5",
          "title": "my text",
          "description": "do your work",
          "__v": 0
        },
        {
          "_id": "64df50622c0f847d972a0c9d",
          "user": "64ddff93da38819de7b90ba5",
          "title": "my text",
          "description": "do your work",
          "__v": 0
        },
        {
          "_id": "64df50662c0f847d972a0c9f",
          "user": "64ddff93da38819de7b90ba5",
          "title": "my text",
          "description": "do your work",
          "__v": 0
        },
        {
          "_id": "64df506d2c0f847d972a0ca1",
          "user": "64ddff93da38819de7b90ba5",
          "title": "my text]",
          "description": "do your work",
          "__v": 0
        },
        {
          "_id": "64df50d72c0f847d972a0caa",
          "user": "64ddff93da38819de7b90ba5",
          "title": "my ram",
          "description": "do yk",
          "__v": 0
        }
      ]
  
const[notes,setNotes]=useState(notesInitial)
  return (
    // console.log("error")
    <NoteContext.Provider value={{notes,setNotes}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState();
