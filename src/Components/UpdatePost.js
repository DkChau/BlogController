import React, {useState, useEffect, useRef} from 'react'
import {Redirect} from 'react-router';

const UpdatePost = (props) => {

    const [post, setPost] = useState({})
    const [errors, setErrors] = useState([])
    const [Loading, setLoading] = useState(true);

    const titleRef = useRef(null)
    const textRef = useRef(null)


    //Initial Api call to get post and comments
    useEffect(()=>{
        fetch(`https://dcblogapi.herokuapp.com/api/post/${props.match.params.id}`)
            .then(data=>{
                return data.json()
            })
            .then(response=>{
                // console.log(response)
                setPost(response)
                setLoading(false);
            })
            .catch(err=>{
                console.log(err);
            })
    },[])

    const updatePost = (e) =>{
        e.preventDefault();

        fetch(`https://dcblogapi.herokuapp.com/api/post/${props.match.params.id}`,{
            method:'PUT',
            credentials:'include',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                title:titleRef.current.value,
                text:textRef.current.value
            })
        })
        .then(data=>{
            return data.json()
        })
        .then(response=>{
            console.log(response)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <div>
            <form>
                <input ref={titleRef} defaultValue={post.title}></input>
                <input ref={textRef} defaultValue={post.text}></input>
                <button onClick={updatePost}>Update post</button>
            </form>
        </div>
    )
}

export default UpdatePost
