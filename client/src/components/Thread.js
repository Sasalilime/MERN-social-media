import React, {useState, useEffect} from 'react';
import {getPosts} from "../actions/post.actions";
import {useDispatch, useSelector} from "react-redux";
import {isEmpty} from "./Utils";
import Card from "./Post/Card";

const Thread = () => {
    const [loadPosts, setLoadPosts] = useState(true);
    const [count, setCount] = useState(5);
    const dispatch = useDispatch();
    const posts = useSelector((state => state.postReducer));

    const loadMorePosts = () =>{
//quand on arrive en bas de la page et que ça touche le bas(cf +1)  > tout ce qui est scrollable a
        if (window.innerHeight + document.documentElement.scrollTop + 1 > document.scrollingElement.scrollHeight) {
            setLoadPosts(true);
        }
    }

    useEffect(() => {
        if (loadPosts) {
            dispatch(getPosts(count));
            setLoadPosts(false);
            setCount(count + 5);
        }


//Avec React, il faut mettre l'événement puis l'enlever ensuite.
        window.addEventListener('scroll', loadMorePosts);
        return () => window.removeEventListener('scroll', loadMorePosts);
    }, [loadPosts, dispatch, count]);

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