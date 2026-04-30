# FASTER Analytics - Salary Insights Dashboard

**Trabajo Práctico N° 1 - Big Data II**  
Tecnicatura Superior en Desarrollo de Software Multiplataforma

---

## 📊 Resumen del Proyecto

Este proyecto es una **landing page interactiva** que presenta visualizaciones de datos salariales del sector tecnológico. Se procesaron **22,524 registros** del dataset *"Salary Dataset - Data Science Lovers"* de Kaggle, generando visualizaciones profesionales con React, Recharts y Tailwind CSS.

**Integrantes:** Monzón Felipe, Rolón Agustín, Gonzalo

---

## 🎯 ¿Por qué esta arquitectura?

### Decisión técnica: React + Vite + Recharts

| Aspecto | Decisión | Justificación |
|---------|----------|---------------|
| **Framework** | React 18 | Componentes reutilizables, virtual DOM para renderizado eficiente de gráficos interactivos |
| **Build Tool** | Vite | Hot Module Replacement (HMR) instantáneo, builds optimizados para producción |
| **Gráficos** | Recharts | Librería nativa React basada en D3.js, componentes declarativos, animaciones suaves |
| **Estilos** | Tailwind CSS | Diseño consistente, responsive por defecto, purga de CSS no utilizado |
| **Animaciones** | Framer Motion | Transiciones fluidas entre estados, stagger effects para listas |
| **Datos** | JSON estático | Los datos ya fueron procesados en Python (Plotly), se exportaron como JSON para el frontend |

### ¿Por qué no usar Plotly directamente en React?
- Plotly.js pesa ~3MB (bundle muy pesado)
- Recharts es más ligero y está optimizado para React
- Mejor integración con el ciclo de vida de componentes React
- Animaciones más fluidas y personalizables

---

## 📈 Las 3 Visualizaciones y sus Justificaciones

### 1. Gráfico de Barras - "Salario Mediano por Rol Tecnológico"

#### ¿Por qué un gráfico de barras?
Según la **clasificación de visualización de datos de Cleveland y McGill**, los gráficos de barras son los más efectivos para **comparaciones entre categorías discretas**. La percepción humana compara longitudes de barras con mayor precisión que ángulos (pie charts) o posiciones en escala de color (heatmaps).

#### Ejes considerados
| Eje | Variable | Tipo | Justificación |
|-----|----------|------|---------------|
| **X** | Job Roles (Rol del empleo) | Categórica nominal | Permite comparar roles discretos: Android, Web, Testing, Data Science, etc. |
| **Y** | Salary (Salario) | Numérica continua | Mediana de salarios en INR (Rupias Indias). Usamos **mediana** en lugar de promedio porque hay outliers extremos (hasta ₹90M) que sesgan la media. |

#### ¿Qué representa explícitamente?
- **Cada barra** = Un rol tecnológico diferente
- **Altura de la barra** = Salario mediano anual para ese rol
- **Color degradado** = Intensidad visual que refuerza la magnitud (mayor salario = color más intenso)
- **Orden descendente** = Los roles mejor pagados aparecen primero para identificar rápidamente líderes salariales

**Insight clave:** Android Developer muestra la mediana salarial más alta (~₹7.5L), seguido de Full Stack y Backend. Testing tiene la mediana más baja (~₹5.2L).

---

### 2. Histograma - "Distribución de Salarios"

#### ¿Por qué un histograma?
Los histogramas son la representación estándar para mostrar la **distribución de una variable numérica continua**. A diferencia de un gráfico de barras tradicional (que compara categorías), el histograma divide el rango continuo en **bins** (intervalos) y muestra la frecuencia de datos en cada bin. Esto revela:
- La forma de la distribución (normal, sesgada, bimodal)
- La concentración de datos (dónde están la mayoría de los valores)
- La presencia de outliers y colas largas

#### Ejes considerados
| Eje | Variable | Tipo | Justificación |
|-----|----------|------|---------------|
| **X** | Rango Salarial (Salary bins) | Numérica continua agrupada | Dividida en intervalos de ₹5L (0-5L, 5L-10L, 10L-15L, etc.) para mostrar dónde se concentran los salarios |
| **Y** | Frecuencia (Count) | Numérica discreta | Cantidad de registros que caen en cada rango salarial |

#### ¿Qué representa explícitamente?
- **Cada columna** = Un rango salarial de ₹5 Lakhs
- **Altura de la columna** = Cantidad de personas que ganan dentro de ese rango
- **Línea de referencia "Media"** = Marca el punto donde se centra la distribución
- **Colores degradados** = Transición de violeta a índigo para indicar progresión salarial

**Insight clave:** La distribución es **altamente sesgada a la derecha**. El 37.7% de los trabajadores ganan entre 0-5 Lakhs (moda), mientras que solo el 8.5% supera los ₹20L. Esto confirma la desigualdad salarial en el sector tech indio.

---

### 3. Scatter Plot (Dispersión) - "Rating vs Salario"

#### ¿Por qué un scatter plot?
El **diagrama de dispersión** es el estándar de facto para analizar **correlaciones entre dos variables numéricas**. Según el framework de visualización de Tamara Munzner, los scatter plots son óptimos para:
- Detectar patrones de asociación (positiva, negativa, nula)
- Identificar clusters y agrupaciones naturales
- Detectar outliers multivariados
- Visualizar densidad de puntos en regiones específicas

