import { motion } from 'framer-motion';
import { BarChart3, Activity, Database, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Logo / Title */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 rounded-2xl border border-blue-500/20"
                  style={{ borderStyle: 'dashed' }}
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-black gradient-text">
                  FASTER
                </h1>
                <p className="text-slate-400 text-sm font-medium tracking-widest uppercase">
                  Analytics Studio
                </p>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-slate-400 text-lg max-w-2xl leading-relaxed"
            >
              Dashboard interactivo de análisis salarial del sector tecnológico. 
              <span className="text-blue-400"> Big Data II</span> — Explorando 22,524 registros de compensaciones en la industria tech.
            </motion.p>
          </div>

          {/* Status indicators */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            <div className="glass rounded-xl p-3 px-4 flex items-center gap-3">
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">Sistema Activo</span>
            </div>
            
            <div className="flex gap-2">
              <div className="glass rounded-lg p-2 px-3 flex items-center gap-2">
                <Database className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300 text-xs">22.5K registros</span>
              </div>
              <div className="glass rounded-lg p-2 px-3 flex items-center gap-2">
                <Activity className="w-4 h-4 text-purple-400" />
                <span className="text-slate-300 text-xs">3 métricas</span>
              </div>
              <div className="glass rounded-lg p-2 px-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-slate-300 text-xs">Plotly + React</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gradient line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        />
      </div>
    </motion.header>
  );
}
