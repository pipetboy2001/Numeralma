// src/pages/Home.tsx
import Calculator from "../components/Calculator";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-900 to-gray-900 text-white p-6 relative overflow-hidden">
      {/* Estrellas en el fondo */}
      <div className="stars absolute inset-0 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <Navbar />
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-3 text-center font-serif bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-amber-200 to-purple-300">
            🔮 Tu Numerología Mística
          </h1>
          <p className="text-center max-w-2xl mx-auto mb-8 text-white/80">
            Los números que rigen tu vida revelan secretos sobre tu destino, personalidad y 
            propósito. Descubre el significado cósmico detrás de tu nombre y fecha de nacimiento.
          </p>
          
          <Calculator />
        </div>
      </div>
    </main>
  );
}