import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import StatCard from './components/StatCard';
import SalaryByRoleChart from './components/BarChart';
import HistogramChart from './components/HistogramChart';
import ScatterPlotChart from './components/ScatterChart';
import ParticleBackground from './components/ParticleBackground';

import {
  stats,
  salaryByRoleData,
  salaryDistributionData,
  ratingVsSalaryData,
  formatUSD,
  usdToArs,
  formatARS
} from './data/chartData';

function App() {
  // Format salary with USD and ARS conversion
  const formatSalary = (num) => {
    const usd = formatUSD(num);
    const ars = formatARS(usdToArs(num));
    return { usd, ars };
  };

  return (
    <div className="min-h-screen relative">
      {/* Animated Background */}
      <div className="animated-bg" />
      <ParticleBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        
        <main className="max-w-7xl mx-auto px-6 py-8">
          {/* Stats Grid */}
          <section className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <h2 className="text-2xl font-bold text-slate-200 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
                Métricas Principales
              </h2>
              <p className="text-slate-400 text-sm mt-1 ml-4">
                Resumen estadístico del dataset analizado
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total de Registros"
                value={stats.totalRecords.toLocaleString()}
                subtitle="Muestras analizadas del dataset"
                trend="up"
                trendValue="100%"
                color="blue"
                delay={0.1}
              />
              <StatCard
                title="Salario Promedio"
                value={formatSalary(stats.avgSalary).usd}
                subtitle={`≈ ${formatSalary(stats.avgSalary).ars} | Anual`}
                trend="up"
                trendValue="+8%"
                color="emerald"
                delay={0.2}
              />
              <StatCard
                title="Salario Máximo"
                value={formatSalary(stats.maxSalary).usd}
                subtitle={`≈ ${formatSalary(stats.maxSalary).ars} | Outlier`}
                trend="up"
                trendValue="Top 0.1%"
                color="purple"
                delay={0.3}
              />
              <StatCard
                title="Categoría Líder"
                value={stats.topRole}
                subtitle="Rol con mayor representación"
                trend="neutral"
                trendValue="28%"
                color="amber"
                delay={0.4}
              />
            </div>
          </section>

          {/* Charts Section */}
          <section className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-6"
            >
              <h2 className="text-2xl font-bold text-slate-200 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                Visualizaciones
              </h2>
              <p className="text-slate-400 text-sm mt-1 ml-4">
                Gráficos interactivos generados con Recharts
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Bar Chart - Takes 2 columns */}
              <div className="lg:col-span-2">
                <SalaryByRoleChart data={salaryByRoleData} />
              </div>

              {/* Histogram - Takes 1 column */}
              <div className="lg:col-span-1">
                <HistogramChart data={salaryDistributionData} />
              </div>

              {/* Scatter Plot - Full width */}
              <div className="lg:col-span-3">
                <ScatterPlotChart data={ratingVsSalaryData} />
              </div>
            </div>
          </section>

          {/* Data Source Info */}
          <motion.section
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
            className="glass-card rounded-2xl p-8 border-gradient glow-blue"
          >
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-2xl font-black gradient-text mb-6"
            >
              Sobre el Análisis
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-400 text-sm leading-relaxed">
              <div>
                <h4 className="text-slate-300 font-semibold mb-2">Metodología</h4>
                <p>
                  Se utilizó la librería <span className="text-blue-400">Plotly</span> para generar 
                  visualizaciones interactivas en Python, y posteriormente se migraron los datos 
                  procesados a <span className="text-cyan-400">React</span> con 
                  <span className="text-emerald-400"> Recharts</span> para una presentación web moderna.
                </p>
                <p className="mt-3">
                  El tratamiento de datos incluyó limpieza de valores nulos, filtrado de outliers 
                  extremos y normalización de categorías de roles para garantizar la calidad del análisis.
                </p>
              </div>
              <div>
                <h4 className="text-slate-300 font-semibold mb-2">Hallazgos Clave</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <span>Android Developer es el rol más frecuente (28% del dataset)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                    <span>La mayoría de salarios se concentran entre $0-$12K USD (≈ $0-$13M ARS)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                    <span>Existe correlación positiva entre rating de empresa y salario</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                    <span>Se detectaron 127 outliers con salarios {'>'} $600K USD (≈ $660M ARS)</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
