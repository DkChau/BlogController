import React, {useState, useRef, useEffect} from 'react'
import {Redirect} from 'react-router';

const CreatePost = () => {

    const titleRef = useRef(null);
    const textRef = useRef(null);

    const [redirect, setRedirect] = useState(false);
    const [errors, setErrors] = useState([])
    const [route, setRoute] = useState('');

    const createPost = (e) =>{
        e.preventDefault();

        fetch('https://dcblogapi.herokuapp.com/api/post', {
            method:'POST',
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
            return data.json();
        })
        .then(response=>{
            console.log(response);//
            if(response.errors){
                setErrors(response.errors)
            }
            else{
                setRoute(response._id);
            }
        })
        .catch(err=>{
            throw new Error(err)
        })
    }

    //Get new post route and redirect to it
    useEffect(()=>{
        if(route!==''){
            setRedirect(true)
        }
    },[route])

    if(redirect){
        return (<Redirect to={`/post/${route}`}></Redirect>)
    }

    return (
        <div className='formContainer'>
            <div className='errorContainer'>
                {errors.map(error=>{
                    return (
                        <div>
                            {error.msg}
                        </div>
                    )
                })}
            </div>
            <form className='submitForm' type='submit'>
                <div className='title'>Create Post</div>
                <label htmlFor='title'>Title</label>
                <input ref={titleRef} type='text' id='title' name='title'></input>

                <label htmlFor='text'>Text</label>
                <textarea ref={textRef} className='textArea' type='text' id='text' name='text'></textarea>

                <button className='createBtn' onClick={createPost} type='submit'>Submit</button>
            </form>
        </div>

    )
}

export default CreatePost
