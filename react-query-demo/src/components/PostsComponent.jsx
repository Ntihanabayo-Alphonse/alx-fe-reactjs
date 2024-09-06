import React from 'react'
import { useQuery } from 'react-query'

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json();
}

const PostsComponent = () => {
    const { data, isLoading, isError } = useQuery('fetchingPosts', fetchPosts);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {isError}, try again!</div>;
    return (
        <>
            {data.map(post => {
                <div key={post.id}>
                    <ul>
                        <li>{post.title}</li>
                    </ul>
                </div>
                console.log(`${post.id}. ${post.title}`);
            })}
        </>
    )
}

export default PostsComponent