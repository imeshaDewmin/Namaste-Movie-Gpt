import { useState } from "react";

const LoginForm = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleForm = () => {
        setIsSignIn(!isSignIn)
    }

    return (
        <div className="bg-black/80 p-12 rounded-lg w-[320px] flex flex-col text-white">

            <h1 className="text-3xl font-bold mb-6">
                {isSignIn ? "Sign In" : "Sign Up"}
            </h1>

            <form>
                {!isSignIn && (
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-3 my-2 rounded bg-gray-700 text-white"
                    />
                )}

                <input
                    type="text"
                    placeholder="Email Address"
                    className="w-full p-3 my-2 rounded bg-gray-700 text-white"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 my-2 rounded bg-gray-700 text-white"
                />

                <button type="submit" className="w-full p-3 mt-4 bg-red-600 hover:bg-red-700 rounded">
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