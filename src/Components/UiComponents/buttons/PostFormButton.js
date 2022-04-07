import React from 'react';
import classes from "./PostFormButton.module.scss";

const PostFormButton = (props) => {
    return (
        <button className={classes.myBtn} type={props.type} onClick={e => props.handler(e)}>
            {props.title}
        </button>
    );
};

export default PostFormButton;
