import React from 'react';
import {useState} from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

const Log = (props) => {
    const [signUpModal, setSignUpModal] = useState(props.signup);
    const [signInModal, setSignInModal] = useState(props.signin);


    const handleModal = (e) => {
        if (e.target.id === "register") {
            setSignUpModal(true);
            setSignInModal(false);
        } else if (e.target.id === "login") {
            setSignInModal(true);
            setSignUpModal(false);

        }
    };

    return (
        <div className="connection-formm">
            <div className="form-container">
                <ul>
                    <li onClick={handleModal} id="register" className={signUpModal ? "active-btn" : null}>
                        S'inscrire
                    </li>
                    <li onClick={handleModal} id="login" className={signInModal ? "active-btn" : null}>
                        Se connecter
                    </li>
                </ul>
                {signUpModal && <SignUpForm/>}
                {signInModal && <SignInForm/>}
            </div>
        </div>
    );
};

export default Log;