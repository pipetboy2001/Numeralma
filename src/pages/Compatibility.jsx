import CoupleCompatibility from "../components/CoupleCompatibility";
import Navbar from "../components/Navbar";

export default function Compatibility() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-gray-900 text-white p-6">
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center font-serif">
          🔮 Compatibilidad Numerológica
        </h1>
        <p className="text-center max-w-2xl mx-auto mb-8 text-white/80">
          Descubre la conexión numerológica entre dos personas. Los números revelan 
          patrones de energía que influyen en cómo interactúan las almas entre sí.
        </p>
        <CoupleCompatibility />
      </div>
    </main>
  );
}