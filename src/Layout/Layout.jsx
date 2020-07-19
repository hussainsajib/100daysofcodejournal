import React from "react";
import BottomBar from "../Components/bottom-bar/bottom-bar";

const Layout = ({ children }) => {
    return (
        <div>
            <div>
                <div
                    style={{
                        width: "100vw",
                        background: "black",
                        color: "white",
                    }}
                >
                    <h1 style={{ marginBottom: "0" }}>
                        {process.env.REACT_APP_USER_NAME}
                    </h1>
                </div>
                <div
                    style={{
                        width: "100vw",
                        background: "lightgray",
                    }}
                >
                    <h1>100 Days Of Code</h1>
                </div>
            </div>
            {children}
            <BottomBar />
        </div>
    );
};

export default Layout;
