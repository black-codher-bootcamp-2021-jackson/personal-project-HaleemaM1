import React from 'react';
import {Link} from 'react-router-dom';
import '../style/Header.css';


export default function Header(props){
return( 



<>

<header className ="Header">
<div id= "headerContainer">
<Link to="/" id="homelink"> Home </Link> 
<Link to="/about" id="aboutlink"> About </Link> 
<Link to="/cart" id="cartlink"> Sign up</Link>
<Link to="/login" id="loginlink"> Login</Link>


</div>
</header>
</>
)

}