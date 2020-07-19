import React, { Component } from "react";
import Tabletop from "tabletop";
import { Card, Button } from "react-bootstrap";
import Loading from "../../images/loading.gif";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            dataSize: 0,
            dataLoading: false,
        };
    }

    componentDidMount() {
        this.setState({ dataLoading: true }, () =>
            console.log("data is loading")
        );
        Tabletop.init({
            key: process.env.REACT_APP_GOOGLE_SHEET_KEY,
            callback: (googleData) => {
                this.setState({
                    data: googleData,
                    dataSize: googleData.length,
                    dataLoading: false,
                });
            },
            simpleSheet: true,
        });
    }

    render() {
        return (
            <div style={{ marginTop: "50px" }}>
                {this.state.dataSize === 0 ? (
                    this.state.dataLoading ? (
                        <img src={Loading} alt="loading data" height="50px" />
                    ) : (
                        <p>There is not data available</p>
                    )
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
                                    <div>
                                        {item.github ? (
                                            <Button
                                                variant="info"
                                                size="sm"
                                                style={{ margin: "5px" }}
                                            >
                                                <a
                                                    href={item.github}
                                                    style={{ color: "white" }}
                                                >
                                                    GitHub
                                                </a>
                                            </Button>
                                        ) : null}
                                        {item.live ? (
                                            <Button
                                                variant="info"
                                                size="sm"
                                                style={{ margin: "5px" }}
                                            >
                                                <a
                                                    href={item.live}
                                                    style={{ color: "white" }}
                                                >
                                                    Demo
                                                </a>
                                            </Button>
                                        ) : null}
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
