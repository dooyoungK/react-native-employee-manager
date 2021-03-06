import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import configureStore from './reducers/configureStore';
import Router from './Router';


const store = configureStore();


class App extends Component {

    componentWillMount() {
        const config = {
            /*YOUR FIREBASE CONFIGURATION*/
          };

        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
