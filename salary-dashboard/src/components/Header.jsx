import { motion } from 'framer-motion';
import { BarChart3, Activity, Database, Sparkles, Zap, TrendingUp, Users } from 'lucide-react';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden"
    >
      {/* Enhanced Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-20 right-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-float" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Team badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2 mb-4"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-xs font-semibold">Trabajo Práctico N°1</span>
          </div>
          <span className="text-slate-500 text-sm">Monzón Felipe, Rolón Agustín, Benítez Gonzalo</span>
        </motion.div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Logo / Title */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center shadow-xl shadow-blue-500/40 glow-blue">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-3 rounded-2xl border-2 border-blue-500/30"
                  style={{ borderStyle: 'dashed' }}
                />
                {/* Floating particles */}
                <motion.div
                  animate={{ y: [-5, 5, -5], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                />
              </motion.div>
              <div>
                <motion.h1 
                  className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                >
                  Salary Insights
                </motion.h1>
                <motion.p 
                  className="text-slate-400 text-sm font-bold tracking-[0.3em] uppercase mt-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <span className="text-blue-400">Analytics</span> Studio
                </motion.p>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-slate-400 text-lg max-w-2xl leading-relaxed"
            >
              Dashboard interactivo de análisis salarial del sector tecnológico.
              <motion.span 
                className="inline-flex items-center gap-1 px-2 py-0.5 ml-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold border border-blue-500/20"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
              >
                <Zap className="w-3 h-3" />
                Big Data II 2026
              </motion.span>
              <br />
              <span className="text-slate-500 text-base mt-2 block">
                Dataset: <span className="text-cyan-400 font-bold">22,770</span> registros → <span className="text-emerald-400 font-bold">22,524</span> limpios
              </span>
            </motion.p>
          </div>

          {/* Status indicators */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col gap-3"
          >
            <motion.div 
              className="glass rounded-xl p-3 px-4 flex items-center gap-3 border border-emerald-500/20"
              whileHover={{ scale: 1.02, borderColor: 'rgba(16, 185, 129, 0.4)' }}
            >
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">Sistema Activo</span>
              <TrendingUp className="w-3 h-3 text-emerald-400" />
            </motion.div>
            
            <div className="flex gap-2 flex-wrap">
              <motion.div 
                className="glass rounded-lg p-2 px-3 flex items-center gap-2 border border-blue-500/10"
                whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.3)' }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Database className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300 text-xs font-medium">22.5K registros</span>
              </motion.div>
              <motion.div 
                className="glass rounded-lg p-2 px-3 flex items-center gap-2 border border-purple-500/10"
                whileHover={{ scale: 1.05, borderColor: 'rgba(139, 92, 246, 0.3)' }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Activity className="w-4 h-4 text-purple-400" />
                <span className="text-slate-300 text-xs font-medium">3 métricas</span>
              </motion.div>
              <motion.div 
                className="glass rounded-lg p-2 px-3 flex items-center gap-2 border border-amber-500/10"
                whileHover={{ scale: 1.05, borderColor: 'rgba(245, 158, 11, 0.3)' }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-slate-300 text-xs font-medium">React + Recharts</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced gradient line with glow */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 relative"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500 via-purple-500 via-cyan-500 to-transparent" />
          <div className="absolute inset-0 h-2 bg-gradient-to-r from-transparent via-blue-500/20 via-purple-500/20 via-cyan-500/20 to-transparent blur-sm" />
        </motion.div>
      </div>
    </motion.header>
  );
}
