import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import UserComponent from '../components/User';
import actions from '../actions/index';

class User extends Component {
	render() {
		return (
			<div id="home">
				<Container>
					<UserComponent 
						{...this.props}
					/>
				</Container>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return({
			addUserByAction: (user) => { dispatch(actions.addUser(user)) },
			updateUser: (user) => { dispatch(actions.updateUser(user)) }
	})
}

const mapStateToProps = (state) => {
	return({ 
		userToken: state.user.token,
		user: state.user.user
	});
}

const UserContainer = connect(
	mapStateToProps, 
	mapDispatchToProps
)(User);

export default UserContainer;
