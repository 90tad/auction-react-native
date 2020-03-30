import React, {Component} from 'react';
import AppContext from './AppContext';
import {signIn} from '../api_service/signIn';

class AppProvider extends Component {
  state = {
    isUserSignIned: false,
    currentUser: null,
    pendingRequest: false,
    signIn: () => {
      this.setState({pendingRequest: true});
      signIn()
        .then(response => {
          this.setState({currentUser: response});
          this.setState({pendingRequest: false});
          this.setState({isUserSignIned: true});
        })
        .catch(error => {
          console.log(`signInError: ${error}`);
        });
    },
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
