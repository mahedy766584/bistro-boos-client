
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import useAuth from "../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors }, } = useForm()
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const { createUser, updateUserProfile } = useAuth();

    const onSubmit = async (data) => {
        try {
            console.log(data)
            const res = await createUser(data.email, data.password)
            updateUserProfile(data.name, data.photoURL)
            navigate('/')
            console.log(res);
            reset();

            const userInfo = {name: data.name, email: data.email}

            const result = await axiosPublic.post('/users', userInfo)
            console.log('user added to the database', result);
            if(result.data.insertedId){
                Swal.fire("user update with successfully!");
                reset();
                navigate('/')
            }

        }catch(error){
            console.log(error);
        }finally{
            Swal.fire("user update with successfully!");
        }
    }


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} name="photoURL" placeholder="photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className="text-red-600">Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {
                                    ...register("password",
                                        {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })}
                                    name="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <span className="text-red-600">Password field is required</span>}
                                {errors.password?.type === "minLength" && (<p role="alert" className="text-red-600">Password must be 6 characters</p>)}
                                {errors.password?.type === "maxLength" && (<p role="alert" className="text-red-600">Password must be 20 characters</p>)}
                                {errors.password?.type === "pattern" && (<p role="alert" className="text-red-600">Password must have on uppercase, one lower case and one special characters</p>)}
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value={'Sign Up'} className="btn btn-primary" />
                            </div>
                        </form>
                        <p className="p-4">Already Have an account <Link to={'/login'}>Login</Link></p>
                        <div>
                            <SocialLogin/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;