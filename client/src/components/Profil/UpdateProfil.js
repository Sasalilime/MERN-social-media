import React, {useState} from 'react';
import LeftNav from "../LeftNav";
import {useDispatch, useSelector} from "react-redux";
import {updateBio} from "../../actions/user.actions";
import UploadImg from "./UploadImg";
import {dateParser} from "../Utils";

const UpdateProfil = () => {
    const [bio, setBio] = useState('');
    const [updateForm, setUpdateForm] = useState(false);
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userReducer);
    const [followingPopup, setFollowingPopup] = useState(false);
    const [followersPopup, setFollowersPopup] = useState(false);


    const handleUpdateForm = () => {
        setUpdateForm(!updateForm);
    }


    const handleUpdate = () => {
        dispatch(updateBio(userData._id, bio));
        setUpdateForm(false);
    };

    let date = "12/12/2020";

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
                    <h4>Membre depuis {dateParser(userData.createdAt)}</h4>
                    <h5 onClick={(e) => setFollowingPopup(true)}>Abonnements: {userData.following ? userData.following.length : ""}</h5>
                    <h5 onClick={(e) => setFollowersPopup(true)}>Abonnés: {userData.followers ? userData.followers.length : ""}</h5>
                </div>
            </div>
            {followingPopup &&
            <div className="popup-profil-container">
                <div className="modal">
                    <h3>
                        Abonnements
                    </h3>
                    <span onClick={(e) => setFollowingPopup(false)}
                          className="cross">&#10005;
                    </span>

                </div>
            </div>}
            {/*{followersPopup &&}*/}
        </div>
    );
};

export default UpdateProfil;