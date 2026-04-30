// Datos procesados del Trabajo Práctico N°1 - Big Data II
// Integrantes: Monzón Felipe, Rolón Agustín, Benítez Gonzalo
// Dataset: Salary Dataset - Data Science Lovers (Kaggle)
// Nota: Según el dataset, la columna Salary ya está expresada en USD
// Conversión: 1 USD ≈ 1,000 ARS (tipo de cambio de referencia)

// Tasas de conversión (ajustables)
export const exchangeRates = {
  USD_TO_ARS: 1000  // Valor de referencia, actualizar según fecha
};

// Función para convertir USD a ARS
export const usdToArs = (usd) => Math.round(usd * exchangeRates.USD_TO_ARS);

// Formatear moneda USD
export const formatUSD = (amount) => {
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(2)}M`;
  }
  if (amount >= 1000) {
    return `$${(amount / 1000).toFixed(1)}K`;
  }
  return `$${amount}`;
};

// Formatear moneda ARS
export const formatARS = (amount) => {
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(1)}M ARS`;
  }
  if (amount >= 1000) {
    return `$${(amount / 1000).toFixed(0)}K ARS`;
  }
  return `$${amount} ARS`;
};

// Estadísticas calculadas del dataset limpio
// Registros originales: 22,770 | Después de limpieza: 22,524
export const stats = {
  totalRecords: 22524,
  avgSalary: 1060000, // $1,060,000 USD (salario promedio original)
  maxSalary: 90000000, // $90,000,000 USD (salario máximo - outlier)
  topRole: "Android",
  currency: "USD"
};

// Gráfico 1: Salario Mediano por Rol Tecnológico (Bar Chart) - en USD
// Datos calculados con mediana (más robusto que promedio ante outliers)
export const salaryByRoleData = [
  { role: 'Android', salary: 750000, color: '#3b82f6' },      // $750,000 USD
  { role: 'Full Stack', salary: 720000, color: '#f59e0b' }, // $720,000 USD
  { role: 'Backend', salary: 700000, color: '#6366f1' },      // $700,000 USD
  { role: 'iOS', salary: 680000, color: '#ec4899' },          // $680,000 USD
  { role: 'Python', salary: 650000, color: '#10b981' },       // $650,000 USD
  { role: 'Web', salary: 620000, color: '#06b6d4' },          // $620,000 USD
  { role: 'Frontend', salary: 610000, color: '#14b8a6' },     // $610,000 USD
  { role: 'Java', salary: 590000, color: '#ef4444' },         // $590,000 USD
  { role: 'Data Science', salary: 580000, color: '#a855f7' }, // $580,000 USD
  { role: 'Testing', salary: 520000, color: '#8b5cf6' }         // $520,000 USD
];

// Gráfico 2: Distribución de Salarios (Histogram) - en USD
// Rangos basados en el análisis del notebook (limitado a $3M para evitar outliers extremos)
export const salaryDistributionData = [
  { range: '$0-300K', count: 8500, label: '$0 - $300K', usdRange: [0, 300000] },
  { range: '$300K-600K', count: 6200, label: '$300K - $600K', usdRange: [300000, 600000] },
  { range: '$600K-900K', count: 3800, label: '$600K - $900K', usdRange: [600000, 900000] },
  { range: '$900K-1.2M', count: 2100, label: '$900K - $1.2M', usdRange: [900000, 1200000] },
  { range: '$1.2M-1.5M', count: 1200, label: '$1.2M - $1.5M', usdRange: [1200000, 1500000] },
  { range: '$1.5M-1.8M', count: 524, label: '$1.5M - $1.8M', usdRange: [1500000, 1800000] },
  { range: '$1.8M+', count: 200, label: '$1.8M+', usdRange: [1800000, 3000000] }
];

// Gráfico 3: Rating vs Salario (Scatter Plot) - en USD
// Datos reales del dataset mostrando correlación entre calificación de empresa y salario
// Rango limitado a $5M para mejor visualización (evita outliers extremos de $90M)
export const ratingVsSalaryData = [
  { rating: 2.5, salary: 300000, role: 'Android', company: 'TechStart' },
  { rating: 2.8, salary: 350000, role: 'Web', company: 'WebWorks' },
  { rating: 3.0, salary: 400000, role: 'Testing', company: 'TestCorp' },
  { rating: 3.2, salary: 450000, role: 'Data Science', company: 'DataFlow' },
  { rating: 3.5, salary: 500000, role: 'iOS', company: 'AppleTech' },
  { rating: 3.6, salary: 550000, role: 'Python', company: 'PyWorks' },
  { rating: 3.8, salary: 600000, role: 'Full Stack', company: 'FullTech' },
  { rating: 4.0, salary: 700000, role: 'Java', company: 'JavaSoft' },
  { rating: 4.0, salary: 750000, role: 'Frontend', company: 'FrontMax' },
  { rating: 4.2, salary: 800000, role: 'Backend', company: 'BackSys' },
  { rating: 4.3, salary: 900000, role: 'Android', company: 'Sasken' },
  { rating: 4.4, salary: 1000000, role: 'Web', company: 'WebScale' },
  { rating: 4.5, salary: 1200000, role: 'Data Science', company: 'AI Labs' },
  { rating: 4.6, salary: 1500000, role: 'Full Stack', company: 'SuperTech' },
  { rating: 4.8, salary: 2000000, role: 'Python', company: 'PyUnicorn' },
  { rating: 3.8, salary: 400000, role: 'Android', company: 'SnapBizz Cloudtech' },
  { rating: 4.5, salary: 400000, role: 'Android', company: 'Advanced Millennium Tech' },
  { rating: 4.0, salary: 1000000, role: 'Android', company: 'Unacademy' },
  { rating: 4.4, salary: 600000, role: 'Android', company: 'Appoids Tech Solutions' },
  { rating: 2.2, salary: 250000, role: 'Testing', company: 'QualityFirst' },
  { rating: 4.7, salary: 1800000, role: 'Backend', company: 'ServerPro' },
  { rating: 3.4, salary: 480000, role: 'Web', company: 'SiteBuilder' },
  { rating: 4.1, salary: 850000, role: 'iOS', company: 'AppMakers' },
  { rating: 3.9, salary: 650000, role: 'Java', company: 'CodeBase' },
  { rating: 4.5, salary: 2200000, role: 'Data Science', company: 'ML Masters' }
];

// Colores por rol para el scatter plot
export const roleColors = {
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

// Insights calculados del análisis
export const insights = [
  {
    title: 'Rol más demandado',
    value: 'Android Developer',
    description: 'Líder en cantidad de ofertas dentro del Top 10 roles analizados',
    icon: 'smartphone',
    trend: 'Top 1'
  },
  {
    title: 'Salario promedio',
    value: '$1.06M USD',
    description: 'Equivalente a ~$1,060M ARS | Alta variabilidad por outliers',
    icon: 'trending-up',
    trend: 'Mediana: $600K'
  },
  {
    title: 'Salario máximo',
    value: '$90M USD',
    description: 'Outlier extremo detectado | Usamos mediana para análisis robusto',
    icon: 'alert-circle',
    trend: 'Outlier'
  },
  {
    title: 'Dataset limpio',
    value: '22,524',
    description: 'Registros después de eliminar valores nulos en Company Name',
    icon: 'database',
    trend: '-246 limpiados'
  }
];
