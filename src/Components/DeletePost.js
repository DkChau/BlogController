import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';

const DeletePost = (props) => {

    const [post, setPost] = useState({})
    const [errors, setErrors] = useState([])
    const [Loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [redirect, setRedirect] = useState(false)

    //Initial Api call to get post and comments
    useEffect(()=>{
        fetch(`https://dcblogapi.herokuapp.com/api/post/${props.match.params.id}`, {credentials:'include'})
            .then(data=>{
                return data.json()
            })
            .then(response=>{
                console.log(response)
                setPost(response)
                setLoading(false);
            })
            .catch(err=>{
                console.log(err);
            })
    },[])

    const deletePost = (e) =>{
        e.preventDefault();

        fetch(
            `https://dcblogapi.herokuapp.com/api/post/${props.match.params.id}`,
            {
                method:'DELETE',
                credentials:'include',
            }
        )
        //VERY UNFINISHED
        .then(data=>{
            return data.json()
        })
        .then(response=>{
            console.log(response);
            setRedirect(true);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    if(Loading){
        return <div>Loading</div>
    }
    if(redirect){
        return(
            <Redirect to={`/`}></Redirect>
        )
    }

    return (
        <div className='DeletePost'>
            <div className='viewPost'>
                <div className='textContainer'>
                    <div className='viewTitle'>{post.title}</div>
                    <div className='viewText'>{post.text}</div>
                    
                </div>
                <div className='viewBottom'>
                    <div className='viewDate'>Published: {post.date}</div>
                </div>

            </div>
            <div className='deleteSection'>
                <button onClick={()=>{setShow(true)}}>Delete this comment?</button>
                {
                    show ? 
                    <div>
                        <button onClick={deletePost}>Confirm</button>
                        <button onClick={()=>{setShow(false)}}>Cancel</button>
                    </div>
                    :
                    <></>
                }
            </div>

        </div>
    )
}

export default DeletePost
