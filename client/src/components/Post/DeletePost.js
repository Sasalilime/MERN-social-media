import React from 'react';
import {useDispatch} from "react-redux";
import {deletePost} from "../../actions/post.actions";

const DeletePost = (props) => {
    const dispatch = useDispatch();

    const deleteMyPost = () => dispatch(deletePost(props.id));

    return (
        <div onClick={() => {
            if (window.confirm("Voulez-vous supprimer ce post ?")) {
                deleteMyPost();
            }
        }}>

            <img src="./img/icons/trash.svg" alt="supprimer"/>
        </div>
    );
};

export default DeletePost;