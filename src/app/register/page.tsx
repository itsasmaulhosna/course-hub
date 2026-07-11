import AnimatedBackground from "@/Components/Auth/AnimatedBackground";
import Hero from "@/Components/Auth/Hero";

import Particles from "@/Components/Auth/Particles";
import RegisterForm from "@/Components/Auth/RegisterForm";


export default function RegisterPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070B18]">
      <AnimatedBackground />
      
      <Particles />

      <div className="relative z-10 flex min-h-screen flex-col lg:grid lg:grid-cols-2">
        <Hero />
        <RegisterForm />
      </div>
    </main>
  );
}