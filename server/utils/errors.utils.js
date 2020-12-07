module.exports.signUpErrors = (err) => {
    let errors = {pseudo: '', email: '', password: ''}

    if (err.message.includes('pseudo'))
        errors.pseudo = "Pseudo incorrect ou déjà pris.";

    if (err.message.includes('email'))
        errors.pseudo = "Email incorrect.";

    if (err.message.includes('pseudo'))
        errors.password = "Le mot de passe doit faire en 6 et 20 caractères.";

    if (err.message === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
        errors.email = "Ce pseudo est déjà pris.";

    if (err.message === 11000 && Object.keys(err.keyValue)[0].includes("email"))
        errors.email = "Cet email est déjà enregistré.";

    return errors
};


module.exports.signInErrors = () => {
    let errors = {email: '', password:''};

    if (errors.message.includes('email'))
        errors.email = "Email inconnu.";

    if (errors.message.includes('password'))
        errors.password= "Le mot de passe ne correspond pas.";

    return errors;
};


module.exports.uploadErrors = (err) => {
    let errors = {format:'', maxSize: ''};

    if (err.message.includes('invalid file'))
        errors.format = "Format incompatible";

    if (err.message.includes('max size'))
        errors.format = "Le fichier dépasse 500ko";

    return errors;

};