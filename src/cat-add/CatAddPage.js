import { Component } from 'react';
import './CatAddPage.css';
import { addCat } from '../utils/resources.api';
import CatForm from '../common/CatForm';
// import { render } from '@testing-library/react';

export default class CatAddPage extends Component {
    state = {
      loading: false
    
    }

handleAdd = async catToAdd => {
  const { history } = this.props;

  try {
    this.setState({ loading: true });

    const newCat = await addCat(catToAdd);

    history.push(`/cats/${newCat.id}`);
  }
  catch (err) {
    this.setState({ loading: false });

  }
}

render() {
  return (
    <div className="CatAddPage">
      <h2> Add a Cat </h2>
      <CatForm onSubmit={this.handleAdd}/>
    </div>
  );

}

};

