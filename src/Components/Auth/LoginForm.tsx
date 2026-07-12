"use client";

import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { signIn } from "@/lib/auth-client";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [loading, setLoading] = useState(false);

const handleLogin = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  if (!email || !password) {
    toast.error("Email and Password are required");
    return;
  }

  try {
    setLoading(true);

    const { data, error } = await signIn.email({
      email,
      password,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Login Successful 🎉");

    router.push("/");
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong");
  } finally {
    setLoading(false);
  }
};
const handleGoogleLogin = async () => {
  const { error } = await signIn.social({
    provider: "google",
    callbackURL: "/",
  });

  if (error) {
    toast.error(error.message);
  }
};

  return (
    <motion.section
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center px-6 py-10"
    >
      <div className="w-full max-w-md">

        {/* Heading */}

        <h2 className="text-4xl font-bold text-white">
          Welcome Back 👋
        </h2>

        <p className="mt-3 text-gray-400">
          Sign in to continue to your account.
        </p>

        {/* Form */}

        <form onSubmit={handleLogin}
 className="mt-10 space-y-6">

          {/* Email */}

          <div>

            <label className="mb-2 block text-sm text-gray-300">
              Email
            </label>

            <div className="relative">

              <Mail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

<input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white outline-none transition-all duration-300 placeholder:text-gray-500 hover:border-violet-400/40 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
/>

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="mb-2 block text-sm text-gray-300">
              Password
            </label>

            <div className="relative">

              <Lock
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-14 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 transition hover:text-white"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

          </div>

          {/* Remember */}

          <div className="flex items-center justify-between">

            <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-400">

              <input
                type="checkbox"
                className="h-4 w-4 accent-violet-600"
              />

              Remember me

            </label>

            <button
              type="button"
              className="cursor-pointer text-sm text-violet-400 hover:text-violet-300"
            >
              Forgot Password?
            </button>

          </div>

          {/* Login */}

<motion.button
  type="submit"
  disabled={loading}
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="group relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 py-4 font-semibold text-white transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/40 disabled:cursor-not-allowed disabled:opacity-70"
>
  {loading ? (
    <>
      <Loader2
        size={20}
        className="mr-2 animate-spin"
      />
      Signing In...
    </>
  ) : (
    <>
      <span className="relative z-10">
        Sign In
      </span>

      <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
    </>
  )}
</motion.button>
          {/* Divider */}

          <div className="flex items-center gap-4">

            <div className="h-px flex-1 bg-white/10" />

            <span className="text-sm text-gray-500">
              OR
            </span>

            <div className="h-px flex-1 bg-white/10" />

          </div>

          {/* Google */}

          <button
            type="button"
            onClick={handleGoogleLogin}

            className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 py-4 font-medium text-white transition-all duration-300 hover:bg-white/10"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-5 w-5"
            />

            Continue with Google

          </button>

        </form>

        {/* Bottom */}

        <p className="mt-8 text-center text-gray-400">

          Don't have an account?

          <button
            className="ml-2 cursor-pointer font-semibold text-violet-400 hover:text-violet-300"
          >
            Create Account
          </button>

        </p>

      </div>
    </motion.section>
  );
}