import { motion } from 'framer-motion';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ZAxis,
  ReferenceLine,
  Legend
} from 'recharts';
import { Target } from 'lucide-react';

const roleColors = {
  'Android': '#3b82f6',
  'Web': '#06b6d4',
  'Testing': '#8b5cf6',
  'Data Science': '#a855f7',
  'iOS': '#ec4899',
  'Python': '#10b981',
  'Full Stack': '#f59e0b',
  'Java': '#ef4444',
  'Frontend': '#14b8a6',
  'Backend': '#6366f1'
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="glass-card p-4 rounded-xl border border-slate-700/50 max-w-xs">
        <p className="text-slate-300 font-semibold mb-2">{data.company}</p>
        <div className="space-y-1 text-sm">
          <p className="text-slate-400">
            Rol: <span className="text-white">{data.role}</span>
          </p>
          <p className="text-slate-400">
            Rating: <span className="text-amber-400 font-bold">{data.rating} ★</span>
          </p>
          <p className="text-slate-400">
            Salario: <span className="text-emerald-400 font-bold">₹{(data.salary / 100000).toFixed(1)}L</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export default function ScatterPlotChart({ data }) {
  // Agrupar datos por rol para el scatter plot con colores diferentes
  const groupedData = Object.keys(roleColors).map(role => ({
    role,
    data: data.filter(d => d.role === role),
    color: roleColors[role]
  })).filter(g => g.data.length > 0);

  // Calcular línea de tendencia (aproximación simple)
  const avgRating = data.reduce((sum, d) => sum + d.rating, 0) / data.length;
  const avgSalary = data.reduce((sum, d) => sum + d.salary, 0) / data.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card rounded-3xl p-6 md:p-8 hover-lift"
    >
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-100">Rating vs Salario</h2>
            <p className="text-slate-400 text-sm">Correlación entre calificación de empresa y compensación</p>
          </div>
        </div>

        {/* Leyenda compacta */}
        <div className="flex flex-wrap gap-2 max-w-md">
          {groupedData.slice(0, 5).map(({ role, color }) => (
            <div key={role} className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-xs text-slate-400">{role}</span>
            </div>
          ))}
          {groupedData.length > 5 && (
            <span className="text-xs text-slate-500">+{groupedData.length - 5} más</span>
          )}
        </div>
      </div>

      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
            <XAxis
              type="number"
              dataKey="rating"
              name="Rating"
              domain={[2, 5]}
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: 'rgba(148, 163, 184, 0.2)' }}
              label={{ value: 'Rating de Empresa', position: 'bottom', fill: '#94a3b8', fontSize: 12 }}
            />
            <YAxis
              type="number"
              dataKey="salary"
              name="Salary"
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: 'rgba(148, 163, 184, 0.2)' }}
              tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`}
              label={{ value: 'Salario (₹)', angle: -90, position: 'insideLeft', fill: '#94a3b8', fontSize: 12 }}
            />
            <ZAxis type="number" dataKey="salary" range={[50, 200]} />
            <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
            <ReferenceLine
              x={avgRating}
              stroke="#f59e0b"
              strokeDasharray="5 5"
              label={{ value: `Rating avg: ${avgRating.toFixed(1)}`, position: 'top', fill: '#f59e0b', fontSize: 11 }}
            />
            <ReferenceLine
              y={avgSalary}
              stroke="#10b981"
              strokeDasharray="5 5"
              label={{ value: `Salario avg`, position: 'right', fill: '#10b981', fontSize: 11 }}
            />

            {groupedData.map(({ role, data: roleData, color }) => (
              <Scatter
                key={role}
                name={role}
                data={roleData}
                fill={color}
                fillOpacity={0.7}
                stroke={color}
                strokeWidth={1}
                animationDuration={1000}
                animationBegin={800}
              />
            ))}
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex items-center gap-6 text-sm text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-500/50 border border-amber-500" />
          <span>Promedio Rating</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500/50 border border-emerald-500" />
          <span>Promedio Salario</span>
        </div>
        <div className="flex-1 text-right">
          <span className="text-slate-500">Tamaño del punto ∝ Salario</span>
        </div>
      </div>

      {/* Insight card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mt-6 glass rounded-xl p-4 border-l-4 border-emerald-500"
      >
        <p className="text-slate-300 text-sm">
          <span className="text-emerald-400 font-semibold">Insight:</span> Las empresas con rating {'>'} 4.0 
          muestran una correlación positiva con salarios más altos. Los outliers en salarios 
          {'>'} ₹20M se concentran principalmente en roles de Data Science y Backend.
        </p>
      </motion.div>
    </motion.div>
  );
}
