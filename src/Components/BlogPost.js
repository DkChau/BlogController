import React from 'react'
import {Link } from 'react-router-dom';

const BlogPost = (props) => {
    return (
        <div className='singlePost'>
            <div>{props.data.title}</div>
            <div>{props.data.text}</div>
            <div>{props.data.date}</div>
            <div>{props.data.published ? 'Unpublish' : 'Publish'}</div>
            <Link to={'/post/'+props.data._id}>
                <span>View Post</span>
            </Link>
        </div>
    )
}

export default BlogPost
