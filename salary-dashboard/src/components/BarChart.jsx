import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList
} from 'recharts';
import { Briefcase, TrendingUp } from 'lucide-react';
import { formatUSD, usdToArs, formatARS } from '../data/chartData';

const formatSalary = (value) => {
  return formatUSD(value);
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const usdValue = payload[0].value;
    const arsValue = usdToArs(usdValue);
    return (
      <div className="glass-card p-4 rounded-xl border border-slate-700/50">
        <p className="text-slate-300 font-semibold mb-1">{label}</p>
        <p className="text-blue-400 font-bold text-lg">
          {formatUSD(usdValue)} USD
        </p>
        <p className="text-emerald-400 text-sm">
          ≈ {formatARS(arsValue)}
        </p>
      </div>
    );
  }
  return null;
};

export default function SalaryByRoleChart({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card rounded-3xl p-6 md:p-8 hover-lift"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <motion.div 
            className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30 glow-blue"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Briefcase className="w-7 h-7 text-white" />
          </motion.div>
          <div>
            <motion.h2 
              className="text-2xl font-black text-slate-100 tracking-tight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Salario por Rol
              </span>
            </motion.h2>
            <p className="text-slate-400 text-sm font-medium">Mediana salarial por categoría de empleo</p>
          </div>
        </div>
        <motion.div 
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <TrendingUp className="w-4 h-4 text-blue-400" />
          <span className="text-blue-400 text-xs font-bold">+12% vs 2025</span>
        </motion.div>
      </div>

      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={1} />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity={0.8} />
              </linearGradient>
              <linearGradient id="barGradientHover" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity={1} />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity={0.9} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" vertical={false} />
            <XAxis
              dataKey="role"
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: 'rgba(148, 163, 184, 0.2)' }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={formatSalary}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }} />
            <Bar
              dataKey="salary"
              radius={[10, 10, 0, 0]}
              animationDuration={2000}
              animationBegin={300}
              animationEasing="ease-out"
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill="url(#barGradient)" 
                  className="transition-all duration-300"
                  style={{
                    filter: 'drop-shadow(0 4px 6px rgba(59, 130, 246, 0.3))',
                  }}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30" />
            <span className="font-medium">Salario Mediano (USD)</span>
          </motion.div>
          <span className="text-slate-600">|</span>
          <span className="text-emerald-400 font-medium">ARS en tooltips</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-500">22,524 registros</span>
        </div>
        <motion.div 
          className="text-xs text-slate-500 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Hover sobre las barras para detalles
        </motion.div>
      </div>
    </motion.div>
  );
}
