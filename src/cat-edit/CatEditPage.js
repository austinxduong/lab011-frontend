import { getCat, updateCat } from '../utils/resources.api';
import CatForm from '../common/CatForm';
import { Component } from 'react';

export default class CatEditPage extends Component {
    state = {
      cat: null,
      loading: true
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
  
    handleUpdate = async cat => {
      const { history } = this.props;
  
      try {
        this.setState({ loading: true });
        const updatedCat = await updateCat(cat);
        history.push(`/cats/${updatedCat.id}`);
      }
      catch (err) {
        this.setState({ loading: false });
      }
    }
  
    render() {
      const { cat } = this.state;
  
      return (
        <div className="CatEditPage">
          <h2>Edit Cat</h2>
  
          {cat && <CatForm cat={cat} onSubmit={this.handleUpdate}/>}
        </div>
      );
    }
  
}