import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import PostCard from './PostCard';

const Home = () => {

    const [posts,setPosts] = useState([]);
    const clientId = 'u66XLWVXglt-f-pnXaZ7OVnS_WTbwHZeLIJ4hTQWJHA';
    const apiUrl = `http://api.unsplash.com/photos?client_id=${clientId}`;
    
    const fetchPosts = async () => {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setPosts(data);
    }
    
    const { isLoading, error, data } = useQuery('photos', fetchPosts);

    if(isLoading){
        return 'Loading...'
    }
    
    if(error) return `An error has occured: ${error.message}`

    return (
        <section className="post-container flex flex-col items-center pt-10">
            {posts && posts.length ?
                posts.map((post,index) => {
                    return(
                        <PostCard
                            user={{name: post.user.name, profile_img: post.user.profile_image.medium, location: post.user.location}}
                            img={post.urls.regular}
                            likes={post.likes}
                            description={post.description}
                            key={index}
                        />
                    )
                }
            ):(
                <h2>Nothing to show here.</h2>
            )} 
            
        </section>
    )
}

export default Home;