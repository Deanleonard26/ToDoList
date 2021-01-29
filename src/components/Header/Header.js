import React, { Component } from 'react';
import styled from 'styled-components';

export default class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
            <h1>THings To Do</h1>
            </HeaderWrapper>
        )
    }
}

const HeaderWrapper = styled.div `
height:90px;
width:100%;
background-color:rgb(252, 182, 3);
color:white;
font-weight:800;
font-size:20px;
margin:0;
padding:0;
display:flex;
text-align:left;
align-items:center;
box-shadow: 10px 2px 15px 5px rgb(0, 0, 0, .2);

h1 {
    margin-left:50px;
}
`