import React, { Component } from "react";
import Tabletop from "tabletop";
import { Card, Button } from "react-bootstrap";

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
                                bg="secondary"
                                style={{
                                    width: "18rem",
                                    flexBasis: "22%",
                                    margin: "10px 0 10px 0",
                                }}
                            >
                                <Card.Header
                                    style={{
                                        fontSize: "1.1em",
                                        color: "white",
                                    }}
                                >
                                    Day {item.day} - {item.date}
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>{item.major_topic}</Card.Title>
                                    <Card.Text>{item.works}</Card.Text>
                                    <div style={{ width: "100%" }}>
                                        <Button
                                            variant="outline-primary"
                                            size="sm"
                                            style={{ margin: "5px" }}
                                        >
                                            <a
                                                href=""
                                                style={{ color: "white" }}
                                            >
                                                GitHub
                                            </a>
                                        </Button>
                                    </div>
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
