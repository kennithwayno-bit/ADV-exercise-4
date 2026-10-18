"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault(); 
    setErrorMessage(""); 

    if (email.trim() === "") {
      setErrorMessage("Email cannot be empty.");
      return;
    }

    if (!email.endsWith("@gmail.com")) {
      setErrorMessage("Please use a valid @gmail.com address.");
      return;
    }

    if (password.length <= 6) {
      setErrorMessage("Password must be more than 6 characters long.");
      return;
    }

    router.push("/notes");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-300 p-4">
      {/* Added animate-fade-in and slight scale on hover for the card */}
      <div className="w-full max-w-md rounded-2xl bg-white/90 p-8 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:shadow-indigo-500/20 animate-in fade-in zoom-in duration-700">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Welcome Back ✨</h1>
          <p className="text-gray-500 mt-3 font-medium">Sign in to access your notes</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Email Address
            </label>
            {/* FIX: Added text-gray-900 and placeholder-gray-400 */}
            <input
              type="text"
              placeholder="username@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Password
            </label>
            {/* FIX: Added text-gray-900 and placeholder-gray-400 */}
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
            />
          </div>

          {/* Added hover:-translate-y-1 for button animation */}
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-4 text-white font-bold text-lg shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-1 hover:shadow-indigo-500/50 active:translate-y-0"
          >
            Sign In
          </button>

          {errorMessage && (
            <div className="mt-4 p-4 rounded-xl bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-bold animate-bounce shadow-sm">
              ⚠️ {errorMessage}
            </div>
          )}
        </form>
      </div>
    </main>
  );
}