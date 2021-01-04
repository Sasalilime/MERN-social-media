import React from 'react';
import LeftNav from "../components/LeftNav";
import Thread from "../components/Thread";
import {useContext} from "react/cjs/react.production.min";
import {UserIdContext} from "../components/AppContext";
import NewFormPost from "../components/Post/NewFormPost";
import Log from "../components/Log";

const Home = () => {
    const userId = useContext(UserIdContext);

    return (
        <div className="home">
            <LeftNav/>
            <div className="main">
                <div className="home-header">
                    {userId ? <NewFormPost/> : <Log signin={true} signup={false}/>}
                </div>
                <Thread/>
            </div>
        </div>
    );
};

export default Home;