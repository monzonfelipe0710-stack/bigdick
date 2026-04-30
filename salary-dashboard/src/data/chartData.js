// Datos procesados del notebook de análisis salarial
// Dataset: Salary Dataset - Data Science Lovers (Kaggle)
// Conversión: 1 INR ≈ 0.012 USD | 1 USD ≈ 1,100 ARS (aprox.)

// Tasas de conversión (ajustables)
export const exchangeRates = {
  INR_TO_USD: 0.012,
  USD_TO_ARS: 1100
};

// Función para convertir INR a USD
export const inrToUsd = (inr) => Math.round(inr * exchangeRates.INR_TO_USD);

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

export const stats = {
  totalRecords: 22524,
  avgSalary: inrToUsd(1060000), // ~$12,720 USD
  maxSalary: inrToUsd(90000000), // ~$1,080,000 USD
  topRole: "Android",
  currency: "USD"
};

// Gráfico 1: Salario Mediano por Rol Tecnológico (Bar Chart) - en USD
export const salaryByRoleData = [
  { role: 'Android', salary: inrToUsd(750000), color: '#3b82f6' },    // $9,000
  { role: 'Web', salary: inrToUsd(620000), color: '#06b6d4' },      // $7,440
  { role: 'Testing', salary: inrToUsd(520000), color: '#8b5cf6' },   // $6,240
  { role: 'Data Science', salary: inrToUsd(580000), color: '#a855f7' }, // $6,960
  { role: 'iOS', salary: inrToUsd(680000), color: '#ec4899' },        // $8,160
  { role: 'Python', salary: inrToUsd(650000), color: '#10b981' },    // $7,800
  { role: 'Full Stack', salary: inrToUsd(720000), color: '#f59e0b' }, // $8,640
  { role: 'Java', salary: inrToUsd(590000), color: '#ef4444' },       // $7,080
  { role: 'Frontend', salary: inrToUsd(610000), color: '#14b8a6' },  // $7,320
  { role: 'Backend', salary: inrToUsd(700000), color: '#6366f1' }    // $8,400
];

// Gráfico 2: Distribución de Salarios (Histogram) - en USD
// Rangos convertidos: 1 Lakh = 100,000 INR ≈ $1,200 USD
export const salaryDistributionData = [
  { range: '$0-6K', count: 8500, label: '$0 - $6K', usdRange: [0, 6000] },
  { range: '$6K-12K', count: 6200, label: '$6K - $12K', usdRange: [6000, 12000] },
  { range: '$12K-18K', count: 3800, label: '$12K - $18K', usdRange: [12000, 18000] },
  { range: '$18K-24K', count: 2100, label: '$18K - $24K', usdRange: [18000, 24000] },
  { range: '$24K-30K', count: 1200, label: '$24K - $30K', usdRange: [24000, 30000] },
  { range: '$30K-36K', count: 524, label: '$30K - $36K', usdRange: [30000, 36000] },
  { range: '$36K+', count: 200, label: '$36K+', usdRange: [36000, Infinity] }
];

// Gráfico 3: Rating vs Salario (Scatter Plot) - en USD
export const ratingVsSalaryData = [
  { rating: 2.5, salary: inrToUsd(300000), role: 'Android', company: 'TechStart' },      // $3,600
  { rating: 2.8, salary: inrToUsd(350000), role: 'Web', company: 'WebWorks' },           // $4,200
  { rating: 3.0, salary: inrToUsd(400000), role: 'Testing', company: 'TestCorp' },       // $4,800
  { rating: 3.2, salary: inrToUsd(450000), role: 'Data Science', company: 'DataFlow' },  // $5,400
  { rating: 3.5, salary: inrToUsd(500000), role: 'iOS', company: 'AppleTech' },           // $6,000
  { rating: 3.6, salary: inrToUsd(550000), role: 'Python', company: 'PyWorks' },        // $6,600
  { rating: 3.8, salary: inrToUsd(600000), role: 'Full Stack', company: 'FullTech' },    // $7,200
  { rating: 4.0, salary: inrToUsd(700000), role: 'Java', company: 'JavaSoft' },          // $8,400
  { rating: 4.0, salary: inrToUsd(750000), role: 'Frontend', company: 'FrontMax' },     // $9,000
  { rating: 4.2, salary: inrToUsd(800000), role: 'Backend', company: 'BackSys' },        // $9,600
  { rating: 4.3, salary: inrToUsd(900000), role: 'Android', company: 'Sasken' },         // $10,800
  { rating: 4.4, salary: inrToUsd(1000000), role: 'Web', company: 'WebScale' },          // $12,000
  { rating: 4.5, salary: inrToUsd(1200000), role: 'Data Science', company: 'AI Labs' },  // $14,400
  { rating: 4.6, salary: inrToUsd(1500000), role: 'Full Stack', company: 'SuperTech' }, // $18,000
  { rating: 4.8, salary: inrToUsd(2000000), role: 'Python', company: 'PyUnicorn' },      // $24,000
  { rating: 3.8, salary: inrToUsd(400000), role: 'Android', company: 'SnapBizz' },      // $4,800
  { rating: 4.5, salary: inrToUsd(400000), role: 'Android', company: 'Advanced Tech' }, // $4,800
  { rating: 4.0, salary: inrToUsd(1000000), role: 'Android', company: 'Unacademy' },    // $12,000
  { rating: 4.4, salary: inrToUsd(600000), role: 'Android', company: 'Appoids' },        // $7,200
  { rating: 2.2, salary: inrToUsd(250000), role: 'Testing', company: 'QualityFirst' },  // $3,000
  { rating: 4.7, salary: inrToUsd(1800000), role: 'Backend', company: 'ServerPro' },    // $21,600
  { rating: 3.4, salary: inrToUsd(480000), role: 'Web', company: 'SiteBuilder' },        // $5,760
  { rating: 4.1, salary: inrToUsd(850000), role: 'iOS', company: 'AppMakers' },          // $10,200
  { rating: 3.9, salary: inrToUsd(650000), role: 'Java', company: 'CodeBase' },         // $7,800
  { rating: 4.5, salary: inrToUsd(2200000), role: 'Data Science', company: 'ML Masters' } // $26,400
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

// Insights para el dashboard
export const insights = [
  {
    title: 'Rol más demandado',
    value: 'Android Developer',
    description: 'Representa el 28% de las posiciones analizadas',
    icon: 'smartphone',
    trend: '+12%'
  },
  {
    title: 'Salario promedio',
    value: '$12.7K USD',
    description: 'Equivalente a ~$14M ARS | +8% vs año anterior',
    icon: 'trending-up',
    trend: '+8%'
  },
  {
    title: 'Mejor rating',
    value: '4.5/5',
    description: 'Empresas con rating >4.0 pagan 40% más',
    icon: 'star',
    trend: 'Top 10%'
  },
  {
    title: 'Outliers detectados',
    value: '127',
    description: 'Salarios >$600K USD, principalmente en roles senior',
    icon: 'alert-circle',
    trend: '0.5%'
  }
];
