import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg" >
             <Link to="/" className="navbar-brand">Product Management</Link> 
             <div className="collapse navbar-collapse">
                 <ul className="navbar-nav">
                     <li className="navbar-item">
                     <Link to="/" className="nav-link">Product List</Link>
                     </li>
                     <li className="navbar-item">
                     <Link to="/create" className="nav-link">Create Product</Link>
                     </li>
                     <li className="navbar-item">
                     <Link to="/user" className="nav-link">Create User</Link>
                     </li>

                 </ul>
             </div>  
            </nav>
        )
    }
}

export default Navbar;