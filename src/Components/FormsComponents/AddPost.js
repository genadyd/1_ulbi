import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import PostFormButton from "../UiComponents/buttons/PostFormButton";

const AddPost = (props) => {

    const {posts, setPostList} = props /*posts list*/
    const newPostId = posts.length + 1
    const newPostUserId = 5
    const [newPostTitle, setNewPostTitle] = useState('') /*input control*/
    const [newPostText, setNewPostText] = useState('') /*input control*/
    const newPostObject = {
        userId: newPostUserId,
        id: newPostId,
        title: newPostTitle,
        body: newPostText
    }
    const addPost = (e) => {
        e.preventDefault()
        setPostList(() => [...posts, newPostObject])
        setNewPostTitle('')
        setNewPostText('')
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Post title</Form.Label>
                <Form.Control type="text" placeholder="Enter post title" onInput={e => setNewPostTitle(e.target.value)}
                              value={newPostTitle}/>
                <Form.Text className="text-muted">
                    Type the new post title here
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Post Text</Form.Label>
                <Form.Control type="text" placeholder="Post text" onInput={e => setNewPostText(e.target.value)}
                              value={newPostText}/>
            </Form.Group>
            {/*<Button variant="primary" type="submit" onClick={(e) => addPost(e)}>*/}
            {/*    Add Post*/}
            {/*</Button>*/}
            <PostFormButton title={"Add Post"} type={"submit"} handler={addPost}/>
        </Form>
    );
};

export default AddPost;
