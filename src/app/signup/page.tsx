"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SignupUser } from "../lib/signup";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const user = await SignupUser(name,lastname, email,username , password);
      console.log(user);
      router.replace("/homepage");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const fullName = e.target.value;
  const [first, ...rest] = fullName.trim().split(" ");
  setName(first || "");
  setLastname(rest.join(" ") || "");
};

  return (
    <div className="min-h-screen relative bg-white flex items-center justify-center px-4 py-12 sm:py-20 overflow-hidden">
      {/* === Background Circles & Lines === */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <svg
          className="absolute top-[-10%] left-[10%] w-[600px] h-[600px] opacity-10 blur-sm animate-pulse-slow"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="300" cy="300" r="280" stroke="#FFB347" strokeWidth="1" />
          <circle
            cx="300"
            cy="300"
            r="240"
            stroke="#FFA500"
            strokeWidth="0.5"
          />
          <line
            x1="100"
            y1="100"
            x2="500"
            y2="500"
            stroke="#FFD580"
            strokeWidth="0.5"
          />
        </svg>

        <svg
          className="absolute bottom-[-15%] right-[5%] w-[400px] h-[400px] opacity-5 animate-spin-slow"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="200" cy="200" r="180" stroke="#FBBF24" strokeWidth="1" />
          <line
            x1="0"
            y1="200"
            x2="400"
            y2="200"
            stroke="#F59E0B"
            strokeWidth="0.4"
          />
        </svg>
      </div>

      {/* === Top Right Logo === */}
      <div className="absolute top-6 left-6 z-10">
        <img
          src="https://trade-treasury-payments.lovable.app/lovable-uploads/71ee7b01-b2fa-4d85-8487-6c164311c1dd.png"
          alt="Trade Treasury Logo"
          className="h-15 w-auto object-contain"
        />
      </div>

      {/* === Centered Card === */}
<div
        className="
  bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden z-10
  grid grid-cols-1 md:grid-cols-2
  max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:max-w-md max-[1000px]:mx-auto
"
      >        {/* Left */}
        {/* Left Section - Hidden below 1000px */}
        <div className="bg-[#f5f3f0] p-6 sm:p-10 flex flex-col items-center justify-center text-center max-[1000px]:hidden">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-800 mb-3 sm:mb-4">
            Reimagining Global Trade with CBDCs
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-sm mb-6">
            Experience the future of cross-border finance through secure,
            digital, and programmable money.
          </p>
          <img
            src="https://img.freepik.com/free-vector/digital-currency-concept-illustration_114360-8282.jpg?w=826"
            alt="CBDC Illustration"
            className="max-w-[220px] sm:max-w-[260px] rounded-md shadow-sm"
          />
        </div>

        {/* Right */}
        <div className="p-6 sm:p-10 flex items-center justify-center max-[1000px]:justify-center max-[1000px]:w-full">
          <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-5">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
              Signup to Your Account
            </h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-3 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your name"
              onChange={handleNameChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-3 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-3 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-md p-3 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="relative w-full overflow-hidden rounded-md py-3 font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 hover:from-orange-600 hover:via-amber-600 hover:to-yellow-500 transition-all" />
              <span className="relative z-10">
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                ) : (
                  "Sign Up"
                )}
              </span>{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
