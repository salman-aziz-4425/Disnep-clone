import React from 'react';
import styled from 'styled-components';
function Viewers() {
  return(
  <Container>
     <Wrap>
         <img src='/images/viewers-disney.png' alt=""/>
         <video autoPlay={true} loop={true} playsInline={true}>
         <source src="/videos/1564674844-disney.mp4" type="video/mp4"/>
         </video>
     </Wrap>
     <Wrap>
         <img src='/images/viewers-pixar.png' alt=""/>
         <video autoPlay={true} loop={true} playsInline={true}>
         <source src="/videos/1564676714-pixar.mp4" type="video/mp4"/>
         </video>
     </Wrap>
     <Wrap>
         <img src='/images/viewers-marvel.png' alt=""/>
         <video autoPlay={true} loop={true} playsInline={true}>
         <source src="/videos/1564676115-marvel.mp4" type="video/mp4"/>
         </video>
     </Wrap>
     <Wrap>
         <img src='/images/viewers-starwars.png' alt=""/>
         <video autoPlay={true} loop={true} playsInline={true}>
         <source src="/videos/1608229455-star-wars.mp4" type="video/mp4"/>
         </video>
     </Wrap>
     <Wrap>
         <img src='/images/viewers-national.png' alt=""/>
         <video autoPlay={true} loop={true} playsInline={true}>
         <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4"/>
         </video>
     </Wrap>
  </Container>
  );
}

export default Viewers;

const Container=styled.div`
   margin-Top:30px;
   display:grid;
   padding:30px 0px 26px;
   grid-template-columns:repeat(5,minmax(0,1fr));
   grid-gap:25px;
`

const Wrap=styled.div`
border-radius:10px;
position:relative;
border:3px solid rgba(249,249,249,0.1);
box-shadow:rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
img{
    width:100%;
    height:100%;
    object-fit:cover;
    display:block;
}
video{
    border-radius:5px;
    width:100%;
    height:100%;
    object-fit:cover;
    position:absolute;
    top:0px;
    opacity:0;
    transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
}
&:hover{
    box-shadow:rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transform:scale(1.05);
    border-color:rgba(249,249,249,0.8);
    video{
        opacity:1;
    }
}
`