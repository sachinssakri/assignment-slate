import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar shadow fixed-top navbar-expand-sm navbar-dark bg-dark'>
          <div className='container'>
            <Link to='/' className='navbar-brand'>
              User Data Management
            </Link>
            <div>
              <Link to='/users/add' className='btn btn-light ml-auto'>
                Create Users
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
