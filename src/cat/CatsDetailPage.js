import './CatsDetailPage.css';
import { Component } from 'react';
import { getCat, deleteCat } from '../utils/resources.api';
import { Link } from 'react-router-dom';

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


    handleDelete = async () => {
      const { cat } = this.state;
      const { history } = this.props;
  
      const confirmation = `Are you sure you want to delete ${cat.name}?`;
  
      if (!window.confirm(confirmation)) { return; }
  
      try {
        this.setState({ loading : true });
        await deleteCat(cat.id);
        history.push('/cats');
      }
      catch (err) {
        this.setState({ loading : false });
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


          <button className="delete" onClick={this.handleDelete}>
            Delete this Cat
          </button>

          <Link to={`/cats/${cat.id}/edit`}>
            Edit this cat
          </Link>

        </div>
      );
    }
}