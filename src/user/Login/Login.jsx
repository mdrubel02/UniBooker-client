import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AiFillEyeInvisible} from 'react-icons/ai';
import { AiFillEye} from 'react-icons/ai';
import { Store } from 'react-notifications-component';
import { AuthContext } from '../../Context/AuthProvider';
import SocialLogin from '../SocialLogin';
import { ThemeContext } from '../../Context/ThemeProvider';

const Login = () => {
    const { theme } = useContext(ThemeContext);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [load, setLoad] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const {
        userSignIn,
        logOut
    } = useContext(AuthContext)

    const userSignInHandle = (data) => {
        setLoad(true)
        const email = data.email
        const password = data.password

        userSignIn(email, password)
            .then(result => {
                if (data) {
                    Store.addNotification({
                        title: "Register successfully",
                        type: "success",
                        container: 'top-center',
                        dismiss: {
                          duration: 5000,
                          onScreen: true
                        }
                      })
                    setLoad(false)
                    navigate(from, { replace: true });
                }
                else {
                    setLoad(false)
                    console.log(data.message)
                    logOut()
                }
            })
            .catch(error => {
                setLoad(false)
                console.log(error.message)
            })

    }
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
      };
    return (
        <div className={``}>
            <div className=" bg-opacity-75">
                <div className={`px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 `}>
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl xl:px-8 xl:w-6/12 m-auto">
                            <div className={` rounded shadow-2xl p-7 sm:p-10 ${!theme ? 'bg-[#1D293A]' : 'bg-white'}`}>
                                <div className='flex justify-between mb-4'>
                                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                        Login
                                    </h3>
                                    <Link to="/register" className="mb-4 text-xl sm:text-center sm:mb-6 sm:text-xl italic text-primary">
                                        Create an account
                                    </Link>
                                </div>
                                <form onSubmit={handleSubmit(userSignInHandle)} className="space-y-6 ng-untouched ng-pristine ng-valid">
                                    <div className="space-y-1 text-sm">
                                        <label htmlFor="email" className="block mb-1 font-medium text-[16px]">Email</label>
                                        <input {...register("email", {
                                            required: "Email is required",
                                            pattern: { value: /\S+@\S+\.\S+/, message: 'Email is not valid!' }
                                        })} type="text" placeholder="Email" className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm " />
                                        {errors?.email && <p className='text-red-600'>{errors?.email.message}</p>}
                                    </div>
                                    <div className="space-y-1 text-sm relative">
                                    <label htmlFor="password" className="block mb-1 font-medium text-[16px]">Password</label>
                                    <input {...register("password", {
                                        required: "Password is required!",
                                        pattern: { value: /(?=.*[!@#$&*])/, message: 'password should be minimum one special character' },
                                        minLength: { value: 6, message: 'password should be must 6 characters' }
                                    })} type={passwordVisible ? 'text' : 'password'} placeholder="Password" className="outline-none flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm "  />
                                    <p className='absolute  right-3 bottom-4 text-xl text-primary-focus cursor-pointer' onClick={()=>togglePasswordVisibility()}>{passwordVisible ?<AiFillEye/>:<AiFillEyeInvisible />}</p>
                                    
                                    {errors?.password && <p className='text-red-600'>{errors?.password.message}</p>}
                                </div>
                                    <button type="submit" className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary">
                                        {
                                            load ? <span className='border-2 border-dashed border-white animate-spin w-7 h-7 rounded-full'></span> : "Login"
                                        } </button>
                                </form>
                                <SocialLogin from={from}></SocialLogin>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;