import { connect } from 'react-redux';
import Login from './../components/login';
import { logginAction } from '../actions';

const mapStateToProps = (state) => {
  return state.login;
};

const mapDispatchToProps = (dispatch) => ({
  logginAction: (values) => dispatch(logginAction(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
