import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Layout from "./Layout/Layout";

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        };
    }
    render() {
        return (
            <div className="App">
                <Layout>
                    <Switch>
                        <Route path="/" component={Home} exact />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
