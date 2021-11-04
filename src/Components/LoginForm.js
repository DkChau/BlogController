import React, {useRef} from 'react'

const LoginForm = () => {

    const usernameRef = useRef(null)
    const passwordRef = useRef(null)

    const submitForm = (e) =>{
        e.preventDefault();

        fetch('http://localhost:3000/api/login',{
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
            // console.log(response)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <form className='submitForm' type='submit'>
            <input ref={usernameRef}></input>
            <input ref={passwordRef}></input>
            <button onClick={submitForm}>Submit</button>
        </form>
    )
}

export default LoginForm
