import Header from "../components/Header";
import LoginForm from "../components/Form";
import { NETFLIX_BG_IMG_URL } from "../utils/constants";

const Login = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">

            <img
                src={NETFLIX_BG_IMG_URL}
                alt="bg"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-20">
                <Header />
            </div>

            <div className="relative z-20 flex items-center justify-center h-full">
                <LoginForm />
            </div>

        </div>
    );
};

export default Login;