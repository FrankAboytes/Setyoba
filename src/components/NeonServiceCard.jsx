    import React from 'react';
    import { motion } from 'framer-motion';
    import { Check, Sparkles } from 'lucide-react';

    const NeonServiceCard = ({ title, price, features, theme = 'pink' }) => {
    // Definimos estilos basados en el tema elegido (pink o blue)
    const themeStyles = {
        pink: {
        borderColor: 'border-neon-pink/50',
        shadowColor: 'shadow-neon-pink/30',
        textColor: 'text-neon-pink',
        glowBg: 'bg-neon-pink',
        buttonGradient: 'from-neon-pink to-neon-purple'
        },
        blue: {
        borderColor: 'border-neon-blue/50',
        shadowColor: 'shadow-neon-blue/30',
        textColor: 'text-neon-blue',
        glowBg: 'bg-neon-blue',
        buttonGradient: 'from-neon-blue to-cyan-500'
        }
    };

    const currentTheme = themeStyles[theme];

    return (
        <motion.div
        // --- ANIMACIÓN FRAMER MOTION ---
        initial={{ opacity: 0, y: 60 }} // Empieza invisible y abajo
        whileInView={{ opacity: 1, y: 0 }} // Al entrar en pantalla: visible y sube
        viewport={{ once: true, margin: "-100px" }} // Se activa una sola vez
        transition={{ duration: 0.7, ease: "easeOut" }} // Duración de la animación
        whileHover={{ scale: 1.03 }} // Pequeño zoom al pasar el mouse
        // --- CLASES TAILWIND ---
        // backdrop-blur-md genera el efecto vidrio esmerilado
        className={`relative bg-white/5 backdrop-blur-md border ${currentTheme.borderColor} rounded-3xl p-8 w-full max-w-sm mx-auto shadow-lg hover:${currentTheme.shadowColor} hover:shadow-2xl transition-all duration-300`}
        >
        {/* Efecto de brillo superior difuminado (Luz de fondo) */}
        <div className={`absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 ${currentTheme.glowBg} rounded-full blur-[80px] opacity-30 pointer-events-none`}></div>

        {/* Encabezado */}
        <div className="text-center mb-8 relative z-10">
            <h3 className={`text-2xl font-extrabold uppercase tracking-wider ${currentTheme.textColor} mb-3 drop-shadow-sm`}>
            {title}
            </h3>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-semibold">
            <Sparkles size={14} /> Paquete Premium
            </div>
        </div>

        {/* Lista de Servicios */}
        <ul className="space-y-4 mb-10 relative z-10">
            {features.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-200">
                <Check className={`w-5 h-5 ${currentTheme.textColor} mt-0.5 flex-shrink-0`} />
                <span className="text-sm font-medium leading-relaxed">{item}</span>
            </li>
            ))}
        </ul>

        {/* Precio y Botón */}
        <div className="text-center relative z-10">
            <div className="flex justify-center items-baseline mb-6">
            <span className="text-lg text-gray-400 mr-1">$</span>
            <span className="text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                {price}
            </span>
            </div>
            
            <motion.button
            whileTap={{ scale: 0.97 }}
            className={`w-full py-4 rounded-2xl font-bold text-white uppercase tracking-widest text-sm bg-gradient-to-r ${currentTheme.buttonGradient} hover:brightness-125 transition-all shadow-lg`}
            >
            Agendar Cita
            </motion.button>
            <p className="text-xs text-gray-500 mt-4">Aceptamos tarjetas de crédito y débito</p>
        </div>
        </motion.div>
    );
    };

    export default NeonServiceCard;