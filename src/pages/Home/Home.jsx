import React, { Component } from "react";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            someState: "",
        };
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>This is the home page</p>
            </div>
        );
    }
}

export default Home;
