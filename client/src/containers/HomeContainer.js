import { connect } from 'react-redux';
import { registerUser } from '../actions';
import Home from '../components/home';

const mapStateToProps = (state) => {
  return state.login;
};

const mapDispatchToProps = (dispatch) => ({
  registerUser: (data) => dispatch(registerUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
