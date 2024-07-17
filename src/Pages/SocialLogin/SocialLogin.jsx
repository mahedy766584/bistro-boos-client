import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic"
import { useNavigate } from "react-router-dom"

const SocialLogin = () => {

    const { googleLogin } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        googleLogin()
            .then(result => {
                console.log(result);

                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                }
                axiosPublic.post('/users', userInfo)
                    .then(result => {
                        console.log(result);
                        navigate('/')
                    })

            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <div className="divider"></div>
            <div className='px-4 py-2'>
                <button onClick={handleGoogleSignIn} className="btn w-full flex justify-center items-center">
                    <FaGoogle className="text-xl text-orange-400" />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;