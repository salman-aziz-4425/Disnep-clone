import React from 'react';
import styled from 'styled-components'
function Header()
 {
  return(
   <Nav>
   <Logo src="/images/logo.svg"/>
   <NavMenu>
    <a>
    <img src='/images/home-icon.svg' alt=""/>
    <span>Home</span>
   </a>
   <a>
    <img src='/images/search-icon.svg' alt=""/>
    <span>SEARCH</span>
   </a>
   <a>
    <img src='/images/watchlist-icon.svg' alt=""/>
    <span>WATCHLIST</span>
   </a>
   <a>
    <img src='/images/original-icon.svg' alt=""/>
    <span>ORIGINAL</span>
   </a>
   <a>
    <img src='/images/movie-icon.svg' alt=""/>
    <span>MOVIES</span>
   </a>
   <a>
    <img src='/images/series-icon.svg' alt=""/>
    <span>SERIES</span>
   </a>
   </NavMenu>
   <UserImg src="https://th.bing.com/th/id/R.28f3a9dd2585b0bf44da382a889255f5?rik=C9rT884wiMtOmg&pid=ImgRaw&r=0"/>
   </Nav>
  )
}

export default Header
const Nav=styled.div`
        height:70px;
        background:#090b13;
        display:flex;
       align-items:center;
       padding:0 36px;
       overflow-x:hidden;
`
const Logo=styled.img`
    width:80px;
`
const NavMenu=styled.div`
   display:flex;
   flex:1;
   margin-left:25px;
   align-items:center;
   a{
       display:flex;
       align-items:center;
       padding:0 12px;
       cursor:pointer;
       img{
           height:20px;
       }
       span{
           font-size:13px;
           letter-spacing:1.42px;
           position:relative;
           &:after{
            content:"";
            height:2px;
            background:white;
            position:absolute;
            left:0;
            right:0;
            bottom:-6px;
            opacity:0;
            transform:scaleX(0);
            transition:transform 0.3s ease-out;
         }
       }
       &:hover {
           span:after{
               transform:scaleX(1);
               opacity:1;
           }
       }
   }
    
`
const UserImg=styled.img`
width:40px;
height:48px;
border-radius:50%;
cursor:pointer;
     
`