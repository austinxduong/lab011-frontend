import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  
  handleClick = () => {
    const { history } = this.props;
    history.push('cats/42');
  }
  render() {
    return (
      <div className="Home">
        <h2>Home Page</h2>

        <Link to='/cats'>See the List</Link>

        
      </div>
    );
  }

}