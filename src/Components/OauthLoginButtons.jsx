import React from "react";

function OauthLoginButtons() {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex items-center rounded-3xl border-gray-600 border-2 my-2 p-2 cursor-pointer active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all bg-gray-800">
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            className="ml-2 w-6 h-auto"
            alt="Google"
          />
          <button className="text-white text-sm ml-4">
            Continue With Google
          </button>
        </div>

        <div className="flex items-center rounded-3xl border-gray-600 border-2 my-2 p-2 cursor-pointer active:scale-[.98] hover:scale-[1.01] ease-in-out transition-all bg-gray-800">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-linkedin-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-498418.png?f=webp&w=256"
            className="ml-2 w-6 h-auto"
            alt="Facebook"
          />
          <button className="text-white text-sm ml-4">
            Continue With Linkedin
          </button>
        </div>
      </div>
    </>
  );
}

export default OauthLoginButtons;
