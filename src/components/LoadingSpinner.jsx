import { motion } from "framer-motion";

export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="relative">
        {/* Círculo exterior */}
        <motion.div 
          className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-400 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Círculo interior */}
        <motion.div 
          className="absolute top-1/2 left-1/2 w-8 h-8 border-4 border-indigo-500/30 border-t-indigo-400 rounded-full -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Estrella central */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-300"
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ✦
        </motion.div>
      </div>
      
      <motion.p 
        className="mt-4 text-sm text-white/70 italic"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Consultando las estrellas...
      </motion.p>
    </div>
  );
}