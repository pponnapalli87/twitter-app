import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchBy: '',
      invalidSearch: false
    }
    this.searchHandler = this.searchHandler.bind(this)
  }

  searchHandler() {
    const { searchBy } = this.state
    if (searchBy.length >= 3) {
      this.setState({ invalidSearch: false }, () => {
        this.props.getUsers(searchBy)
      })
    } else {
      this.setState({ invalidSearch: true })
    }
  }

  render() {
    const { error, users } = this.props
    const { invalidSearch, searchBy } = this.state

    return (
      <div className="home-container">
        <div className="search-container">
          <h4>Search by Name/Location</h4>
          <input
            id="search-input"
            className="search"
            type="text"
            value={searchBy}
            onChange={(e) => this.setState({ searchBy: e.target.value })} />
          <button type="submit" className="search-button" onClick={this.searchHandler}>Search</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {invalidSearch && <p style={{ color: 'red' }}>Please enter atleast 3 characters to serach</p>}
        </div>
        {users && users.length > 0 && (
          <div className="results-container">
            {users.map(user => {
              const { name, profileImageUrl, id } = user;

              return (
                <div className="user" key={id}>
                  <img src={profileImageUrl} alt={name} />
                  <Link to={{
                    pathname: '/profile',
                    state: {
                      user
                    }
                  }}>
                    {name}
                  </Link>
                </div>
              )
            })}
          </div>
        )}
      </div>
    );
  }
}

Home.propTypes = {
  error: PropTypes.bool,
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    profileImageUrl: PropTypes.string.isRequired
  }))
}

Home.defaultProps = {
  error: false,
  users: []
}

export default Home;
