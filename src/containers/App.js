// routes
import routes from '../routes';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store, { history } from '../store';
import { ConnectedRouter } from 'react-router-redux';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div className="App">
            <div className="wrap">
              {routes}
            </div>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;