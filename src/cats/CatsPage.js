import { Component } from 'react';
import { getCats } from '../utils/resources.api';
import './CatsPage.css';
import CatList from './CatList';
import Loader from '../common/Loader';

export default class CatsPage extends Component {
    state = {
      cats: [],
      loading: true
    }

    


    async componentDidMount() {
      try {
        const cats = await getCats();
        this.setState({ cats: cats });
      }
      catch (err) {

      }
      finally {
        this.setState({ loading: false });
      }
           
        
    }


    render() {
      const { cats, loading } = this.state;
    
      return (
        <div className="CatsPage">
          <Loader loading={loading}/>
          <h2>List of Cats</h2>
    
          <CatList cats={cats}/>
            
        </div>
      );
    }
    
}