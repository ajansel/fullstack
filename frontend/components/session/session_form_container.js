import {connect} from 'react-redux';
import {login, signup, receiveSessionErrors} from '../../actions/session_actions';
import SessionForm from './session_form';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
  formType: ownProps.location.pathname.slice(1) // Get rid of "/" in front
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: ownProps.location.pathname.slice(1) === 'login' ?
      (user) => dispatch(login(user)) :
      (user) => dispatch(signup(user)),
    receiveSessionErrors: () => dispatch(receiveSessionErrors([])),
    login: (user) => dispatch(login(user))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SessionForm)
);
