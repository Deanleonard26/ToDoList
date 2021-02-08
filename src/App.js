import React, {useState} from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Note from './components/Note/Note';
import notes from './components/Note/notes';
import CreateNote from './components/CreateNote/CreateNote'
import './App.css';

function App() {

  const [notes, setNotes] = useState([])

  function addNote(note){
    setNotes(prevNotes => {
      return [...prevNotes, note]
    })
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter(( noteItem, index) => {
       return index!== id;
      })
    })
  }

  return (
    <div className="App">
      <Header/>
      <div className='notesSection'>
      <CreateNote onAdd={addNote}/>
      {notes.map((noteItem, index) => {
        return <Note 
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      })}
      </div>
      <Footer/>
    </div>
  );
}

export default App;

