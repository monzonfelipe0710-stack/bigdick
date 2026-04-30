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
            <h3 className="text-lg font-bold text-slate-200">Dataset</h3>
            <div className="glass rounded-xl p-4 space-y-2">
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
                className="inline-flex items-center gap-1 text-blue-400 text-xs hover:text-blue-300 transition-colors"
              >
                Ver en Kaggle <ExternalLink className="w-3 h-3" />
              </a>
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
