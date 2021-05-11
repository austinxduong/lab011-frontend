import './CatList.css';
import CatItem from './CatItem';
import React, { Component } from 'react';


class CatList extends Component {
  
  render() { 
    const { cats } = this.props;
  
    return (
      <ul className="CatList">
        {cats.map(cat => (
          <CatItem key={cat.id} cat={cat}/>
        ))}
      </ul>
    );
  }
  
  
}

export default CatList;