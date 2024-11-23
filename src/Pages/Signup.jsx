import React from 'react';

export default function Signup() {
  return (
    <div className="grid min-h-screen flex items-center justify-center bg-black">
      <div className="p-8 md:p-12 rounded-2xl border-2 border-gray-700 bg-gray-900 w-full max-w-md shadow-lg">
        <h1 className="text-3xl md:text-4xl font-semibold text-white py-2 break-words">
          Sign up to Trackio
        </h1>

        <div>
          <label className="text-sm text-gray-400">Email</label>
          <input
            className="w-full border-2 border-gray-600 rounded-md p-3 mt-1 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mt-8 flex flex-col gap-y-4">
          <button className="py-3 rounded-lg bg-green-500 text-black text-m font-bold active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all">
            Register
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="px-4 text-gray-500 text-sm">or</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex flex-col mt-5">
          <div className="flex items-center rounded-3xl border-gray-600 border-2 my-2 p-2 cursor-pointer active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all bg-gray-800">
            <img
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              className="ml-2 w-6 h-auto"
              alt="Google"
            />
            <button className="text-white text-sm ml-4">Continue With Google</button>
          </div>

          <div className="flex items-center rounded-3xl border-gray-600 border-2 my-2 p-2 cursor-pointer active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all bg-gray-800">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-facebook-icon-download-in-svg-png-gif-file-formats--logo-social-media-brand-f-logos-pack-company-icons-1597577.png?f=webp&w=256"
              className="ml-2 w-6 h-auto"
              alt="Facebook"
            />
            <button className="text-white text-sm ml-4">Continue With Facebook</button>
          </div>

          <div className="flex items-center rounded-3xl border-gray-600 border-2 my-2 p-2 cursor-pointer active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all bg-gray-800">
            <img
              src="https://download.logo.wine/logo/Apple_Inc./Apple_Inc.-Logo.wine.png"
              className="ml-2 w-6 h-auto"
              alt="Apple"
            />
            <button className="text-white text-sm ml-4">Continue With Apple</button>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-600"></div>
          <span className="px-4 text-gray-500 text-sm">or</span>
          <div className="flex-grow border-t border-gray-600"></div>
        </div>

        {/* Already have an account link */}
        <p className="font-medium text-base text-center text-gray-400">
          Already have an account?{' '}
          <a href="/" className="text-dark-green hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
