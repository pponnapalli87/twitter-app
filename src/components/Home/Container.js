import { connect } from 'react-redux';
import { getUsers } from '../../actions/users';
import Home from '.';

const mapStateToProps = ({ users: { users, error, loading } }) => {
  return { error, loading, users };
};

const mapDispatchToProps = dispatch => ({
  getUsers: (searchBy) => {
    dispatch(getUsers(searchBy));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
