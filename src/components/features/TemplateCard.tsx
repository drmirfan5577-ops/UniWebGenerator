import React from 'react';
import type { Template } from '@/types';
import { formatNumber } from '@/lib/utils';

interface TemplateCardProps {
  template: Template;
  onPreview: (t: Template) => void;
  onSelect: (t: Template) => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, onPreview, onSelect }) => {
  return (
    <div
      className="gradient-card rounded-2xl overflow-hidden cursor-pointer group"
      onClick={() => onPreview(template)}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden h-44">
        <img
          src={template.thumbnail}
          alt={template.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-1.5">
          {template.isPremium && (
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
              PRO
            </span>
          )}
          {template.isFeatured && (
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
              ⭐ TOP
            </span>
          )}
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
          <button
            onClick={e => { e.stopPropagation(); onSelect(template); }}
            className="btn-primary text-xs py-1.5 px-4 w-full"
          >
            Use This Template
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="font-semibold text-[13px] text-gray-800 truncate">{template.name}</h3>
        <div className="flex items-center justify-between mt-1.5">
          <div className="flex items-center gap-1">
            <span className="text-amber-400 text-[11px]">
              {'★'.repeat(Math.round(template.rating))}{'☆'.repeat(5 - Math.round(template.rating))}
            </span>
            <span className="text-[11px] text-gray-400">{template.rating}</span>
          </div>
          <span className="text-[11px] text-gray-400">⬇ {formatNumber(template.downloads)}</span>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
