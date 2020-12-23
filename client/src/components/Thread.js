import React, {useState, useEffect} from 'react';
import {getPosts} from "../actions/post.actions";
import {useDispatch, useSelector} from "react-redux";
import {isEmpty} from "./Utils";
import Card from "./Post/Card";

const Thread = () => {
    const [loadPosts, setLoadPosts] = useState(true);
    const dispatch = useDispatch();
    const posts = useSelector((state => state.postReducer))

    useEffect(() => {
        if (loadPosts) {
            dispatch(getPosts());
            setLoadPosts(false);
        }
    }, [loadPosts, dispatch]);

    return (
        <div className="thread-container">
            <ul>
                {!isEmpty(posts[0]) && posts.map((post) => {
                        return <Card post={post} key={post._id}/>
                    }
                )}
            </ul>
        </div>
    );
};

export default Thread;