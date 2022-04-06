import React from 'react';

const Post = (props) => {
    return (
        <div className="post d-flex justify-content-start py-1 px-1 align-items-center">
            <div className="id_box"><strong>{props.id}.</strong></div>
            <div className="title" style={{marginLeft: "1em"}}>{props.title}</div>
        </div>
    );
};

export default Post;
