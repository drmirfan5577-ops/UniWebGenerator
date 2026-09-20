import React from 'react';
import { cn } from '@/lib/utils';
import type { ViewType } from '@/types';

interface NavItem {
  id: ViewType;
  icon: string;
  label: string;
}

interface SidebarProps {
  activeView: ViewType;
  onNavigate: (v: ViewType) => void;
  isOpen: boolean;
  onClose: () => void;
  translate: (k: string) => string;
  dir: 'ltr' | 'rtl';
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', icon: '🏠', label: 'nav.home' },
  { id: 'templates', icon: '🎨', label: 'nav.templates' },
  { id: 'generator', icon: '⚡', label: 'nav.generator' },
  { id: 'social', icon: '🔗', label: 'nav.social' },
  { id: 'marketing', icon: '📣', label: 'nav.marketing' },
  { id: 'admin', icon: '🔐', label: 'nav.admin' },
];

const Sidebar: React.FC<SidebarProps> = ({ activeView, onNavigate, isOpen, onClose, translate, dir }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={cn(
          'fixed top-0 bottom-0 z-50 w-64 sidebar flex flex-col transition-transform duration-300 ease-out',
          dir === 'rtl' ? 'right-0' : 'left-0',
          isOpen
            ? 'translate-x-0'
            : dir === 'rtl'
            ? 'translate-x-full lg:translate-x-0'
            : '-translate-x-full lg:translate-x-0'
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-indigo-100">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg"
            style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}
          >
            UW
          </div>
          <div>
            <div className="text-[13px] font-800 text-indigo-700 font-bold leading-tight">Uni Web</div>
            <div className="text-[10px] text-gray-400 font-medium">Generator v2.0</div>
          </div>
          <button
            onClick={onClose}
            className="ml-auto p-1.5 rounded-lg hover:bg-indigo-50 text-gray-400 lg:hidden"
          >
            ✕
          </button>
        </div>

        {/* Status */}
        <div className="px-5 py-3">
          <div className="status-live text-[11px]">System Online — 24/7 Live</div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto no-scrollbar">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); onClose(); }}
              className={cn(
                'glass-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all',
                activeView === item.id ? 'active text-white' : 'text-gray-600 hover:text-indigo-600'
              )}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{translate(item.label)}</span>
              {activeView === item.id && (
                <span className="ml-auto w-1.5 h-1.5 bg-white rounded-full opacity-80" />
              )}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-indigo-50">
          <div className="text-[11px] text-gray-400 text-center">
            © 2026 Uni Website Generator
          </div>
          <div className="text-[10px] text-indigo-400 text-center mt-0.5">Enterprise Digital Platform</div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
