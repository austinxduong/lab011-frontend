import { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  render() { 
    return (
      <header className="Header">

        <h1>React App</h1>

        <nav>
          <NavLink to="/" exact={true}> Home </NavLink>
          <NavLink to="/cats" exact={true}> See the List </NavLink>
        </nav>
        
      </header>
    );
  }

}
 
export default Header;