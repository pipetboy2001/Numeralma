// src/pages/About.tsx
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-gray-900 text-white p-6">
      <div className="container mx-auto">
        <Navbar />
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center font-serif">
            📜 Acerca de la Numerología
          </h1>
          
          <div className="bg-black/30 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10">
            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4 text-amber-300">¿Qué es la Numerología?</h2>
              <p className="mb-4">
                La numerología es un antiguo sistema de adivinación que interpreta el significado simbólico 
                de los números y su influencia en la vida humana. Se basa en la creencia de que el universo 
                es un sistema matemático y que los números contienen energías vibratorias que pueden 
                revelar información sobre una persona, su destino y sus cualidades inherentes.
              </p>
              <p>
                Esta práctica tiene raíces en diversas tradiciones, incluyendo la Antigua Grecia 
                con Pitágoras, quien creía que todo puede reducirse a números. También ha sido parte 
                de tradiciones esotéricas en culturas egipcias, chinas, hindúes y cabalísticas.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4 text-amber-300">Los Números Maestros</h2>
              <p className="mb-3">
                En numerología, los números maestros (11, 22, 33) son considerados especialmente 
                poderosos y no se reducen a un solo dígito. Cada uno tiene significados profundos:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>
                  <span className="font-bold text-purple-300">11</span> - El Iluminador: Representa la intuición, 
                  la inspiración y la iluminación espiritual.
                </li>
                <li>
                  <span className="font-bold text-purple-300">22</span> - El Constructor Maestro: Simboliza el poder 
                  de manifestar grandes ideas con practicidad.
                </li>
                <li>
                  <span className="font-bold text-purple-300">33</span> - El Maestro Espiritual: Encarna el servicio 
                  desinteresado, la enseñanza y la compasión universal.
                </li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-serif mb-4 text-amber-300">Los Números Principales</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium text-lg mb-2">Número del Camino de Vida</h3>
                  <p className="text-sm text-white/80">
                    Derivado de la fecha de nacimiento completa, revela el propósito principal de tu vida, 
                    las lecciones que viniste a aprender y tu dirección vital.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Número de Expresión</h3>
                  <p className="text-sm text-white/80">
                    Calculado a partir de todas las letras del nombre completo, indica tus talentos naturales, 
                    habilidades y potencial.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Número del Alma</h3>
                  <p className="text-sm text-white/80">
                    Basado en las vocales del nombre, revela tus deseos más profundos, motivaciones 
                    internas y lo que realmente anhela tu corazón.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Número de Personalidad</h3>
                  <p className="text-sm text-white/80">
                    Calculado de las consonantes del nombre, muestra la imagen que proyectas a los demás 
                    y cómo te percibe el mundo exterior.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-serif mb-4 text-amber-300">Compatibilidad Numerológica</h2>
              <p className="mb-4">
                La numerología de pareja analiza cómo las energías numéricas de dos personas interactúan 
                entre sí. Puede revelar áreas de armonía, posibles desafíos y el propósito kármico de la relación.
              </p>
              <p>
                Las conexiones kármicas en numerología sugieren que dos almas han compartido vidas pasadas 
                y se han reunido en esta vida para completar lecciones o resolver asuntos pendientes. Estas 
                relaciones suelen sentirse intensas y familiares desde el principio.
              </p>
            </section>
          </div>
          
          <footer className="text-center mt-8 text-white/60 text-sm">
            <p>Tu Numerología Mística © 2025 - La sabiduría de los números a tu alcance</p>
            <p>Desarrollado por [Tu Nombre]</p>
            <p>Inspirado por la magia de la numerología y el cosmos</p>
            </footer>
        </div>
        </div>
        </main>
    );
}
