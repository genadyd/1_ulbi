import React, {useEffect, useState} from 'react';
import axios from "axios";
import Post from "./Post";
import {getPosts} from "../../Api/Posts";
import AddPost from "../FormsComponents/AddPost";


const PostsList = () => {
    const [posts, setPostsList] = useState([])


    useEffect(() => {
        getPosts().then(responce => {
            let resPosts = responce.data.filter((item, index) => index < 20)
            setPostsList(resPosts)
        })
            .catch(e => console.error(`Error: ${e}`))
    }, [])

    return (
            <div className="container border pb-2">
                <AddPost posts={posts} setPostList={setPostsList}/>
                <hr/>
                <h3>Posts List</h3>
                {posts.map((post => <Post key={post.id} {...post}/>))}
            </div>
    )
}

export default PostsList;
