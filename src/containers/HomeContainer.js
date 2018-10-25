import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import HomeComponent from '../components/Home';
import { addUser } from '../actions/userActions';

class Home extends Component {
	render() {
		return (
			<div id="home">
				<Container>
					<HomeComponent 
						addUserByAction={this.props.addUserByAction}
					/>
				</Container>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return({
			addUserByAction: (user) => { dispatch(addUser(user)) }
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