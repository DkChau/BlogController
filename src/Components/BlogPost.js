import React from 'react'

const BlogPost = (props) => {
    return (
        <div className='singlePost'>
            <div>{props.data.title}</div>
            <div>{props.data.text}</div>
            <div>{props.data.date}</div>
            <div>{props.data.published ? 'Unpublish' : 'Publish'}</div>
        </div>
    )
}

export default BlogPost
