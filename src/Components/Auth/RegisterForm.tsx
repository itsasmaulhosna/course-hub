"use client";

import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import { motion } from "framer-motion";
import { signUp } from "@/lib/auth-client";

export default function RegisterForm() {
    const router = useRouter();

const [confirmPassword, setConfirmPassword] = useState("");
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [loading, setLoading] = useState(false);
const [image, setImage] = useState("");

const handleRegister = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  if (!name || !email || !password || !confirmPassword) {
    toast.error("All fields are required");
    return;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }

  try {
    setLoading(true);

    const { data, error } = await signUp.email({
      name,
      email,
      password,
        image,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Account created successfully 🎉");

    setTimeout(() => {
      router.push("/");
    }, 1500);

  } catch {
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
      className="flex items-center justify-center px-6 py-10 lg:py-16"
    >
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-violet-500/10 backdrop-blur-2xl">

        <h2 className="text-4xl font-bold text-white">
          Create Account 🚀
        </h2>

        <p className="mt-3 text-gray-400">
          Create your PromptVault account.
        </p>

        <form onSubmit={handleRegister} className="mt-8 space-y-5">

          {/* Name */}

          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Full Name
            </label>

            <div className="relative">

              <User
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
  type="text"
  placeholder="John Doe"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white outline-none transition-all duration-300 placeholder:text-gray-500 hover:border-violet-400/40 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
/>

            </div>
          </div>

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
  placeholder="john@example.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white outline-none transition-all duration-300 placeholder:text-gray-500 hover:border-violet-400/40 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
/>

            </div>
          </div>

{/* Profile Image URL */}

<div>
  <label className="mb-2 block text-sm text-gray-300">
    Profile Image URL
  </label>

  <div className="relative">

    <User
      size={20}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
    />

    <input
      type="url"
      placeholder="https://example.com/profile.jpg"
      value={image}
      onChange={(e) => setImage(e.target.value)}
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
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-14 text-white outline-none transition-all duration-300 placeholder:text-gray-500 hover:border-violet-400/40 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-white"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>
          </div>

          {/* Confirm Password */}

          <div className="relative">

  <Lock
    size={20}
    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
  />

  <input
    type={showConfirmPassword ? "text" : "password"}
    placeholder="Confirm Password"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    className="w-full rounded-xl border border-white/10 bg-white/5 py-4 pl-12 pr-14 text-white outline-none transition-all duration-300 placeholder:text-gray-500 hover:border-violet-400/40 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
  />

  <button
    type="button"
    onClick={() =>
      setShowConfirmPassword(!showConfirmPassword)
    }
    className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 transition hover:text-white"
  >
    {showConfirmPassword ? (
      <EyeOff size={20} />
    ) : (
      <Eye size={20} />
    )}
  </button>

</div>

          {/* Terms */}

          <label className="flex cursor-pointer items-start gap-3 text-sm text-gray-400">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 accent-violet-600"
            />

            <span>
              I agree to the{" "}
              <span className="text-violet-400">
                Terms
              </span>{" "}
              and{" "}
              <span className="text-violet-400">
                Privacy Policy
              </span>
            </span>
          </label>

          {/* Register Button */}

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
      Creating...
    </>
  ) : (
    <>
      <span className="relative z-10">
        Create Account
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

  className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 py-4 text-white transition hover:bg-white/10"
>
    <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-5 w-5"
            />
    Continue with Google
    </button>

        </form>

        <p className="mt-8 text-center text-gray-400">
          Already have an account?

          <a
            href="/login"
            className="ml-2 font-semibold text-violet-400 hover:text-violet-300"
          >
            Sign In
          </a>
        </p>

      </div>
    </motion.section>
  );
}