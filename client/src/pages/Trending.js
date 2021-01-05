import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { UserIdContext } from "../components/AppContext";
import LeftNav from '../components/LeftNav';
import { isEmpty } from "../components/Utils";
import Card from "../components/Post/Card";
import Trends from "../components/Trends";
import FriendsSuggestion from "../components/Profil/FriendsSuggestion";

const Trending = () => {
    const userId = useContext(UserIdContext);
    const trendList = useSelector((state) => state.trendingReducer);

    return <div className="trending-page">
        <LeftNav />
        <div className="main">
            <ul>
                {!isEmpty(trendList[0]) && trendList.map((post) => <Card post={post} key={post._id} />)}
            </ul>
        </div>
        <div className="right-side">
            <div className="right-side-container">
                <Trends />
                {userId && <FriendsSuggestion />}
            </div>
        </div>
    </div>;
};

export default Trending;