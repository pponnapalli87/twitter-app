import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css'

class Profile extends Component {
  constructor(props) {
    super(props)

    this.navigationHandler = this.navigationHandler.bind(this)
  }
  componentDidMount() {
    const { location: { state: { user: { screenName } } } } = this.props
    this.props.getUserTweets(screenName)
  }

  navigationHandler() {
    const { history, navigateToHome } = this.props
    navigateToHome(history);
  }

  render() {
    const {
      location: { state : { user: { name, profileImageUrl, followersCount, screenName } } }, tweets
    } = this.props

    return (
      <div className="profile">
        <img src={profileImageUrl} alt={name} />
        <p className="bold">{name}</p>
        <p>@{screenName}</p>
        <p className="bold">{followersCount}<span style={{ fontWeight: "normal" }}> Followers</span></p>
        {tweets && tweets.length > 0 && (
          <div className="tweets-container">
            <p className="bold">Tweets (Recent 5)</p>
            <ul>
              {tweets.map(({ id, text }) => (
                <li key={id}>{text}</li>
              ))}
            </ul>
          </div>
        )}
        <button onClick={this.navigationHandler}>Back</button>
      </div>
    );
  }
}

Profile.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        profileImageUrl: PropTypes.string.isRequired,
        followersCount: PropTypes.number.isRequired,
        screenName: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  tweets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }))
}

Profile.defaultProps = {
  tweets: []
}

export default Profile;
