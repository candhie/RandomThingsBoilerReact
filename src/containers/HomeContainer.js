import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import HomeComponent from '../components/Home';
import actions from '../actions/index';

class Home extends Component {
	render() {
		console.log('-----------------------');
		console.log(this.props.user);
		return (
			<div id="home">
				<Container>
					<HomeComponent 
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

const HomeContainer = connect(
	mapStateToProps, 
	mapDispatchToProps
)(Home);

export default HomeContainer;