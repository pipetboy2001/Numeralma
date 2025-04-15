import { useState } from "react";
import { useNumerology } from "../hooks/useNumerology";
import ResultCard from "./ResultCard";

export default function CoupleCompatibility() {
  const [person1, setPerson1] = useState({
    name: "",
    birthdate: "",
  });
  const [person2, setPerson2] = useState({
    name: "",
    birthdate: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const person1Results = useNumerology(person1.name, person1.birthdate);
  const person2Results = useNumerology(person2.name, person2.birthdate);

  const calculateCompatibility = () => {
    if (!person1.birthdate || !person2.birthdate) return { score: "-", meaning: "" };
    
    const lifePathsSum = Number(person1Results.lifePath) + Number(person2Results.lifePath);
    const compatibilityNumber = lifePathsSum.toString().split("").reduce((a, b) => a + parseInt(b), 0);
    
    let meaning = "";
    let score = compatibilityNumber.toString();
    
    switch(compatibilityNumber) {
      case 1:
        meaning = "Una relación pionera y llena de iniciativa. Ambos son independientes y pueden necesitar trabajar en el compromiso.";
        break;
      case 2:
        meaning = "Relación armoniosa y colaborativa. Tienen una conexión emocional profunda y son buenos compañeros.";
        break;
      case 3:
        meaning = "Relación creativa y expresiva. Hay mucha diversión y entusiasmo, pero puede faltar disciplina.";
        break;
      case 4:
        meaning = "Relación estable y práctica. Construyen juntos con una base sólida, pero pueden caer en rutinas.";
        break;
      case 5:
        meaning = "Relación aventurera y dinámica. Hay mucha libertad y adaptabilidad, pero puede faltar compromiso.";
        break;
      case 6:
        meaning = "Relación armoniosa y responsable. Hay mucho amor y cuidado mutuo, ideal para formar una familia.";
        break;
      case 7:
        meaning = "Relación profunda e intelectual. Conexión espiritual fuerte, pero pueden ser demasiado introvertidos juntos.";
        break;
      case 8:
        meaning = "Relación poderosa y ambiciosa. Pueden lograr mucho juntos, especialmente en lo material.";
        break;
      case 9:
        meaning = "Relación humanitaria y compasiva. Tienen un propósito mayor juntos, pero pueden ser demasiado idealistas.";
        break;
      case 11:
        meaning = "Relación intuitiva y visionaria. Tienen una conexión casi telepática y un propósito elevado.";
        break;
      case 22:
        meaning = "Relación constructora y transformadora. Pueden cambiar el mundo juntos si canalizan su energía.";
        break;
      default:
        meaning = "Esta relación tiene características únicas que evolucionan con el tiempo.";
    }
    
    return { score, meaning };
  };

  const compatibility = calculateCompatibility();

  const karmaConnection = () => {
    if (!person1.birthdate || !person2.birthdate) return { exists: false, description: "" };
    
    const p1Day = new Date(person1.birthdate).getDate();
    const p2Day = new Date(person2.birthdate).getDate();
    const p1Month = new Date(person1.birthdate).getMonth() + 1;
    const p2Month = new Date(person2.birthdate).getMonth() + 1;
    
    // Karma cuando los días suman 7, 9, 11 (números espirituales)
    const daySum = p1Day + p2Day;
    // Karma cuando los meses son opuestos (suma 13)
    const monthSum = p1Month + p2Month;
    
    if ([7, 9, 11].includes(daySum) || monthSum === 13) {
      return {
        exists: true,
        description: "Existe una conexión kármica entre ustedes. Han compartido vidas pasadas y tienen lecciones importantes que aprender juntos en esta vida."
      };
    }
    
    return { exists: false, description: "" };
  };

  const karma = karmaConnection();

  return (
    <div className="max-w-2xl mx-auto bg-black/30 backdrop-blur-md p-6 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center font-serif">Compatibilidad Numerológica</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl text-purple-300 font-serif">Primera Persona</h3>
          <label className="block">
            <span className="block text-sm">Nombre completo</span>
            <input
              type="text"
              className="w-full p-2 rounded bg-white/10 text-white border border-white/20"
              value={person1.name}
              onChange={(e) => setPerson1({...person1, name: e.target.value})}
            />
          </label>
          <label className="block">
            <span className="block text-sm">Fecha de nacimiento</span>
            <input
              type="date"
              className="w-full p-2 rounded bg-white/10 text-white border border-white/20"
              value={person1.birthdate}
              onChange={(e) => setPerson1({...person1, birthdate: e.target.value})}
            />
          </label>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl text-purple-300 font-serif">Segunda Persona</h3>
          <label className="block">
            <span className="block text-sm">Nombre completo</span>
            <input
              type="text"
              className="w-full p-2 rounded bg-white/10 text-white border border-white/20"
              value={person2.name}
              onChange={(e) => setPerson2({...person2, name: e.target.value})}
            />
          </label>
          <label className="block">
            <span className="block text-sm">Fecha de nacimiento</span>
            <input
              type="date"
              className="w-full p-2 rounded bg-white/10 text-white border border-white/20"
              value={person2.birthdate}
              onChange={(e) => setPerson2({...person2, birthdate: e.target.value})}
            />
          </label>
        </div>
      </div>
      
      <button
        className="w-full bg-purple-700 hover:bg-purple-800 transition rounded p-2 mt-6"
        onClick={() => setSubmitted(true)}
      >
        Revelar compatibilidad ⚡
      </button>

      {submitted && (
        <div className="mt-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-serif mb-2 text-center text-amber-300">Números de {person1.name.split(" ")[0]}</h3>
              <div className="space-y-2">
                <ResultCard title="Camino de Vida" value={person1Results.lifePath} description="Propósito vital" />
                <ResultCard title="Expresión" value={person1Results.expression} description="Talentos naturales" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-serif mb-2 text-center text-amber-300">Números de {person2.name.split(" ")[0]}</h3>
              <div className="space-y-2">
                <ResultCard title="Camino de Vida" value={person2Results.lifePath} description="Propósito vital" />
                <ResultCard title="Expresión" value={person2Results.expression} description="Talentos naturales" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-4">
            <div className="bg-purple-900/50 p-4 rounded-xl shadow-inner">
              <h3 className="text-xl font-bold font-serif text-center mb-2">Compatibilidad: <span className="text-amber-300">{compatibility.score}</span></h3>
              <p className="text-white/90 text-center">{compatibility.meaning}</p>
              
              {karma.exists && (
                <div className="mt-4 bg-amber-900/30 p-3 rounded-lg border border-amber-500/30">
                  <h4 className="text-center font-bold text-amber-300">✨ Conexión Kármica Detectada ✨</h4>
                  <p className="text-center text-sm mt-1">{karma.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}