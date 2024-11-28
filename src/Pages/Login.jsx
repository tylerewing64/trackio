import React, {useRef, useState} from 'react';
import Cookie from 'js-cookie'
const {authenticateUser } = require('../services/userFetches');


export default function Login() {
    const [errorMsg, setErrorMsg] = useState();
    const email = useRef(null);
    const password = useRef(null);

    const handleKeydown = async(e) => { 
        if(e.key === 'Enter'){ 
            handleSumbit();
        }
    }
    const handleSumbit = async() => { 
        
            
            {/* Run if login is succesful */}
            if(email.current.value && password.current.value){ 
                
                const response = await authenticateUser(email.current.value, password.current.value);
                if(response.status === 200){
                    const token = await response.json(); 
                    Cookie.set('token', token);
                    return  window.location.href = '/home';
                }
            
                return setErrorMsg('Wrong Email or Password!')
            
         
            return setErrorMsg('Missing Password or Email')
        }
    }
    

    
    return (
        <div className="  phone:p-8 grid flex min-h-screen items-center justify-center bg-black">
            <div className="p-8 md:p-12 rounded-2xl border-2 border-gray-700 bg-gray-900 shadow-lg w-full max-w-md">
                {/* Logo Section */}
                {/* Uncomment if using a logo */}
                {/* <img 
                    src="https://example.com/logo.png" 
                    alt="Logo"
                    className="mx-auto mb-6 w-20 h-20"
                /> */}

                <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
                    Log in to Trackio
                </h1>

                {/* Social Login Buttons */}
                <div className="flex flex-col mt-5  ">
                    <div className="flex items-center rounded-3xl border-gray-600 border-2 my-2 p-2 cursor-pointer active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all bg-gray-800">
                        <img 
                            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" 
                            alt="Google"
                            className="ml-2 w-6 h-auto"
                        />
                        <button className="text-white text-sm ml-4">
                            Continue With Google
                        </button>
                    </div>
                    <div className="flex items-center rounded-3xl border-gray-600 border-2 my-2 p-2 cursor-pointer active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all bg-gray-800">
                        <img 
                            src="https://cdn.iconscout.com/icon/free/png-256/free-facebook-icon-download-in-svg-png-gif-file-formats--logo-social-media-brand-f-logos-pack-company-icons-1597577.png" 
                            alt="Facebook"
                            className="ml-2 w-6 h-auto"
                        />
                        <button className="text-white text-sm ml-4">
                            Continue With Facebook
                        </button>
                    </div>
                    <div className="flex items-center rounded-3xl border-gray-600 border-2 my-2 p-2 cursor-pointer active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all bg-gray-800">
                        <img 
                            src="https://download.logo.wine/logo/Apple_Inc./Apple_Inc.-Logo.wine.png" 
                            alt="Apple"
                            className="ml-2 w-6 h-auto"
                        />
                        <button className="text-white text-sm ml-4">
                            Continue With Apple
                        </button>
                    </div>
                </div>

                {/* Email and Password Inputs */}
                <div className="mt-5">
                    <div>
                        <label className="text-sm text-gray-400">Email</label>
                        <input
                            onKeyDown={(e) => handleKeydown(e)}
                            onChange ={() => setErrorMsg('')}
                            ref = {email}
                            className="w-full border-2 border-gray-600 rounded-md p-3 mt-1 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter your email"
                            type="email"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="text-sm text-gray-400">Password</label>
                        <input
                            onKeyDown={(e) => handleKeydown(e)}
                            onChange ={() => setErrorMsg('')}
                            ref = {password}
                            className="w-full border-2 border-gray-600 rounded-md p-3 mt-1 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter your password"
                            type="password"
                        />
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col gap-y-4">
                    <button 
                     onClick={(e) => handleSumbit(e)}
                     
                     className="py-3 rounded-lg bg-green-500 text-black text-m font-bold active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all">
                        Sign in
                    </button>
                    <a href="/forgetpassword" className="font-medium text-sm text-gray-400 text-center hover:text-white transition">
                        Forgot password?
                    </a>
                    <a href="/signup" className="font-medium text-sm text-gray-400 text-center hover:text-white transition">
                        Sign up
                    </a>
                    <span className='text-center text-red-400 text-sm'>{errorMsg}</span>
                </div>
            </div>
        </div>
    );
}
