import AnimatedBackground from "@/Components/Auth/AnimatedBackground";
import Hero from "@/Components/Auth/Hero";
import LoginForm from "@/Components/Auth/LoginForm";


export default function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070B18]">
      {/* Background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10 grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* Left Side */}
        <Hero />

        {/* Right Side */}
        <LoginForm />
      </div>
    </main>
  );
}