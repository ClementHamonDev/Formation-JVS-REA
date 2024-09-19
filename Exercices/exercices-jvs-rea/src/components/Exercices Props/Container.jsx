import React from 'react';

function Container(props) {
    return <div style={{ border: "10px solid black", margin: "10px" }}>{props.children}</div>;
}

export default Container;