import './CatsDetailPage.css';
import { Component } from 'react';
import { getCat } from '../utils/resources.api';

export default class CatDetailPage extends Component {
    state = {
      cat: null
    }


    async componentDidMount() {
      const { match } = this.props;
      try {
        const cat = await getCat(match.params.id);
        this.setState({ cat: cat });
      }
      catch (err) {
      }
      finally {
        this.setState({ loading: false });
      }

    
    }

    render() {
      const { cat } = this.state;

      if (!cat) return null;

      return (
        <div className="CatDetail">
          <h2>Cat Detail Page</h2>

          <img src={cat.url} alt={cat.name}/>

          <p> Cat name: {cat.name}</p>
          <p> Cat lives: {cat.lives}</p>
          <p> Cat year: {cat.year}</p>
          <p> Owner: {cat.userName}</p>
        </div>
      );
    }
}