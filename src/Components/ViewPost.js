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

    //Submit Comment function ONLY FOR TESTING, NOT NEEDED ON CONTROLLER
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
        return <div>Loading</div>
    }
    else if(errors.length!==0){
        return <div>{errors}</div>
    }

    return (
        <div>
            <div className='viewPost'>
                <div>{post.title}</div>
                <div>{post.text}</div>
                <div>{post.date}</div>
                <Link to={`/post/${props.match.params.id}/delete`}>
                    <span>Delete Post</span>
                </Link>
                <Link to={`/post/${props.match.params.id}/update`}>
                    <span>Update Post</span>
                </Link>
            </div>
            <div className='commentSection'>
                {comments.map(comment=>{
                    return(
                        <div className='comment'>
                            <div>{comment.name}</div>
                            <div>{comment.text}</div>
                            <Link to={`/post/${props.match.params.id}/comment/${comment._id}`}>
                                <span>Delete Comment</span>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div className='formContainer'>
                <form className='createComment'>

                    <label for='name'>Name</label>
                    <input ref={nameRef} id='name' name='name'></input>

                    <label for='text'>Text</label>
                    <input ref={textRef} id='text' name='text'></input>

                    <button onClick={submitComment}>Submit Comment</button>
                </form>
            </div>
        </div>

    )
}

export default ViewPost
