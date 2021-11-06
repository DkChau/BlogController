import React, {useState, useEffect, useRef} from 'react'
import {Redirect} from 'react-router';

const UpdatePost = (props) => {

    const [post, setPost] = useState({})
    const [errors, setErrors] = useState([])
    const [Loading, setLoading] = useState(true);
    const [redirect ,setRedirect] = useState(false);

    const titleRef = useRef(null)
    const textRef = useRef(null)
    const publishRef = useRef(null)


    //Initial Api call to get post and comments
    useEffect(()=>{
        fetch(`https://dcblogapi.herokuapp.com/api/post/${props.match.params.id}`, {credentials:'include'})
            .then(data=>{
                return data.json()
            })
            .then(response=>{
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
                text:textRef.current.value,
                published:publishRef.current.checked
            })
        })
        .then(data=>{
            return data.json()
        })
        .then(response=>{
            console.log(response)
            setRedirect(true);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    if(redirect){
        return <Redirect to={`/post/${props.match.params.id}`}></Redirect>
    }

    return (
        <div className='formContainer'>
            <form className='submitForm' type='submit'>
                <div className='title'>Update Post</div>
                <label htmlFor='title'>Title: </label>
                <input ref={titleRef} type='text' id='title' name='title' defaultValue={post.title}></input>

                <label htmlFor='text'>Text: </label>
                <textarea ref={textRef} className='textArea' type='text' id='text' name='text' defaultValue={post.text}></textarea>
                
                <div className='checker'>
                    <label htmlFor='checkBox'>Publish: </label>
                    <input ref={publishRef} type='checkbox' id='checkBox' defaultChecked={post.published}></input>
                </div>

                <button onClick={updatePost}>Update post</button>
            </form>
        </div>
    )
}

export default UpdatePost
