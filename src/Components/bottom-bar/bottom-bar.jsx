import React from "react";

const BottomBar = () => {
    return (
        <div
            style={{
                height: "20px",
                backgroundColor: "white",
                marginTop: "50px",
            }}
        >
            <p style={{ fontSize: ".7em" }}>
                &copy; {process.env.REACT_APP_USER_NAME}
            </p>
        </div>
    );
};

export default BottomBar;
