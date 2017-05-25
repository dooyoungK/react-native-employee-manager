import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import configureStore from './reducers/configureStore';
import Router from './Router';


const store = configureStore();


class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: Config.API_KEY,
            authDomain: Config.AUTH_DOMAIN,
            databaseURL: Config.DB_URL,
            projectId: Config.PROJECT_ID,
            storageBucket: Config.STORAGE_BUCKET,
            messagingSenderId: Config.MESSAGING_SENDER_ID
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
