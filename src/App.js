import {nanoid} from 'nanoid'
import './App.css';
import NoteList from './Components/NoteList';
import { useState } from 'react';
import Search from './Components/Search';

function App() {
  const[notes,setNotes]=useState([
    {
    id:nanoid(),
    text:"This is first",
    date:"15/04/2022"
  },
  {
    id:nanoid(),
    text:"This is first",
    date:"15/04/2022"
  }
  
]);
const[searchText,setSearchText]=useState('')

const addNote=(text)=>{
 const date=new Date();
 const newNote={
  id:nanoid(),
  text:text,
  date:date.toLocaleDateString()
 };
 const  newNotes=[...notes,newNote];
 setNotes(newNotes);
};
const deletNote=(id)=>{
const newNotes=notes.filter((note)=>note.id!==id);
setNotes(newNotes);
}
  return (
    <div className="container">
   <h1>Notes App</h1>   
   <Search handleSearchNote={setSearchText}/>
   <NoteList
    notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
     handleAddNote={addNote}
     handleDeleteNote={deletNote}/>
    </div>
  );
}

export default App;
