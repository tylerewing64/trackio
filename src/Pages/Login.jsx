import React, { useRef, useState, useContext } from "react";
import Cookie from "js-cookie";
import { UserStateContext } from "../Context/UserState";
import OauthLoginButtons from "../Components/OauthLoginButtons";
import AuthPageDivider from "../Components/AuthPageDivider";
const { authenticateUser } = require("../services/userFetches");

export default function Login() {
  const [errorMsg, setErrorMsg] = useState();
  const email = useRef(null);
  const password = useRef(null);
  const { userState, setUserState } = useContext(UserStateContext);

  const handleKeydown = async (e) => {
    if (e.key === "Enter") {
      handleSumbit();
    }
  };
  const handleSumbit = async () => {
    {
      /* Run if login is succesful */
    }
    if (email.current.value && password.current.value) {
      const response = await authenticateUser(
        email.current.value,
        password.current.value
      );
      if (response.status === 200) {
        const token = await response.json();
        Cookie.set("token", token.token);
        Cookie.set("id", token.id);

        return (window.location.href = "/home");
      }

      return setErrorMsg("Wrong Email or Password!");

      return setErrorMsg("Missing Password or Email");
    }
  };

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

        {/* Email and Password Inputs */}
        <div className="mt-5">
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              onKeyDown={(e) => handleKeydown(e)}
              onChange={() => setErrorMsg("")}
              ref={email}
              className="w-full border-2 border-gray-600 rounded-md p-3 mt-1 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
              type="email"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm text-gray-400">Password</label>
            <input
              onKeyDown={(e) => handleKeydown(e)}
              onChange={() => setErrorMsg("")}
              ref={password}
              className="w-full border-2 border-gray-600 rounded-md p-3 mt-1 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
              type="password"
            />
          </div>
        </div>
        <AuthPageDivider />
        {/* Social Login Buttons */}
        <div className="flex flex-col  ">
          <OauthLoginButtons />
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col gap-y-4">
          <button
            onClick={(e) => handleSumbit(e)}
            className="py-3 rounded-lg bg-green-500 text-black text-m font-bold active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all"
          >
            Sign in
          </button>
          <a
            href="/forgetpassword"
            className="font-medium text-sm text-gray-400 text-center hover:text-white transition"
          >
            Forgot password?
          </a>
          <a
            href="/signup"
            className="font-medium text-sm text-gray-400 text-center hover:text-white transition"
          >
            Sign up
          </a>
          <span className="text-center text-red-400 text-sm">{errorMsg}</span>
        </div>
      </div>
    </div>
  );
}
