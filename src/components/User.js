import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props)
  }

	render() {
		return (
			<div id="user">
				<h1>USER ROUTE</h1>
				<button onClick={this.props.history.goBack}>Go BACK</button>
				<button onClick={() => this.props.history.push('/company')}>
          User Route
        </button>
			</div>
		);
	}
}

export default User;
