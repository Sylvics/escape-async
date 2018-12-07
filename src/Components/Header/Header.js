import React, {Component} from 'react';
import './Header.css'
import {Link} from 'react-router-dom'
class Header extends Component { 


    render(){
return(
    <div className='headContainer'>
    Welcome To Escape Async, where you can buy Digital Items
    <Link to='/'>Home</Link>
    <Link to='/cart'>Cart</Link>
    </div>
)
    }
}
export default Header;