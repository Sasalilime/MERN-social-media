import React from 'react';
import LeftNav from "../components/LeftNav";
import Thread from "../components/Thread";
import {useContext} from "react/cjs/react.production.min";
import {UserIdContext} from "../components/AppContext";
import Log from "../components/Log";
import FriendsSuggestion from "../components/Profil/FriendsSuggestion";
import NewPostForm from "../components/Post/NewPostForm";
import Trends from "../components/Trends";

const Home = () => {
    const userId = useContext(UserIdContext);

    return (
        <div className="home">
            <LeftNav />
            <div className="main">
                <div className="home-header">
                    {userId ? <NewPostForm /> : <Log signin={true} signup={false} />}
                </div>
                <Thread />
            </div>
            <div className="right-side">
                <div className="right-side-container">
                    <div className="wrapper">
                        <Trends />
                        {userId && <FriendsSuggestion />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;