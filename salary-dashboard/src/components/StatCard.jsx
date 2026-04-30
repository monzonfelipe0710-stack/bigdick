import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus, ArrowUpRight } from 'lucide-react';

const iconMap = {
  'trending-up': TrendingUp,
  'trending-down': TrendingDown,
  'minus': Minus
};

const colorMap = {
  blue: 'from-blue-500 to-cyan-500',
  emerald: 'from-emerald-500 to-teal-500',
  purple: 'from-purple-500 to-violet-500',
  amber: 'from-amber-500 to-orange-500',
  rose: 'from-rose-500 to-pink-500'
};

const glowMap = {
  blue: 'shadow-blue-500/30',
  emerald: 'shadow-emerald-500/30',
  purple: 'shadow-purple-500/30',
  amber: 'shadow-amber-500/30',
  rose: 'shadow-rose-500/30'
};

export default function StatCard({ title, value, subtitle, trend, trendValue, color = 'blue', delay = 0 }) {
  const gradientClass = colorMap[color] || colorMap.blue;
  const glowClass = glowMap[color] || glowMap.blue;
  
  const getTrendIcon = () => {
    if (!trend) return null;
    if (trend === 'up') return <TrendingUp className="w-3 h-3" />;
    if (trend === 'down') return <TrendingDown className="w-3 h-3" />;
    return <Minus className="w-3 h-3" />;
  };

  const getTrendColor = () => {
    if (trend === 'up') return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
    if (trend === 'down') return 'bg-rose-500/20 text-rose-400 border-rose-500/30';
    return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ 
        y: -12, 
        scale: 1.02,
        transition: { duration: 0.4, type: "spring", stiffness: 300 }
      }}
      className={`glass-card rounded-2xl p-6 relative overflow-hidden group cursor-pointer border border-slate-700/30 hover:border-slate-600/50 transition-colors duration-500`}
    >
      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
      />
      
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Top accent line with glow */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${gradientClass} rounded-t-2xl`} />
      <div className={`absolute top-0 left-0 right-0 h-4 bg-gradient-to-r ${gradientClass} opacity-20 blur-md rounded-t-2xl`} />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">
            {title}
          </span>
          {trend && (
            <motion.div 
              className={`flex items-center gap-1 px-2 py-1 rounded-full border ${getTrendColor()} backdrop-blur-sm`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: delay + 0.3, type: "spring", stiffness: 400 }}
              whileHover={{ scale: 1.1 }}
            >
              {getTrendIcon()}
              <span className="text-xs font-bold">{trendValue}</span>
            </motion.div>
          )}
        </div>
        
        <motion.h3
          initial={{ scale: 0.5, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.2, type: "spring", stiffness: 200 }}
          className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent tracking-tight`}
        >
          {value}
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.4 }}
          className="text-slate-400 text-sm mt-3 font-medium leading-relaxed"
        >
          {subtitle}
        </motion.p>
        
        {/* Arrow indicator on hover */}
        <motion.div
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <ArrowUpRight className={`w-5 h-5 bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`} />
        </motion.div>
      </div>

      {/* Enhanced corner glow */}
      <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${gradientClass} opacity-10 blur-3xl group-hover:opacity-30 transition-all duration-700 group-hover:scale-150`} />
      
      {/* Side glow effect */}
      <div className={`absolute top-1/2 -left-20 w-40 h-40 bg-gradient-to-r ${gradientClass} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700 -translate-y-1/2`} />
    </motion.div>
  );
}
