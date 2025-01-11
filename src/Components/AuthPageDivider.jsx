import React from "react";

function AuthPageDivider() {
  return (
    <>
      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-600"></div>
        <span className="px-4 text-gray-500 text-sm">or</span>
        <div className="flex-grow border-t border-gray-600"></div>
      </div>
    </>
  );
}

export default AuthPageDivider;
