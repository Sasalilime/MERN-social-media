import React, {useState} from 'react';
import LeftNav from "../LeftNav";
import {useDispatch, useSelector} from "react-redux";
import {updateBio} from "../../actions/user.actions";
import UploadImg from "./UploadImg";

const UpdateProfil = () => {
    const [bio, setBio] = useState('');
    const [updateForm, setUpdateForm] = useState(false);
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userReducer);

    const handleUpdateForm = () => {
        setUpdateForm(!updateForm);
    }


    const handleUpdate = () => {
        dispatch(updateBio(userData._id, bio));
        setUpdateForm(false);
    };

    return (
        <div className="profil-container">
            <LeftNav/>
            <h1> Profil de {userData.pseudo}</h1>
            <div className="update-container">
                <div className="left-part">
                    <h3>Photo de profil</h3>
                    <img src={userData.picture} alt="user profile picture"/>
                    <UploadImg/>
                </div>
                <div className="right-part">
                    <div className="bio-update">
                        <h3>Bio</h3>
                        {updateForm === false && (
                            <React.Fragment>
                                <p onClick={handleUpdateForm}>{userData.bio}</p>
                                <button onClick={handleUpdateForm}>Modifier la bio</button>
                            </React.Fragment>
                        )}

                        {updateForm === true && (
                            <React.Fragment>
                                <textarea type="text" defaultValue={userData.bio} onChange={(e) => {
                                    setBio(e.target.value)
                                }}/>
                                <button onClick={handleUpdate}>Valider les modifications</button>
                            </React.Fragment>
                        )}

                    </div>
                    <h4>Membre depuis {userData.createdAt}</h4>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfil;