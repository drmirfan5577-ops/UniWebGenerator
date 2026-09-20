import React, { useState, useMemo } from 'react';
import { ALL_TEMPLATES, TEMPLATE_CATEGORIES } from '@/constants/templates';
import TemplateCard from '@/components/features/TemplateCard';
import type { Template } from '@/types';
import { t } from '@/constants/languages';

interface TemplatesPageProps {
  translate: (k: string) => string;
  dir: 'ltr' | 'rtl';
  currentLang: string;
  onPreviewTemplate: (tpl: Template) => void;
}

const TemplatesPage: React.FC<TemplatesPageProps> = ({ translate, dir, currentLang, onPreviewTemplate }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'free' | 'premium' | 'featured'>('all');

  const filtered = useMemo(() => {
    return ALL_TEMPLATES.filter(tpl => {
      const matchCat = activeCategory === 'all' || tpl.categoryId === activeCategory;
      const matchSearch = !search || tpl.name.toLowerCase().includes(search.toLowerCase());
      const matchFilter =
        filter === 'all' ||
        (filter === 'free' && !tpl.isPremium) ||
        (filter === 'premium' && tpl.isPremium) ||
        (filter === 'featured' && tpl.isFeatured);
      return matchCat && matchSearch && matchFilter;
    });
  }, [activeCategory, search, filter]);

  return (
    <div className={`h-full flex flex-col ${dir === 'rtl' ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <div className="px-4 pt-4 pb-3">
        <h2 className="text-xl font-black text-gray-800">
          🎨 <span className="shimmer-text">{translate('nav.templates')}</span>
        </h2>
        <p className="text-sm text-gray-500 mt-0.5">{ALL_TEMPLATES.length} enterprise-grade templates</p>
      </div>

      {/* Search + Filters */}
      <div className="px-4 pb-3 space-y-2">
        <input
          className="admin-input text-sm"
          placeholder="🔍 Search templates..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {(['all', 'free', 'premium', 'featured'] as const).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`category-pill px-3 py-1.5 rounded-full text-xs font-semibold capitalize ${filter === f ? 'active' : ''}`}
            >
              {f === 'premium' ? '⭐ PRO' : f === 'featured' ? '🔥 Featured' : f === 'free' ? '🆓 Free' : '🌐 All'}
            </button>
          ))}
        </div>
      </div>

      {/* Category tabs */}
      <div className="px-4 pb-3 overflow-x-auto no-scrollbar">
        <div className="flex gap-2 w-max">
          {TEMPLATE_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`category-pill flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${activeCategory === cat.id ? 'active' : ''}`}
            >
              <span>{cat.icon}</span>
              <span>{t(cat.labelKey, currentLang)}</span>
              <span className="opacity-60">({cat.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="px-4 pb-2">
        <span className="text-xs font-semibold text-indigo-600">{filtered.length} results</span>
      </div>

      {/* Template Grid */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-4">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <div className="text-4xl mb-3">🔍</div>
            <p className="text-sm">No templates match your search</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map(tpl => (
              <TemplateCard
                key={tpl.id}
                template={tpl}
                onPreview={onPreviewTemplate}
                onSelect={onPreviewTemplate}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplatesPage;