#### Ejes considerados
| Eje | Variable | Tipo | Rango | Justificación |
|-----|----------|------|-------|---------------|
| **X** | Rating de Empresa | Numérica continua | 2.0 - 5.0 | Calificación promedio de la empresa en escala de 5 estrellas. Variable independiente (predictora potencial). |
| **Y** | Salary (Salario) | Numérica continua | ₹0 - ₹50M | Remuneración anual en INR. Variable dependiente (outcome). |
| **Z** (tamaño) | Salary | Numérica | 50-200px | Tamaño del punto proporcional al salario (mayor salario = punto más grande) |
| **Color** | Job Roles | Categórica | 10 colores | Cada rol tiene un color distintivo para identificar patrones por categoría |

#### ¿Qué representa explícitamente?
- **Cada punto** = Una empresa específica con su calificación y el salario que ofrece
- **Posición X** = Qué tan bien calificada está la empresa (0-5 estrellas)
- **Posición Y** = Cuánto paga la empresa
- **Color del punto** = Qué tipo de rol ofrece (Android=azul, Web=cyan, Data Science=púrpura, etc.)
- **Tamaño del punto** = Magnitud del salario (más grande = salario más alto)
- **Líneas de referencia** = Promedio de rating (línea vertical naranja) y promedio de salario (línea horizontal verde)

**Insights clave:**
1. **Correlación positiva débil:** Empresas con rating >4.0 tienden a pagar más, pero hay mucha variabilidad
2. **Clusters visibles:** Los puntos de Data Science (púrpura) y Python (verde) se concentran en la zona superior derecha (buenas empresas + buenos salarios)
3. **Outliers identificados:** Hay puntos aislados en la parte superior (salarios >₹20M) con ratings variados, indicando que empresas con rating medio pueden pagar salarios de élite para roles específicos

---

## 🛠️ Stack Tecnológico Completo

```
Frontend:
├── React 18.2.0          # UI library
├── Vite 5.0.8            # Build tool & dev server
├── Tailwind CSS 3.3.6    # Utility-first CSS
├── Recharts 2.10.3       # React charting library
├── Framer Motion 10.16.16 # Animations
└── Lucide React 0.294.0  # Icon library

Data Processing (previo):
├── Python 3.x
├── Pandas                # Data manipulation
├── Plotly                # Exploratory visualization
└── Jupyter Notebook      # Analysis environment
```

---

## 🚀 Cómo ejecutar el proyecto

```bash
# 1. Clonar el repositorio
git clone https://github.com/monzonfelipe0710-stack/bigdick.git
cd bigdick/salary-dashboard

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en navegador
http://localhost:5173
```

---

## 📁 Estructura del Proyecto

```
salary-dashboard/
├── src/
│   ├── components/           # Componentes React
│   │   ├── Header.jsx       # Cabecera con logo y estadísticas
│   │   ├── Footer.jsx       # Pie de página con info del equipo
│   │   ├── StatCard.jsx     # Tarjetas de métricas animadas
│   │   ├── BarChart.jsx     # Gráfico de barras (salario por rol)
│   │   ├── HistogramChart.jsx  # Histograma (distribución)
│   │   └── ScatterChart.jsx    # Dispersión (rating vs salario)
│   ├── data/
│   │   └── chartData.js     # Datos procesados del notebook
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Entry point
│   └── index.css            # Estilos globales + Tailwind
├── index.html               # HTML template
├── package.json             # Dependencias
├── vite.config.js           # Configuración Vite
├── tailwind.config.js       # Configuración Tailwind
└── README.md                # Este archivo
```

---

## 📚 Dataset Original

- **Nombre:** Salary Dataset - Data Science Lovers
- **Fuente:** Kaggle (https://www.kaggle.com/datasets)
- **Registros:** 22,770 filas originales → 22,524 después de limpieza
- **Variables principales:**
  - `Rating`: Calificación de empresa (1-5)
  - `Company Name`: Nombre de la empresa
  - `Job Title`: Título del puesto
  - `Salary`: Remuneración en INR
  - `Location`: Ciudad/Ubicación
  - `Employment Status`: Tipo de contrato
  - `Job Roles`: Categoría del rol

---

## 🎓 Aprendizajes y Decisiones de Diseño

### 1. Preprocesamiento de datos
- Se eliminó 1 registro con `Company Name` nulo
- Se filtraron outliers extremos (salarios >₹50M) para mejorar la visualización
- Se normalizó la categorización de roles

### 2. Por qué mediana en lugar de promedio
El salario máximo (₹90M) es un outlier extremo que sesga el promedio. La **mediana** representa mejor el "salario típico" que gana un profesional en cada rol.

### 3. Diseño visual (UI/UX)
- **Dark mode:** Reduce fatiga visual para dashboards de análisis
- **Glassmorphism:** Efectos de profundidad con `backdrop-filter`
- **Gradientes sutiles:** Guían la atención sin saturar
- **Micro-animaciones:** Transiciones de 0.3-0.6s para feedback visual

---

**Asignatura:** Big Data II  
**Año:** 2026
