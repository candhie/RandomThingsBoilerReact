import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props)

    this.homeClick = this.homeClick.bind(this);
  }

  homeClick() {
    this.props.addUserByAction({ name: 'Candhie', handphone: '+628123456789' })
  }

	render() {
		return (
			<div id="home">
				THIS IS HOME
        <button onClick={this.homeClick}>
          Create User
        </button>
			</div>
		);
	}
}

export default Home;
