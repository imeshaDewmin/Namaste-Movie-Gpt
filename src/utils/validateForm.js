export const checkSignUpValidation = (name, email, password) => {

    const isNameValid = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/.test(name)

    const isEmailValid = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)

    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)

    if (!isNameValid) return "Name is not in valid format";
    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";

    return null;

}

export const checkSignInValidation = (email, password) => {

    const isEmailValid = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)

    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)

    if (!isEmailValid) return "Email is not valid";
    if (!isPasswordValid) return "Password is not valid";

    return null;

}