import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contacts from '../Contact/Contacts'
import History from '../History/History'
import Navbar from '../NavBar/NavBar';


function App() {
    const [token, setToken] = useState();

    if (!token) {
        return (
            <div className="wrapper">
                <BrowserRouter>
                    <Navbar token={token} setToken={setToken} />
                    <p>Please Login</p>
                </BrowserRouter>
            </div>
        );
    }

    return (
        <div className="wrapper">
            <BrowserRouter>
                <Navbar token={token} setToken={setToken} />
                <h1>Application</h1>
                <Switch>
                    <Route path="/contact">
                        <Contacts tokenId={token.tokenId} />
                    </Route>
                    <Route path="/history">
                        <History />
                    </Route>

                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
