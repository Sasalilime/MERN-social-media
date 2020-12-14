import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {UserIdContext} from "./AppContext";
import Logout from "./Log/Logout";
import axios from "axios";

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
                {userId ? (<ul>
                    <li>

                    </li>
                    <li className="welcome">
                        <NavLink to="/profil">
                            <h5>Bienvenue 'valeur dyn'</h5>
                        </NavLink>
                    </li>
                    <Logout/>
                </ul>) : (
                    <ul>
                        <li>

                        </li>
                        <li>
                            <NavLink exact to="/profil">
                                <img src="./img/icons/login.svg" alt="login"/>
                            </NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;