import axios from "axios"
import { getPost } from "../actions"
import Post from "../components/Post"
const URL = "https://jsonplaceholder.typicode.com/posts"

const fetchingPosts=()=> {
    return (dispatch) => {
        
        axios.get(URL)
        .then((response)=> {
            console.log(response)
            dispatch(getPost(response.data))
        })
        .catch((error)=> {
            console.log(error)
        })
    }
 } 
 export {fetchingPosts}