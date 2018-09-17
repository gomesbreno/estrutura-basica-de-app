import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
//import firebase from 'firebase';

import Routes from './Routes';
import reducers from './reducers';


class App extends Component {

    componentWillMount() {
        const firebase = require("firebase");
        // Initialize Firebase
        let config = {
            apiKey: "AIzaSyB5u-rE3DvxuqjVk19A5F46XvfmpEx0QRg",
            authDomain: "whatsapp-clone-7b3f5.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-7b3f5.firebaseio.com",
            projectId: "whatsapp-clone-7b3f5",
            storageBucket: "whatsapp-clone-7b3f5.appspot.com",
            messagingSenderId: "810800688544"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        );
    } 
}


export default App;