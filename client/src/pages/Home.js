import React from 'react';
import LeftNav from "../components/LeftNav";
import Thread from "../components/Thread";

const Home = () => {
    return (
        <div className="home">
            <div className="main">
                <LeftNav/>
            </div>
            <Thread/>
        </div>
    );
};

export default Home;