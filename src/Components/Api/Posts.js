import axios from "axios";

export async function getPosts(){
    return await axios.get('https://jsonplaceholder.typicode.com/posts')
}
