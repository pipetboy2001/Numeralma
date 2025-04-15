import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <motion.nav 
      className="backdrop-blur-lg bg-black/30 p-5 rounded-2xl mb-10 shadow-lg border border-white/10 relative overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <ul className="flex justify-center space-x-10 font-serif text-lg relative z-10">
        <NavItem to="/" icon="✨" label="Mi Numerología" isActive={isActive("/")} />
        <NavItem to="/compatibilidad" icon="⚡" label="Compatibilidad" isActive={isActive("/compatibilidad")} />
        <NavItem to="/acerca" icon="📜" label="Acerca de" isActive={isActive("/acerca")} />
      </ul>
    </motion.nav>
  );
}

const NavItem = ({ to, icon, label, isActive }) => {
  return (
    <li>
      <Link to={to} className="group relative block px-4 py-2">
        {/* Fondo activo */}
        {isActive && (
          <motion.div 
            className="absolute inset-0 bg-white/5 rounded-lg -z-10"
            layoutId="activeNavBackground"
            transition={{ type: "spring", duration: 0.6 }}
          />
        )}
        
        {/* Línea inferior animada */}
        <div className="relative overflow-hidden">
          <div className={`flex items-center transition-colors duration-300 ${isActive ? 'text-amber-300' : 'text-white/80 group-hover:text-white'}`}>
            <span className="mr-2">{icon}</span>
            <span>{label}</span>
          </div>
          
          <motion.div 
            className={`h-0.5 w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent absolute bottom-0 left-0`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isActive ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Línea en hover cuando no está activo */}
          {!isActive && (
            <motion.div 
              className="h-0.5 w-full bg-gradient-to-r from-transparent via-white/40 to-transparent absolute bottom-0 left-0"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </div>
        
        {/* Brillo en hover */}
        <motion.div 
          className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10"
        />
      </Link>
    </li>
  );
};