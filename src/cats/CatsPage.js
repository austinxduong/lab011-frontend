import { Component } from 'react';
import { getCats } from '../utils/resources.api';
import './CatsPage.css';
import CatList from './CatList';

export default class CatsPage extends Component {
    state = {
      cats: []
    }

    


    async componentDidMount() {
      const cats = await getCats();
      if (cats) {
        this.setState({ cats: cats });
      }
      else {
           
      }
        
    }


    render() {
      const { cats } = this.state;
    
      return (
        <div className="CatsPage">
          <h2>List of Cats</h2>
    
          <CatList cats={cats}/>
            
        </div>
      );
    }
    
}