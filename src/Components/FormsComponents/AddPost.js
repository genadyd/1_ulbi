import React from 'react';
import {Button, Form} from "react-bootstrap";

const AddPost = (props) => {

    const {posts, setPostList} = props
    console.log(posts)
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Post title</Form.Label>
                <Form.Control type="text" placeholder="Enter post title" />
                <Form.Text className="text-muted">
                    Type the new post title here
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Post Text</Form.Label>
                <Form.Control type="text" placeholder="Post text" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add Post
            </Button>
        </Form>
    );
};

export default AddPost;
