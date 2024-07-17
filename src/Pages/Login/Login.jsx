import { useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import useAuth from '../../Hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {

    const [disabled, setDisabled] = useState(true);
    const { loginUser } = useAuth()
    const location = useLocation();
    const navigate = useNavigate();

    const  from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target || {};
        const email = form.email.value || {};
        const password = form.password.value || {};
        const data = { email, password }
        console.log(data);

        const res = await loginUser(email, password)
        console.log(res);
        Swal.fire("Login with successfully!");
        navigate(from, { replace: true });
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
    }

    return (
        <div>
            <Helmet>
                <title>Bistro Bose | Login</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" name="captcha" onBlur={handleValidateCaptcha} placeholder="Type the text captcha above" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} type="submit" value={'Login'} className="btn btn-primary" />
                            </div>
                        </form>
                        <p className='p-4'><small>New Here? <Link to={'/signUp'}>Create an account</Link></small></p>
                        <div>
                            <SocialLogin/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;