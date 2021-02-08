import React, {useState} from 'react'; 
import styled from 'styled-components'

export default function CreateNote(props) {

    const [note, setNote] = useState({
        title:"", 
        content:""
    })

    function handleChange(event){
      const{name, value} = event.target

      setNote(prevNote => {
          return{
          ...prevNote, [name]:value
      }})
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        event.preventDefault()
    }

    return (
        <NewNoteWrap>
            <form>
                <AddNoteWrapper>
                <input name="title" onChange={handleChange} value={note.title} placeholder="To Do Title"/>
                <textarea name="content" onChange={handleChange} value={note.content} placeholder="To Do Note" rows="2"/>
                <button onClick={submitNote}>Add</button>
                </AddNoteWrapper>
            </form>
            </NewNoteWrap>

    )
}

const NewNoteWrap = styled.div``

const AddNoteWrapper = styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
    position: relative;
    justify-content:center;
    text-align:center;

    input{
        border:0;
        width:400px;
        height:40px;
        border-top-right-radius:15px;
        border-top-left-radius:15px;
    }

    textarea {
        border:0;
        border-bottom-right-radius:15px;
        border-bottom-left-radius:15px;
        height:200px;
        width:400px;
        height:100px;
    }

    button{
    position: absolute;
    right: 18px;
    bottom: -18px;
    background: #f5ba13;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    outline: none;
    }
`
