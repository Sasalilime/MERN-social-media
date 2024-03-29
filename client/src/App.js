import React, {useState, useEffect} from 'react';
import Routes from './components/Routes';
import {UserIdContext} from "./components/AppContext";
import axios from "axios";
import {useDispatch} from "react-redux";
import {getUser} from "./actions/user.actions";



const App = () => {
    const [userId, setUserId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchToken = async () => {
            await axios({
                method: 'get',
                url: `${process.env.REACT_APP_API_URL}jwtid`,
                withCredentials: true
            })
            .then ((res) =>
                setUserId(res.data))
            .catch((err) =>
                console.log('No token'));
        };
        fetchToken();

        if (userId)
            dispatch(getUser(userId));
    }, [userId, dispatch]);

    return (
            <UserIdContext.Provider value={userId}>
                <Routes/>
            </UserIdContext.Provider>
    );
};

export default App;

