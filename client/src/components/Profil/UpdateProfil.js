import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateBio} from "../../actions/user.actions";
import LeftNav from "../LeftNav";
import {dateParser} from "../Utils";
import UploadImg from "./UploadImg";
import FollowHandler from "./FollowHandler";

const UpdateProfil = () => {
    const [bio, setBio] = useState("");
    const [updateForm, setUpdateForm] = useState(false);
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userReducer);
    const usersData = useSelector((state) => state.usersReducer);
    const [followingPopup, setFollowingPopup] = useState(false);
    const [followersPopup, setFollowersPopup] = useState(false);

    const handleUpdateForm = () => {
        setUpdateForm(!updateForm);
    };

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
                <textarea
                    type="text"
                    defaultValue={userData.bio}
                    onChange={(e) => {
                        setBio(e.target.value);
                    }}
                />
                                <button onClick={handleUpdate}>
                                    Valider les modifications
                                </button>
                            </React.Fragment>
                        )}
                    </div>
                    <h4>Membre depuis {dateParser(userData.createdAt)}</h4>
                    <h5 onClick={(e) => setFollowingPopup(true)}>
                        Abonnements: {userData.following ? userData.following.length : ""}
                    </h5>
                    <h5 onClick={(e) => setFollowersPopup(true)}>
                        Abonnés: {userData.followers ? userData.followers.length : ""}
                    </h5>
                </div>
            </div>
            {followingPopup && (
                <div className="popup-profil-container">
                    <div className="modal">
                        <h3>Abonnements</h3>
                        <span onClick={(e) => setFollowingPopup(false)} className="cross">
              &#10005;
            </span>
                        <ul>
                            {usersData.map((user) => {
                                for (let i = 0; i < userData.following.length; i++) {
                                    if (user._id === userData.following[i])
                                        return (
                                            <li key={user._id}>
                                                <img src={user.picture} alt="user-pic"/>
                                                <h4>{user.pseudo}</h4>
                                                <div className="follow-handler">
                                                    <FollowHandler idToFollow={user._id} type="suggestion"/>
                                                </div>
                                            </li>
                                        );
                                }
                                return null;
                            })}
                        </ul>
                    </div>
                </div>
            )}

            {followersPopup && (
                <div className="popup-profil-container">
                    <div className="modal">
                        <h3>Abonnés</h3>
                        <span onClick={(e) => setFollowersPopup(false)} className="cross">
              &#10005;
            </span>
                        <ul>
                            {usersData.map((user) => {
                                for (let i = 0; i < userData.followers.length; i++) {
                                    if (user._id === userData.followers[i])
                                        return (
                                            <li key={user._id}>
                                                <img src={user.picture} alt="user-pic"/>
                                                <h4>{user.pseudo}</h4>
                                                <div className="follow-handler">
                                                    <FollowHandler idToFollow={user._id} type="suggestion"/>
                                                </div>
                                            </li>
                                        );
                                }
                                return null;
                            })}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UpdateProfil;
