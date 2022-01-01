import React, {useEffect, useState} from 'react'
import {Redirect} from 'react-router';

const DeleteComment = (props) => {

    const [comment, setComment] = useState({})
    const [errors, setErrors] = useState({})
    const [show, setShow] = useState(false);
    const [redirect, setRedirect] = useState(false)

    useEffect(()=>{
        fetch(
            `https://dcblogapi.herokuapp.com/api/post/${props.match.params.id}/comment/${props.match.params.commentId}`,
            {
                credentials:'include'
            }
        )
        .then(data=>{
            return data.json()
        })
        .then(response=>{
            if(response.errors){
                setErrors(response.errors)
            }
            else{
                setComment(response)
            }
        })
        .catch(err=>{
            console.log(err)
        })

    },[])

    const deleteComment = ( e )=>{
        e.preventDefault();

        fetch(
            `https://dcblogapi.herokuapp.com/api/post/${props.match.params.id}/comment/${props.match.params.commentId}`,
            {
                method:'DELETE',
                credentials:'include',
            }
        )
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

    if(redirect){
        return(
            <Redirect to={`/post/${props.match.params.id}`}></Redirect>
        )
    }

    return (
        <div className='deleteContainer'>
            <div className='deleteComment'>
                <div className='comment delete'>
                    <div className='commentHead'>
                        <div className='commentName'>{comment.name}</div>
                        <div className='commentDate'>Submitted: {comment.date_formatted}</div>
                    </div>

                    <div className='commentText'>{comment.text}</div>
                </div>
            </div>
            <div className='deleteSection'>
                <button onClick={()=>{setShow(true)}}>Delete this comment?</button>
                {
                    show ? 
                    <div className='deleteRow'>
                        <button onClick={deleteComment}>Confirm</button>
                        <button onClick={()=>{setShow(false)}}>Cancel</button>
                    </div>
                    :
                    <></>
                }
            </div>
        </div>
    )
}

export default DeleteComment
