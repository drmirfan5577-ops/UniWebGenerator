import React, { useState } from 'react';
import { SOCIAL_PLATFORMS, GLOBAL_REGIONS } from '@/constants/socialMedia';
import type { SocialPlatform } from '@/types';

interface SocialLinksManagerProps {
  translate: (k: string) => string;
  dir: 'ltr' | 'rtl';
}

const SocialLinksManager: React.FC<SocialLinksManagerProps> = ({ translate, dir }) => {
  const [links, setLinks] = useState<Record<string, string>>(() => {
    try {
      return JSON.parse(localStorage.getItem('uwg_social_links') || '{}');
    } catch { return {}; }
  });
  const [activeRegion, setActiveRegion] = useState('PK');
  const [search, setSearch] = useState('');

  const filtered = SOCIAL_PLATFORMS.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleLink = (platform: SocialPlatform, value: string) => {
    const updated = { ...links, [platform.id]: value };
    setLinks(updated);
    localStorage.setItem('uwg_social_links', JSON.stringify(updated));
  };

  const openLink = (p: SocialPlatform) => {
    const val = links[p.id];
    if (!val) return;
    window.open(`${p.baseUrl}${val}`, '_blank');
  };

  return (
    <div className={`h-full flex flex-col ${dir === 'rtl' ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <div className="px-5 pt-4 pb-3 border-b border-indigo-50">
        <h2 className="text-xl font-bold text-gray-800">🔗 {translate('nav.social')}</h2>
        <p className="text-sm text-gray-500 mt-0.5">Connect all your digital platforms worldwide</p>
      </div>

      {/* Regions */}
      <div className="px-4 py-3 border-b border-indigo-50 overflow-x-auto no-scrollbar">
        <div className="flex gap-2 w-max">
          {GLOBAL_REGIONS.map(r => (
            <button
              key={r.code}
              onClick={() => setActiveRegion(r.code)}
              className={`category-pill flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${activeRegion === r.code ? 'active' : ''}`}
            >
              {r.flag} {r.name}
            </button>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="px-4 py-3">
        <input
          className="admin-input text-sm"
          placeholder="🔍 Search platforms..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* Platform grid */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filtered.map(platform => (
            <div
              key={platform.id}
              className="gradient-card rounded-xl p-3 flex items-center gap-3"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: platform.bgColor }}
              >
                {platform.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-bold text-gray-700 mb-1" style={{ color: platform.color }}>
                  {platform.name}
                </div>
                <input
                  className="w-full text-xs border border-gray-200 rounded-lg px-2.5 py-1.5 bg-white/80 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-100"
                  placeholder={platform.placeholder}
                  value={links[platform.id] || ''}
                  onChange={e => handleLink(platform, e.target.value)}
                />
              </div>
              {links[platform.id] && (
                <button
                  onClick={() => openLink(platform)}
                  className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow"
                  style={{ background: platform.color }}
                >
                  ↗
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinksManager;
