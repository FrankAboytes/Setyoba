import React from 'react';
import { Sparkles } from 'lucide-react';
import NeonServiceCard from './components/NeonServiceCard';

function App() {
  const services = [
    {
        title: "Lifting & Cejas HD",
        price: "450",
        theme: "pink",
        features: ["Lifting de Pestañas", "Diseño de Cejas HD", "Lipoláser (Zona pequeña)"]
    },
    {
      title: "Body Sculpt Deluxe",
      price: "3,800",
      theme: "pink",
      features: ["Valoración clínica", "7 sesiones aparatología", "1 Sesión maderoterapia", "2 presoterapias", "Plan alimenticio"]
    },
    {
      title: "Facial HiloLift",
      price: "600",
      theme: "blue",
      features: ["Limpieza HiloLift", "Presoterapia piernas", "Lipoláser facial"]
    }
  ];

  return (
    <div className="min-h-screen bg-neon-dark relative text-white">
      {/* Luces de fondo */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-neon-pink/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-neon-blue/20 blur-[120px] rounded-full pointer-events-none"></div>

      <main className="relative z-10 container mx-auto px-6 py-16">
        <header className="text-center mb-20">
          <div className="flex justify-center mb-4"><Sparkles className="text-neon-pink w-12 h-12" /></div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-blue">
            Setyoba Studio
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((s, i) => (
            <NeonServiceCard key={i} {...s} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;