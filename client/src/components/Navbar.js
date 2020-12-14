import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {UserIdContext} from "./AppContext";

const Navbar = () => {
    const userId = useContext(UserIdContext);

    return (
        <nav>
            <div className="nav-container">
                <div className="logo">
                    <NavLink exact to="/">
                        <div className="logo">
                            <img src="./img/suitsconception.png" alt="icon"/>
                            <h3>Suits Conception</h3>
                        </div>
                    </NavLink>
                </div>
            </div>
            
        </nav>
    );
};

export default Navbar;