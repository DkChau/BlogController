import React, {useRef, useState, useEffect} from 'react'
import {Redirect} from 'react-router';

const LoginForm = () => {

    const usernameRef = useRef(null)
    const passwordRef = useRef(null)

    const [errors, setErrors] = useState([])
    const [success,setSuccess] = useState(false)
    const [redirect , setRedirect] = useState(false);

    //Maybe add response to already signed in;
    const submitForm = (e) =>{
        e.preventDefault();

        fetch('https://dcblogapi.herokuapp.com/api/login',{
            method:'POST',
            credentials:'include',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                username:usernameRef.current.value,
                password:passwordRef.current.value
            })
        })
        .then(data=>{
            return data.json()
        })
        .then(response=>{
            if(response.errors){
                setErrors(response.errors)
            }
            else{
                setErrors([])
                setSuccess(true);
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        if(success){
            setTimeout(()=>{
                setRedirect(true)
            },2000) 
        }
    },[success])

    if(redirect){
        return <Redirect to='/'></Redirect>
    }

    return (
        <form className='loginForm' type='submit'>
            <div className='successSection'>
                {success ? <div>Login successful, Redirecting shortly</div> : <></>}
            </div>
            <div className='errorSection'>
                {errors.map(error=>{
                    return (
                        <div>
                            {error.msg}
                        </div>
                    )
                })}
            </div>
            <div className='inputWrapper'>
                <div>Login</div>
                <div className='inputSection'>
                    <label for='username'>Username</label>
                    <input ref={usernameRef} id='username' name='username'></input>
                </div>
                <div className='inputSection'>
                    <label for='password'>Password</label>
                    <input ref={passwordRef} id='password' name='password'></input>
                </div>
                <button  className='submitBtn' onClick={submitForm}>Submit</button>
            </div>
        </form>
    )
}

export default LoginForm
