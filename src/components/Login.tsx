import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Fake delay (replace with API)
    setTimeout(() => {
      if (!email || !password) {
        setError("Please enter email and password");
        setLoading(false);
        return;
      }

      // Store logged-in user
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: "Swostika Shrestha",
          email,
          profile: {},
        })
      );

      setLoading(false);
      navigate("/");
    }, 1200);
  };

  return (
    // use the provided image from public/images/login-bg.jpg as page background
    <div
      className="min-h-screen relative flex items-center justify-center px-4"
      style={{
        backgroundImage: "url('/image/login.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Card (ensure it's above the overlay) */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8"
      >
        {/* Logo / Title */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-white tracking-tight">
            E-IMS
          </h1>
          <p className="text-sm text-white/70 mt-1">
            Enterprise Inventory Management System
          </p>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/70" />
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 bg-white/10 text-white placeholder:text-white/60 border-white/20 focus-visible:ring-white"
            />
          </motion.div>

          {/* Password */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/70" />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 bg-white/10 text-white placeholder:text-white/60 border-white/20 focus-visible:ring-white"
            />
          </motion.div>

          {/* Error */}
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-red-300 text-center"
            >
              {error}
            </motion.div>
          )}

          {/* Login Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-indigo-600 hover:bg-white/90 font-semibold rounded-xl transition-all"
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </motion.div>
        </form>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center text-xs text-white/60"
        >
          © {new Date().getFullYear()} E-IMS. All rights reserved.
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
