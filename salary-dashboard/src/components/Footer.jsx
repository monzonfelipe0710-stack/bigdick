import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const teamMembers = [
    { name: 'Monzón Felipe', role: 'Data Analyst' },
    { name: 'Rolón Agustín', role: 'Data Engineer' },
    { name: 'Gonzalo', role: 'Data Scientist' }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className="relative mt-20"
    >
      {/* Top gradient border */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-200">Trabajo Práctico N° 1</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Proyecto de análisis de datos salariales utilizando técnicas de Big Data 
              y visualización interactiva con React, Recharts y Tailwind CSS.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="glass p-2 rounded-lg hover:bg-slate-700/50 transition-colors">
                <Github className="w-5 h-5 text-slate-400" />
              </a>
              <a href="#" className="glass p-2 rounded-lg hover:bg-slate-700/50 transition-colors">
                <Linkedin className="w-5 h-5 text-slate-400" />
              </a>
              <a href="#" className="glass p-2 rounded-lg hover:bg-slate-700/50 transition-colors">
                <Mail className="w-5 h-5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Team Members */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-200">Integrantes</h3>
            <div className="space-y-3">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <span className="text-blue-400 text-xs font-bold">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm font-medium">{member.name}</p>
                    <p className="text-slate-500 text-xs">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dataset Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-200">Dataset & Análisis</h3>
            <div className="glass rounded-xl p-4 space-y-3">
              <div>
                <p className="text-slate-300 text-sm font-medium">
                  Salary Dataset - Data Science Lovers
                </p>
                <p className="text-slate-500 text-xs">
                  Fuente: Kaggle Platform
                </p>
                <a 
                  href="https://www.kaggle.com/datasets" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-400 text-xs hover:text-blue-300 transition-colors mt-1"
                >
                  Ver en Kaggle <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              
              <div className="pt-2 border-t border-slate-700/50">
                <p className="text-slate-400 text-xs mb-1">
                  Notebook de análisis (Python):
                </p>
                <a 
                  href="https://colab.research.google.com/drive/1yebsxqOPR4gdrU_bboAIoowhmiax_BJA?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-orange-400 text-xs hover:text-orange-300 transition-colors"
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                  Ver en Google Colab <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'Recharts', 'Tailwind', 'Framer Motion'].map((tech) => (
                <span 
                  key={tech}
                  className="px-2 py-1 rounded-md bg-slate-800/50 text-slate-400 text-xs border border-slate-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              Tecnicatura Superior en Desarrollo de Software Multiplataforma
            </p>
            <p className="text-slate-600 text-xs">
              Asignatura: Big Data II · 2026
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
