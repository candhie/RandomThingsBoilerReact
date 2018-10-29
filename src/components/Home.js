import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props)
  }

  createUser() {
    this.props.addUserByAction({ name: 'Candhie', handphone: '+628123456789' })
  }

  updateUser() {
    this.props.updateUser({ name: 'Updated', handphone: '+628123456789' })
  }

	render() {
		return (
			<div id="home">
				THIS IS HOME
        <button onClick={() => this.createUser()}>
          Create User
        </button>
        <button onClick={() => this.updateUser()}>
          Update User
        </button>
        <button onClick={() => this.props.history.push('/user')}>
          User Route
        </button>
        <button onClick={() => this.props.history.push('/company')}>
          Company Route
        </button>
			</div>
		);
	}
}

export default Home;
