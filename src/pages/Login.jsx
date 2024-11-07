import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("User logged in successfully");
      setError("");
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
      console.error("Login error:", err);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (err) {
      setError("Failed to sign in with Google. Try again.");
      console.error("Google sign-in error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#141619] text-white">
      <div className="p-6 rounded-lg shadow-lg bg-[#2C2E3A] w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        {/* Email and Password Login Form */}
        <form onSubmit={loginHandler} className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full p-2 mb-4 text-black rounded-md focus:outline-none"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full p-2 mb-4 text-black rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-[#0A21C0] text-white py-2 rounded-md hover:bg-[#050A44] mb-4"
          >
            Login with Email
          </button>
        </form>

        <p className="text-center mb-4">or</p>

        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-[#050A44] text-white py-2 rounded-md hover:bg-[#0A21C0] mb-4"
        >
          Sign in with Google
        </button>

        <p className="mt-4 text-center">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-[#B3B4BD] underline hover:text-[#0A21C0]">
            Click here to sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
