import { connect } from 'react-redux';
import { getUserTweets } from '../../actions/tweets';
import { navigateToHome } from '../../actions/users'
import Profile from '.';

const mapStateToProps = ({ tweets: { tweets, error, loading } }) => {
  return { error, loading, tweets };
};

const mapDispatchToProps = dispatch => ({
  getUserTweets: (screenName) => {
    dispatch(getUserTweets(screenName));
  },
  navigateToHome: (history) => {
    dispatch(navigateToHome(history));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
