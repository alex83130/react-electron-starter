//@flow

import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import NavigationBar from './NavigationBar'
import NavigationView from './NavigationView'
import { Provider } from 'react-redux'
import configureStore from './Store/configureStore';
const { store } = configureStore();

class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </header>

                    <NavigationBar/>
                    <NavigationView/>
                </Router>
            </Provider>
        );
    }
}


export default App;
