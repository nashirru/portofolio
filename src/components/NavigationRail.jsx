import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Layers,
  BarChart3,
  FolderKanban,
  History,
  MicVocal,
  Mail,
} from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navItems = [
  { id: 'hero', label: 'Home', icon: LayoutDashboard },
  { id: 'capabilities', label: 'Capabilities', icon: Layers },
  { id: 'metrics', label: 'Metrics', icon: BarChart3 },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'timeline', label: 'Timeline', icon: History },
  { id: 'skills', label: 'Skills', icon: MicVocal },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function NavigationRail() {
  const activeId = useScrollSpy(
    navItems.map((i) => i.id),
    100,
  );

  return (
    <nav
      aria-label="Section navigation"
      className="fixed left-0 top-[72px] bottom-0 w-[80px] bg-white/[0.98] border-r border-black/10 z-40 hidden lg:flex flex-col items-center py-8 gap-1"
    >
      {/* Top yellow accent mark */}
      <div className="w-6 h-[2px] bg-brutal-yellow mb-6" />

      {navItems.map((item) => {
        const isActive = activeId === item.id;
        const Icon = item.icon;
        return (
          <a
            key={item.id}
            href={`#${item.id === 'hero' ? '' : item.id}`}
            className="relative flex flex-col items-center gap-1 w-full py-3 px-2 group"
          >
            {/* Active indicator */}
            {isActive && (
              <motion.span
                layoutId="rail-indicator"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-6 bg-brutal-yellow"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}

            <div
              className={`flex items-center justify-center w-8 h-8 rounded transition-all duration-200 ${
                isActive
                  ? 'text-brutal-yellow drop-shadow-[0_0_8px_rgba(255,230,0,0.35)]'
                  : 'text-black/25 group-hover:text-black/60'
              }`}
            >
              <Icon className="w-4 h-4" strokeWidth={1.5} />
            </div>
            <span
              className={`text-[9px] font-mono uppercase tracking-wider transition-colors duration-200 ${
                isActive
                  ? 'text-brutal-black font-semibold'
                  : 'text-black/25 group-hover:text-black/50'
              }`}
            >
              {item.label}
            </span>
          </a>
        );
      })}

      {/* Bottom yellow accent */}
      <div className="w-4 h-[2px] bg-brutal-yellow/50 mt-auto" />
    </nav>
  );
}
