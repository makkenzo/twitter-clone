import React, { useEffect, useState } from 'react';
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';
import db from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    console.log(posts);

    useEffect(() => {
        onSnapshot(collection(db, 'posts'), (snapshot) => {
            setPosts(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    return (
        <div className="feed">
            <div className="feed-header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            {posts.map((post) => {
                <Post
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />;
            })}
        </div>
    );
};

export default Feed;
