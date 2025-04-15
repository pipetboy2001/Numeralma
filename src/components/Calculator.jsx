import { useState } from "react";
import { useNumerology } from "../hooks/useNumerology";
import ResultCard from "./ResultCard";
import { motion } from "framer-motion";

export default function Calculator() {
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const results = useNumerology(name, birthdate);

  const getNumberMeaning = (type, value) => {
    const meanings = {
      lifePath: {
        "1": "Líder natural, independiente y pionero. Tu camino está marcado por la originalidad.",
        "2": "Mediador y cooperador. Tu camino está marcado por la armonía y las relaciones.",
        "3": "Expresivo y creativo. Tu camino está marcado por la comunicación y el optimismo.",
        "4": "Trabajador y organizado. Tu camino está marcado por la estabilidad y el orden.",
        "5": "Aventurero y adaptable. Tu camino está marcado por la libertad y el cambio.",
        "6": "Responsable y amoroso. Tu camino está marcado por el servicio y la familia.",
        "7": "Analítico y espiritual. Tu camino está marcado por la sabiduría interior.",
        "8": "Ambicioso y poderoso. Tu camino está marcado por el logro material.",
        "9": "Humanitario y compasivo. Tu camino está marcado por el servicio universal.",
        "11": "Intuitivo e iluminador. Tu camino está marcado por la inspiración espiritual.",
        "22": "Constructor maestro. Tu camino está marcado por el potencial para grandes logros.",
        "33": "Maestro espiritual. Tu camino está marcado por la guía y el servicio elevado."
      },
      expression: {
        "1": "Posees talentos de liderazgo y originalidad en tus expresiones.",
        "2": "Tienes dones para la diplomacia y la cooperación con los demás.",
        "3": "Tu expresión natural es creativa, comunicativa y optimista.",
        "4": "Tienes talentos para la organización, la estabilidad y el trabajo metódico.",
        "5": "Posees dones para la adaptabilidad, la comunicación y la versatilidad.",
        "6": "Tu expresión natural es amorosa, responsable y armoniosa.",
        "7": "Tienes talentos para el análisis, la investigación y la perspicacia.",
        "8": "Posees dones para la administración, el liderazgo y los logros materiales.",
        "9": "Tu expresión natural es humanitaria, compasiva y artística.",
        "11": "Posees dones para la intuición, la inspiración y la iluminación.",
        "22": "Tienes talentos para manifestar grandes visiones y proyectos.",
        "33": "Tu expresión natural es de maestría espiritual y servicio elevado."
      },
      soul: {
        "1": "Deseas independencia, liderazgo y originalidad en tu vida.",
        "2": "Anhelas paz, armonía y relaciones significativas.",
        "3": "Deseas expresión creativa, alegría y comunicación.",
        "4": "Anhelas estabilidad, orden y seguridad en tu vida.",
        "5": "Deseas libertad, aventura y experiencias variadas.",
        "6": "Anhelas amor, familia y servir a los que te rodean.",
        "7": "Deseas conocimiento, profundidad y comprensión espiritual.",
        "8": "Anhelas poder, éxito y reconocimiento material.",
        "9": "Deseas servir a la humanidad y expresar compasión universal.",
        "11": "Anhelas la iluminación espiritual y despertar a otros.",
        "22": "Deseas construir proyectos de gran impacto y trascendencia.",
        "33": "Anhelas guiar a otros con sabiduría y amor incondicional."
      },
      personality: {
        "1": "Los demás te ven como una persona independiente y confiada.",
        "2": "Los demás te perciben como diplomático y cooperativo.",
        "3": "Los demás te ven como creativo, expresivo y sociable.",
        "4": "Los demás te perciben como confiable, práctico y organizado.",
        "5": "Los demás te ven como adaptable, versátil y aventurero.",
        "6": "Los demás te perciben como responsable, amoroso y confiable.",
        "7": "Los demás te ven como pensativo, reservado e inteligente.",
        "8": "Los demás te perciben como fuerte, capaz y ambicioso.",
        "9": "Los demás te ven como sofisticado, idealista y compasivo.",
        "11": "Los demás te perciben como inspirador e intuitivo.",
        "22": "Los demás te ven como un visionario pragmático y emprendedor.",
        "33": "Los demás te perciben como sabio, compasivo y elevado."
      }
    };
    
    return meanings[type]?.[value] || "Este número contiene lecciones únicas para ti.";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulamos un tiempo de "cálculo místico"
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  // Animación para los inputs
  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "var(--purple-glow)" },
    blur: { scale: 1, boxShadow: "0 0 0 rgba(147, 51, 234, 0)" }
  };

  // Animación para los resultados
  const resultContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="max-w-xl mx-auto bg-black/30 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-purple-500/30 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Efectos decorativos */}
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* Estrellas decorativas */}
      <div className="absolute top-4 left-6 text-amber-300/30 text-sm">✧</div>
      <div className="absolute top-8 right-8 text-purple-300/20 text-xs">✦</div>
      <div className="absolute bottom-6 left-10 text-indigo-300/20 text-xs">✧</div>
      <div className="absolute bottom-10 right-10 text-amber-300/30 text-sm">✦</div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block mb-2">
            <span className="block text-sm font-medium text-purple-300 mb-2 flex items-center">
              <span className="mr-2 text-lg">✨</span> Tu nombre completo
            </span>
            <motion.input
              type="text"
              className="w-full p-4 rounded-lg bg-white/5 text-white border border-purple-500/30 focus:border-purple-400 focus:outline-none transition"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Escribe tu nombre completo"
              required
              variants={inputVariants}
              initial="blur"
              whileFocus="focus"
              whileTap="focus"
              transition={{ duration: 0.3 }}
            />
            <span className="text-xs text-purple-300/80 mt-2 block italic">Tu nombre contiene la esencia de quién eres</span>
          </label>
        </div>
        <div className="mb-6">
          <label className="block mb-2">
            <span className="block text-sm font-medium text-purple-300 mb-2 flex items-center">
              <span className="mr-2 text-lg">🌙</span> Tu fecha de nacimiento
            </span>
            <motion.input
              type="date"
              className="w-full p-4 rounded-lg bg-white/5 text-white border border-purple-500/30 focus:border-purple-400 focus:outline-none transition"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              required
              variants={inputVariants}
              initial="blur"
              whileFocus="focus"
              whileTap="focus"
              transition={{ duration: 0.3 }}
            />
            <span className="text-xs text-purple-300/80 mt-2 block italic">El día que llegaste a este plano de existencia</span>
          </label>
        </div>
        <motion.button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-700 to-indigo-800 hover:from-purple-600 hover:to-indigo-700 transition rounded-lg p-4 mt-6 font-medium shadow-lg relative overflow-hidden group"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          disabled={isLoading}
        >
          {/* Efecto de brillo en hover */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
          
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin w-6 h-6 border-3 border-white border-t-transparent rounded-full mr-2"></div>
              <span>Consultando los astros...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <span className="mr-2">Revelar mis números</span>
              <span className="text-lg">✨</span>
            </div>
          )}
        </motion.button>
      </form>

      {submitted && (
        <motion.div 
          className="mt-12 space-y-8 relative pt-6 border-t border-purple-500/30"
          variants={resultContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Fondo brillante animado */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent rounded-xl -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-400/5 via-transparent to-transparent animate-pulse"></div>
          </div>
          
          <motion.h2 
            className="text-2xl font-serif text-center font-medium bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-purple-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            ✧ Tu Lectura Numerológica ✧
          </motion.h2>
          
          <ResultCard 
            title="Camino de Vida" 
            value={results.lifePath} 
            description={getNumberMeaning("lifePath", results.lifePath)}
            icon="🛤️" 
            color="from-purple-600 to-indigo-700"
          />
          
          <ResultCard 
            title="Número de Expresión" 
            value={results.expression} 
            description={getNumberMeaning("expression", results.expression)}
            icon="🎭" 
            color="from-indigo-600 to-blue-700"
          />
          
          <ResultCard 
            title="Número del Alma" 
            value={results.soul} 
            description={getNumberMeaning("soul", results.soul)}
            icon="✨" 
            color="from-pink-600 to-purple-700"
          />
          
          <ResultCard 
            title="Número de Personalidad" 
            value={results.personality} 
            description={getNumberMeaning("personality", results.personality)}
            icon="👁️" 
            color="from-amber-600 to-orange-700"
          />
          
          <motion.div 
            className="text-center text-sm text-white/70 mt-8 pt-6 border-t border-white/10 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <p className="max-w-md mx-auto">
              Los números revelan patrones cósmicos que rigen tu vida, pero recuerda que tú tienes el poder de crear tu propio destino.
            </p>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}