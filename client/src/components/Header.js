import React from 'react';
import {Link} from 'react-router-dom';
import '../style/Header.css';


export default function Header(props){
return( 



<>


<div id= "headerContainer">
<Link to="/" id="homelink"> Home </Link> 
<Link to="/about" id="aboutlink"> About </Link> 
<Link to="/cart" id="cartlink"> Fitness Class Cart</Link>


</div>
</>
)

}