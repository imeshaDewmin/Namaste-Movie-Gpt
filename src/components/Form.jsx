import { useState } from "react";
import { checkSignUpValidation, checkSignInValidation } from "../utils/validateForm";
import { useRef } from "react";
import { auth } from "../utils/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const LoginForm = () => {

    const dispatch = useDispatch();

    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const toggleForm = () => {
        setIsSignIn(!isSignIn)
    }

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleSignUp = () => {
        const message = checkSignUpValidation(name.current.value, email.current.value, password.current.value)
        setErrorMessage(message);
        if (message) return;

        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;

                updateProfile(user, {
                    displayName: name.current.value
                }).then(() => {
                    const { uid, displayName, email } = auth.currentUser;
                    dispatch(addUser({
                        uid: uid,
                        displayName: displayName,
                        email: email
                    })
                    );
                }).catch((error) => {
                    setErrorMessage(error.message)
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
            });
    }

    const handleSignIn = () => {
        const message = checkSignInValidation(email.current.value, password.current.value)
        setErrorMessage(message);
        if (message) return;

        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
            });
    }

    return (
        <div className="bg-black/80 p-12 rounded-lg w-[320px] flex flex-col text-white">

            <h1 className="text-3xl font-bold mb-6">
                {isSignIn ? "Sign In" : "Sign Up"}
            </h1>

            <form onSubmit={(e) => e.preventDefault()}>
                {!isSignIn && (
                    <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-3 my-2 rounded bg-gray-700 text-white"
                    />
                )}

                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="w-full p-3 my-2 rounded bg-gray-700 text-white"
                />

                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 my-2 rounded bg-gray-700 text-white"
                />

                <p className="text-red-600 font-bold">{errorMessage}</p>

                <button
                    type="submit"
                    className="w-full p-3 mt-4 bg-red-600 hover:bg-red-700 rounded"
                    onClick={isSignIn ? handleSignIn : handleSignUp}>
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>
            </form>


            <p className="mt-4 text-sm text-gray-300">
                {isSignIn ? "New to Netflix?" : "Already have an account?"}{" "}
                <button
                    onClick={toggleForm}
                    className="font-bold text-white ml-1"
                >
                    {isSignIn ? "Sign Up" : "Sign In"}
                </button>
            </p>

        </div>
    );
};

export default LoginForm;