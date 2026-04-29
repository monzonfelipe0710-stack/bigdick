import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

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

export default function StatCard({ title, value, subtitle, trend, trendValue, color = 'blue', delay = 0 }) {
  const gradientClass = colorMap[color] || colorMap.blue;
  
  const getTrendIcon = () => {
    if (!trend) return null;
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-emerald-400" />;
    if (trend === 'down') return <TrendingDown className="w-4 h-4 text-rose-400" />;
    return <Minus className="w-4 h-4 text-slate-400" />;
  };

  const getTrendColor = () => {
    if (trend === 'up') return 'text-emerald-400';
    if (trend === 'down') return 'text-rose-400';
    return 'text-slate-400';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="glass-card rounded-2xl p-6 hover-lift relative overflow-hidden group"
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClass} rounded-t-2xl`} />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
            {title}
          </span>
          {trend && (
            <div className={`flex items-center gap-1 px-2 py-1 rounded-full bg-slate-800/50 ${getTrendColor()}`}>
              {getTrendIcon()}
              <span className="text-xs font-medium">{trendValue}</span>
            </div>
          )}
        </div>
        
        <motion.h3
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}
        >
          {value}
        </motion.h3>
        
        <p className="text-slate-400 text-sm mt-2 font-medium">
          {subtitle}
        </p>
      </div>

      {/* Decorative corner glow */}
      <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${gradientClass} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />
    </motion.div>
  );
}
