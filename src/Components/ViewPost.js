import React, {useState, useEffect, useRef} from 'react'
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';

const ViewPost = (props) => {

    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [errors, setErrors] = useState([])
    const [Loading, setLoading] = useState(true);

    const nameRef = useRef(null)
    const textRef = useRef(null)


    //Initial Api call to get post and comments
    useEffect(()=>{
        let postPromise = fetch(`https://dcblogapi.herokuapp.com/api/post/${props.match.params.id}`,{credentials:'include'})
        let commentPromise = fetch(`https://dcblogapi.herokuapp.com/api/post/${props.match.params.id}/comment`,{credentials:'include'})

        Promise.all([postPromise, commentPromise])
        .then(([post,comments])=>{
            return Promise.all([post.json(), comments.json()])
        })
        .then(response=>{
            setLoading(false);

            if(response[0].errors){
                setErrors(response[0].errors)
            }
            else{
                setPost(response[0])
                setComments(response[1]) 
            }
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    //Submit Comment function
    const submitComment = (e) =>{
        e.preventDefault()

        fetch(`https://dcblogapi.herokuapp.com/api/post/${props.match.params.id}/comment`,
            {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    name:nameRef.current.value,
                    text:textRef.current.value,
                    id:props.match.params.id,
                })
            })
        .then(comment=>{
            return comment.json()
        })
        .then(response=>{
            window.location.reload()
        })
        .catch(err=>{
            console.log(err)
        })
    }



    if(Loading){
        return <div className='loading'>Loading</div>
    }
    else if(errors.length!==0){
        return <div>{errors}</div>
    }

    return (
        <div className='viewContainer'>
            <div className='viewPost'>
                <div className='textContainer'>
                    <div className='viewTitle'>{post.title}</div>
                    <div className='viewText'>{post.text}</div>
                    
                </div>
                <div className='viewBottom'>
                    <div className='viewDate'>Created: {post.date_formatted}</div>
                    <div className='viewLinks'>
                        <Link to={`/post/${props.match.params.id}/delete`} className='buttonLink'>
                            <span>Delete Post</span>
                        </Link>
                        <Link to={`/post/${props.match.params.id}/update`} className='buttonLink'>
                            <span>Update Post</span>
                        </Link>
                    </div>

                </div>

            </div>
            <div className='viewFormContainer'>
                <div className='commentTag'>Create Comment</div>
                <form className='createComment'>

                    <label htmlFor='name'>Name</label>
                    <input ref={nameRef} id='name' name='name'></input>

                    <label htmlFor='text'>Text</label>
                    <textarea ref={textRef} id='text' name='text'></textarea>

                    <button onClick={submitComment} className='buttonLink'>Submit Comment</button>
                </form>
            </div>
            <div className='commentSection'>
                <div className='commentTag'>Comments</div>
                {comments.map((comment,index)=>{
                    return(
                        <div key={`comment${index}`} className='comment'>
                            <div className='commentHead'>
                                <div className='commentName'>{comment.name}</div>
                                <div className='commentDate'>Submitted: {comment.date_formatted}</div>
                            </div>

                            <div className='commentText'>{comment.text}</div>
                            <Link to={`/post/${props.match.params.id}/comment/${comment._id}`} className='singleDeleteComment' >
                                <span className='commentRight'>Delete Comment</span>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default ViewPost
