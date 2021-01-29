import React from 'react'; 
import styled from 'styled-components';

const getCurrentYear = () => {
    return new Date().getFullYear();
  };


export default function Footer() {
    return (
        <FooterWrapper>
            <p>Copyright Keeper App {getCurrentYear()} </p>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div `
bottom:5px;
width:100%;
position:fixed;
display:flex;
justify-content:center;
color:gray`
