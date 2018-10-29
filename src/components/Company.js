import React, { Component } from 'react';

class Company extends Component {	
  constructor(props) {
    super(props)
  }

	render() {
		return (
			<div id="company">
				<h1>Company ROUTE</h1>
				<button onClick={this.props.history.goBack}>Go BACK</button>
        <button onClick={() => this.props.history.push('/user')}>
          User Route
        </button>
			</div>
		);
	}
}

export default Company;
