import React from 'react';
import axios from "axios";
import {useState} from "react";
import SignInForm from "./SignInForm";

const SignUpForm = () => {
    const [formSubmit, setFormSubmit] = useState(false);
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = async (event) => {
        event.preventDefault();
        const terms = document.getElementById('terms');
        const pseudoError = document.querySelector('.pseudo.error');
        const emailError = document.querySelector('.email.error');
        const passwordError = document.querySelector('.password.error');
        const passwordConfirmError = document.querySelector('.password-confirm.error');
        const termsError = document.querySelector('.terms.error');

        passwordConfirmError.innerHTML = '';
        termsError.innerHTML = '';

        if (password !== confirmPassword || !terms.checked) {
            if (password !== confirmPassword)
                passwordConfirmError.innerHTML = "Les mots de passes ne correspondent pas";
            if (!terms.checked)
                termsError.innerHTML = "Veuillez valider les conditions générales pour continuer.";
        }
            else {
                await axios({
                    method: 'post',
                    url: `${process.env.REACT_APP_API_URL}api/user/register`,
                    data: {
                        pseudo,
                        email,
                        password
                    }
                })
                    .then((res) => {
                        if (res.data.errors) {
                            console.log(res)
                            pseudoError.innerHTML = res.data.errors.pseudo;
                            emailError.innerHTML = res.data.errors.email;
                            passwordError.innerHTML = res.data.errors.password;
                        }else {
                            setFormSubmit(true);
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            }

    };


    return (
        <React.Fragment>
            {formSubmit ? (
                <React.Fragment>
                <SignInForm/>
                <span/>
                <h4 className="success">Enregistrement réussi, veuillez-vous connecter.</h4>
                </React.Fragment>

            ): (
        <form action="" onSubmit={handleSignup} id="signup-form">
            <label htmlFor="pseudo">Pseudo</label>
            <br/>
            <input type="text" name="pseudo" id="pseudo" value={pseudo} onChange={(event) => {
                setPseudo(event.target.value)
            }}/>
            <div className="pseudo error"></div>
            <br/>
            <label htmlFor="email">Email</label>
            <br/>
            <input type="email" name="email" id="email" value={email} onChange={(event) => {
                setEmail(event.target.value)
            }}/>
            <div className="email error"></div>
            <br/>
            <label htmlFor="password">Mot de passe</label>
            <br/>
            <input type="password" name="password" id="password" value={password} onChange={(event) => {
                setPassword(event.target.value)
            }}/>
            <div className="password error"></div>
            <br/>
            <label htmlFor="password-confirmation">Confirmation du mot de passe</label>
            <br/>
            <input type="password" name="password" id="password-confirmation" value={confirmPassword}
                   onChange={(event) => {
                       setConfirmPassword(event.target.value)
                   }}/>
            <div className="password-confirm error"></div>
            <br/>
            <input type="checkbox" id="terms"/>
            <label htmlFor="terms">J'accepte les <a href="/" target="_blank" rel="noopener noreference">conditons
                générales </a></label>
            <div className="terms error"></div>
            <input type="submit" value="Valider l'inscription"/>
        </form>
                )}
        </React.Fragment>
    );
};

export default SignUpForm;