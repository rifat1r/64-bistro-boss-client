import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignin()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="text-center p-8">
      <div className="divider"></div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn">
          <FaGoogle className="text-xl"></FaGoogle>
          Google Login
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
