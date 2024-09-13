import React from 'react'
import { useQuery } from 'react-query'

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json();
}

const PostsComponent = () => {
    const { data, isLoading, error } = useQuery('fetchingPosts', fetchPosts, {
        // cacheTime: 
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>isError: {error}, try again!</div>;
    return (
        <>
        <ul>
            {data.map(post => {
                    
                        <li key={post.id}>{post.title}</li>
                    
                // console.log(`${post.id}. ${post.title}`);
            })}
        </ul>
        </>
    )
}

export default PostsComponent