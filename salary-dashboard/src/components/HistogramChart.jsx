import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';
import { BarChart3 } from 'lucide-react';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-4 rounded-xl border border-slate-700/50">
        <p className="text-slate-300 font-semibold mb-1">Rango: {label}</p>
        <p className="text-purple-400 font-bold text-lg">
          {payload[0].value.toLocaleString()} registros
        </p>
        <p className="text-slate-400 text-xs mt-1">
          {((payload[0].value / 22524) * 100).toFixed(1)}% del total
        </p>
      </div>
    );
  }
  return null;
};

export default function HistogramChart({ data }) {
  const totalCount = data.reduce((sum, item) => sum + item.count, 0);
  const avgIndex = Math.floor(data.length / 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card rounded-3xl p-6 md:p-8 hover-lift"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
          <BarChart3 className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-100">Distribución Salarial</h2>
          <p className="text-slate-400 text-sm">Histograma de frecuencias por rango salarial</p>
        </div>
      </div>

      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
          >
            <defs>
              <linearGradient id="histGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity={1} />
                <stop offset="50%" stopColor="#a855f7" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0.7} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" vertical={false} />
            <XAxis
              dataKey="label"
              tick={{ fill: '#94a3b8', fontSize: 11 }}
              tickLine={false}
              axisLine={{ stroke: 'rgba(148, 163, 184, 0.2)' }}
            />
            <YAxis
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(139, 92, 246, 0.1)' }} />
            <ReferenceLine
              x={data[avgIndex]?.label}
              stroke="#f59e0b"
              strokeDasharray="5 5"
              label={{
                value: 'Media',
                position: 'top',
                fill: '#f59e0b',
                fontSize: 12
              }}
            />
            <Bar
              dataKey="count"
              fill="url(#histGradient)"
              radius={[6, 6, 0, 0]}
              animationDuration={1500}
              animationBegin={700}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div className="glass rounded-xl p-3">
          <p className="text-slate-400 text-xs">Moda (rango más frecuente)</p>
          <p className="text-purple-400 font-bold">0 - 5 Lakhs</p>
          <p className="text-slate-500 text-xs">37.7% de los casos</p>
        </div>
        <div className="glass rounded-xl p-3">
          <p className="text-slate-400 text-xs">Salarios {'>'}₹20L</p>
          <p className="text-emerald-400 font-bold">1,924 casos</p>
          <p className="text-slate-500 text-xs">8.5% outliers potenciales</p>
        </div>
      </div>
    </motion.div>
  );
}
