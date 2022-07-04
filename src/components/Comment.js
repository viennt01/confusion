import React from "react";

function formatComment(date) {
    return date.toLocaleDateString();
}

//create a new component "Comment"
function Comment(props) {
    return(
        <div>
            <div>
                <img src={props.author.avatarUrl} alt={props.author.name} />
                <div>{props.author.name}</div>
            </div>
            <div>{props.text}</div>
            <div>{formatComment(props.date)}</div>
        </div>
    );
}
export default Comment