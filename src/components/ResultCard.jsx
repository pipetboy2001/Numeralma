// src/components/ResultCard.tsx

  
  export default function ResultCard({ title, value, description, icon }) {
    return (
      <div className="border border-white/20 p-5 rounded-xl bg-black/30 backdrop-blur-sm hover:bg-purple-900/20 transition duration-300 shadow-lg">
        <div className="flex items-center mb-2">
          {icon && <span className="text-xl mr-2">{icon}</span>}
          <h2 className="text-xl font-bold">
            {title}: <span className="text-purple-300">{value}</span>
          </h2>
        </div>
        <p className="text-white/90">{description}</p>
      </div>
    );
  }