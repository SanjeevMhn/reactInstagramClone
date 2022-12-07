import React from 'react';
import PostCard from './PostCard';

const Home = () => {
    return (
        <section className="post-container flex flex-col items-center pt-10">
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
        </section>
    )
}

export default Home;