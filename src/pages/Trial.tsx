import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Navbar } from "@/components/Navbar";

/* ---------------- ANIMATIONS ---------------- */

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Trial() {
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("Nepal");
  const [countryOpen, setCountryOpen] = useState(false);

  const getCountryCode = (c: string) => {
    const map: Record<string, string> = {
      Nepal: "NP",
      India: "IN",
      USA: "US",
    };

    return map[c] ?? c.slice(0, 2).toUpperCase();
  };

  const { toast } = useToast();
  const navigate = useNavigate();

  /* ---------------- HANDLERS ---------------- */

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email to continue.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Trial started 🎉",
      description: "Check your inbox for next steps.",
    });

    setTimeout(() => navigate("/dashboard"), 1200);
  };

  const oauth = (provider: string) => {
    toast({
      title: `${provider} login`,
      description: "OAuth integration coming soon.",
    });
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 🎥 BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/image/bg_trial.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      <Navbar />

      {/* MAIN */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full max-w-md"
        >
          <motion.div
            variants={item}
            className="rounded-2xl border border-white/20 bg-white/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
          >
            {/* Country */}
            <motion.div variants={item} className="relative mb-6">
              <button
                onClick={() => setCountryOpen(!countryOpen)}
                className="group flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-gray-800 transition"
              >
                <span className="text-xs text-black group-hover:text-white transition">
                  {getCountryCode(country)}
                </span>
                <span className="text-black group-hover:text-white transition">
                  {country}
                </span>
                <ChevronDown className="h-4 w-4 text-black group-hover:text-white transition" />
              </button>

              {countryOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute mt-2 w-40 rounded-md border bg-white shadow-lg"
                >
                  {["Nepal", "India", "USA"].map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setCountry(c);
                        setCountryOpen(false);
                      }}
                      className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 text-black"
                    >
                      {c}
                    </button>
                  ))}
                </motion.div>
              )}
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={item}
              className="text-2xl font-semibold text-gray-900"
            >
              Start your free trial
            </motion.h1>

            <motion.p variants={item} className="mt-1 text-sm text-gray-600">
              Get 3 days free, then 3 months for $1/month
            </motion.p>

            {/* Email */}
            <motion.form
              variants={item}
              onSubmit={handleSubmit}
              className="mt-6 space-y-4"
            >
              <div>
                <Label className="text-black">Email</Label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 border border-green-500 transition bg-white text-black placeholder-gray-500 focus:border-primary"
                />
              </div>

              <motion.div whileTap={{ scale: 0.97 }}>
                <Button className="h-12 w-full">Continue with email</Button>
              </motion.div>
            </motion.form>

            {/* Divider */}
            <motion.div
              variants={item}
              className="my-6 flex items-center gap-3"
            >
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs text-gray-700">or</span>
              <div className="h-px flex-1 bg-gray-200" />
            </motion.div>

            {/* Social */}
            <motion.div variants={item} className="space-y-3 hover:space-y-4 ">
              {["Google", "Apple", "Facebook"].map((p) => (
                <motion.div
                  key={p}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    variant="outline"
                    className="h-12 w-full text-black hover:text-white hover:bg-gray-800 transition"
                    onClick={() => oauth(p)}
                  >
                    Sign up with {p}
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            {/* Footer */}
            <motion.p
              variants={item}
              className="mt-6 text-center text-sm text-gray-600"
            >
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-medium">
                Log in →
              </Link>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
