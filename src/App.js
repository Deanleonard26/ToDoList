import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Note from './components/Note/Note';
import notes from './components/Note/notes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='notesSection'>
      {notes.map(noteItem => (
      <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      </div>
      <Footer/>
    </div>
  );
}

export default App;

