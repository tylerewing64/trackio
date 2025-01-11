import React from "react";
import OauthLoginButtons from "../Components/OauthLoginButtons";
import AuthPageDivider from "../Components/AuthPageDivider";
function SignUpStepOne({ setEmail, email, setStepNumber }) {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-semibold text-white py-2 break-words">
        Sign up to Trackio
      </h1>
      <div>
        <label className="text-sm text-gray-400">Email</label>
        <input
          className="w-full border-2 border-gray-600 rounded-md p-3 mt-1 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter your email"
          required
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mt-8 flex flex-col gap-y-4">
        <button
          type="submit"
          className="py-3 rounded-lg bg-green-500 text-black text-m font-bold active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all"
        >
          Register
        </button>
      </div>

      {/* Divider */}
      <AuthPageDivider />
      {/* Social Login Buttons */}
      <OauthLoginButtons />
      {/* Divider */}
      <AuthPageDivider />

      {/* Already have an account link */}
      <p className="font-medium text-base text-center text-gray-400">
        Already have an account?{" "}
        <a href="/" className="text-dark-green hover:underline">
          Sign in
        </a>
      </p>
    </>
  );
}

export default SignUpStepOne;
