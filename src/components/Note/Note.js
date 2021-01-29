import React from 'react';
import styled from 'styled-components';

export default function Note(props) {
    return (
        <NoteSection>
        <NoteWrapper>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </NoteWrapper>
        </NoteSection>
    )
}

const NoteSection = styled.div`
`

const NoteWrapper = styled.div`
width:300px;
height:auto;
background-color:white;
border-radius:10px;
box-shadow:2px 5px 15px 0px rgb(0,0,0,.4);
margin:20px;


h3 {
    margin:10px;
}

p {
    margin:0;
    padding:0;
}
`