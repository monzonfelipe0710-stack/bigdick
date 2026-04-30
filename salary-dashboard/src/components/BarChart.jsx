import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { Briefcase } from 'lucide-react';
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
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
          <Briefcase className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-100">Salario por Rol Tecnológico</h2>
          <p className="text-slate-400 text-sm">Mediana salarial por categoría de empleo</p>
        </div>
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
              radius={[8, 8, 0, 0]}
              animationDuration={1500}
              animationBegin={500}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="url(#barGradient)" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
          <span>Salario Mediano (USD)</span>
        </div>
        <span className="text-slate-600">|</span>
        <span className="text-emerald-400">Conversión a ARS disponible en tooltips</span>
        <span className="text-slate-600">|</span>
        <span>22,524 registros</span>
      </div>
    </motion.div>
  );
}
