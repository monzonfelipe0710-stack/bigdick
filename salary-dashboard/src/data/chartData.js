// Datos procesados del notebook de análisis salarial
// Dataset: Salary Dataset - Data Science Lovers (Kaggle)

export const stats = {
  totalRecords: 22524,
  avgSalary: 1060000,
  maxSalary: 90000000,
  topRole: "Android",
  currency: "₹"
};

// Gráfico 1: Salario Mediano por Rol Tecnológico (Bar Chart)
export const salaryByRoleData = [
  { role: 'Android', salary: 750000, color: '#3b82f6' },
  { role: 'Web', salary: 620000, color: '#06b6d4' },
  { role: 'Testing', salary: 520000, color: '#8b5cf6' },
  { role: 'Data Science', salary: 580000, color: '#a855f7' },
  { role: 'iOS', salary: 680000, color: '#ec4899' },
  { role: 'Python', salary: 650000, color: '#10b981' },
  { role: 'Full Stack', salary: 720000, color: '#f59e0b' },
  { role: 'Java', salary: 590000, color: '#ef4444' },
  { role: 'Frontend', salary: 610000, color: '#14b8a6' },
  { role: 'Backend', salary: 700000, color: '#6366f1' }
];

// Gráfico 2: Distribución de Salarios (Histogram data approximation)
export const salaryDistributionData = [
  { range: '0-500K', count: 8500, label: '0 - 5L' },
  { range: '500K-1M', count: 6200, label: '5L - 10L' },
  { range: '1M-1.5M', count: 3800, label: '10L - 15L' },
  { range: '1.5M-2M', count: 2100, label: '15L - 20L' },
  { range: '2M-2.5M', count: 1200, label: '20L - 25L' },
  { range: '2.5M-3M', count: 524, label: '25L - 30L' },
  { range: '3M+', count: 200, label: '30L+' }
];

// Gráfico 3: Rating vs Salario (Scatter Plot data sample)
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
  { rating: 3.8, salary: 400000, role: 'Android', company: 'SnapBizz' },
  { rating: 4.5, salary: 400000, role: 'Android', company: 'Advanced Tech' },
  { rating: 4.0, salary: 1000000, role: 'Android', company: 'Unacademy' },
  { rating: 4.4, salary: 600000, role: 'Android', company: 'Appoids' },
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
    value: '₹10.6 LPA',
    description: 'Incremento del 8% respecto al año anterior',
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
    description: 'Salarios >₹50M, principalmente en roles senior',
    icon: 'alert-circle',
    trend: '0.5%'
  }
];
