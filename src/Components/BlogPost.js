import React from 'react'
import {Link } from 'react-router-dom';

const BlogPost = (props) => {
    return (
        <div className='singlePost'>
            <div className='titleSection'>{props.data.title}</div>
            <div className='textSection'>{props.data.text}</div>
            <div className='bottomRow'>
                <div>Created: {props.data.date_formatted}</div>
                <div className='rightSide bottom'>
                    <div>{props.data.published ? 'Published' : 'Hidden'}</div>
                    <Link to={'/post/'+props.data._id}>
                        <span>View Post</span>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default BlogPost
