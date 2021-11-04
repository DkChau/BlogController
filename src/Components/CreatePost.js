import React, {useState, useRef} from 'react'
import {Redirect} from 'react-router';

const CreatePost = () => {

    const titleRef = useRef(null);
    const textRef = useRef(null);

    const [redirect, setRedirect] = useState(false);
    const [errors, setErrors] = useState([])

    const createPost = (e) =>{
        e.preventDefault();

        fetch('http://localhost:3000/api/post', {
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
            console.log(response);
            if(response.errors){
                setErrors(response.errors)
            }
            else{
                setRedirect(true);
            }
        })
        .catch(err=>{
            throw new Error(err)
        })
    }

    if(redirect){
        return (<Redirect to='/'></Redirect>)
    }

    return (
        <div>
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

                <label for='title'>Title</label>
                <input ref={titleRef} type='text' id='title' name='title'></input>

                <label for='text'>Text</label>
                <input ref={textRef} type='text' id='text' name='text'></input>

                <button onClick={createPost} type='submit'>Submit</button>
            </form>
        </div>

    )
}

export default CreatePost
