import React, { useState } from "react";

export default function Forget() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // Simulate success for now (replace with backend API call)
    setSuccessMessage("If the email exists, a reset link has been sent!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="p-8 md:p-12 rounded-lg bg-gray-900 shadow-lg w-full max-w-md">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          Reset your password
        </h1>

        <p className="text-sm text-gray-400 text-center mb-8">
          Enter your email address, and we’ll send you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="text-sm text-gray-300 font-medium block mb-2">
              Email
            </label>
            <input
              className="w-full border border-gray-700 bg-gray-800 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}

          {successMessage && (
            <p className="text-green-500 text-sm mb-4">{successMessage}</p>
          )}

          <button
            type="submit"
            className="w-full bg-green-500 text-black font-medium py-3 rounded-md hover:bg-green-600 transition"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-6 text-center">
          <a
            href="/"
            className="text-sm text-gray-400 hover:underline hover:text-white transition"
          >
            Back to login
          </a>
        </div>
      </div>
    </div>
  );
}
