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
            <div style={{ marginTop: "50px" }}>
                {this.state.dataSize === 0 ? (
                    <p>There is not data available</p>
                ) : (
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-around",
                            alignItems: "space-around",
                        }}
                    >
                        {this.state.data.map((item) => (
                            <Card
                                style={{
                                    width: "18rem",
                                    flexBasis: "22%",
                                    margin: "10px 0 10px 0",
                                }}
                            >
                                <Card.Body>
                                    <Card.Title>
                                        Day {item.day} - {item.date}
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        {item.major_topic}
                                    </Card.Subtitle>
                                    <Card.Text>{item.works}</Card.Text>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

export default Home;
