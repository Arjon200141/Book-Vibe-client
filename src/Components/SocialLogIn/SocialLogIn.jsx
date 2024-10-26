import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProviders";
import useAxiosPublic from "../hooks/axiospublic";

const SocialLogIn = () => {
    const { googleSignIn } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = async () => {
        try {
            const result = await googleSignIn();
            console.log(result.user);

            const userInfo = {
                email: result.user.email,
                name: result.user.displayName,
                photo: result.user.photoURL,
            };

            const response = await axiosPublic.post("/users", userInfo);
            console.log(response.data);

            Swal.fire({
                title: "Congratulations!",
                text: "User Logged In Successfully!",
                icon: "success",
            });

            navigate(from, { replace: true });
        } catch (error) {
            console.error("Error during login:", error);
            Swal.fire({
                title: "Error",
                text: error.message || "Login failed. Please try again.",
                icon: "error",
            });
        }
    };

    return (
        <div>
            <button
                onClick={handleGoogleSignIn}
                className="btn w-full text-2xl font-semibold bg-white/35"
            >
                Sign In With{" "}
                <img
                    src="https://i.ibb.co/TLh1bgK/google-symbol.png"
                    alt=""
                    className="h-8 w-8"
                />
            </button>
        </div>
    );
};

export default SocialLogIn;
