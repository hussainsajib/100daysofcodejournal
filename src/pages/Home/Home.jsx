import React, { Component } from "react";
import Tabletop from "tabletop";
import { Card } from "react-bootstrap";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            dataSize: 0,
        };
    }

    componentDidMount() {
        Tabletop.init({
            key: process.env.REACT_APP_GOOGLE_SHEET_KEY,
            callback: (googleData) => {
                this.setState({
                    data: googleData,
                    dataSize: googleData.length,
                });
            },
            simpleSheet: true,
        });
    }

    render() {
        return (
            <div>
                <h1>100 Days of Code</h1>
                {this.state.dataSize === 0 ? (
                    <p>There is not data available</p>
                ) : (
                    this.state.data.map((item) => (
                        <Card style={{ width: "18rem" }}>
                            <Card.Body>
                                <Card.Title>Day {item.day}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    {item.date}
                                </Card.Subtitle>
                                <Card.Text>{item.works}</Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    ))
                )}
            </div>
        );
    }
}

export default Home;
