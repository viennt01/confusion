import React from "react";

function Avatar(props) {
    return (
        <img src={props.name} alt={props.user.name}/>
    )
}
export default Avatar