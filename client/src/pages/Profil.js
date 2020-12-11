import React, {useContext} from 'react';
import Log from "../components/Log";
import {UserIdContext} from "../components/AppContext";


const Profil = () => {
    const userId = useContext(UserIdContext);
    return (
        <div className="profil-page">
            {userId ? (
                <h1>Update Page</h1>
            ): (
            <div className="log-container">
                <Log signin={false} signup={true}/>
                <div className="img-container">
                    <img src="./img/log.svg" alt="log"/>
                </div>
            </div>      )}
        </div>
    );
};

export default Profil;