import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './CatItem.css';

class CatItem extends Component {

  render() {
    const cat = this.props.cat;

    return (
      <li className="CatItem">
        <Link to={`/cats/${cat.id}`}>
          <h2> {cat.name} </h2>
          <img src={cat.url} alt ={cat.name}/>
          <p>lives: {cat.lives}</p>
        </Link>        
      </li>
    );
  }

}

export default CatItem;