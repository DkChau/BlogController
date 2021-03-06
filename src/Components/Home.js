import React, {useState, useEffect} from 'react'
import BlogPost from './BlogPost'

const Home = () => {

    const [posts,setPosts] = useState([])
    const [Loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        
        fetch('https://dcblogapi.herokuapp.com/api/post',{credentials:'include'})
            .then(response=>{
                return response.json();
            })
            .then(data=>{
                setPosts(data);
                setLoading(false);
            })
            .catch(err=>{
                throw new Error('Failed to fetch api')
            })

    },[])

    if(Loading){
        return <div className='loading'>Loading</div>
    }
    return (
        <div className='homePage'>
            {
                posts.length===0 ? 
                
                    <div>No posts found</div> 
                    :
                    posts.map(post=>{
                        return(
                            <BlogPost data={post}/>
                        )
                    })
            }
        </div>
    )
}

export default Home
