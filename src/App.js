import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './index.css'
import Header from './components/Header';
import Profile from './components/Profile/Container';
import Home from './components/Home/Container';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history: this.props.history
    }
  }

  render() {
    const { history } = this.state

    return (
      <div className="container">
        <Header history={this.props.history} />
        <div className="child-container">
          <Route exact path="/" component={Home} />
          <Route
            path="/profile"
            render={props => <Profile history={history} {...props} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
