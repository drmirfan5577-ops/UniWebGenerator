import React from 'react';
import type { Template } from '@/types';
import { formatNumber } from '@/lib/utils';

interface TemplatePreviewPageProps {
  template: Template;
  onBack: () => void;
  onSelect: (t: Template) => void;
  translate: (k: string) => string;
  dir: 'ltr' | 'rtl';
}

const TemplatePreviewPage: React.FC<TemplatePreviewPageProps> = ({ template, onBack, onSelect, translate, dir }) => {
  return (
    <div className={`h-full flex flex-col ${dir === 'rtl' ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-indigo-50">
        <button onClick={onBack} className="glass-btn p-2 rounded-xl text-gray-600 text-sm min-w-[44px] min-h-[44px] flex items-center justify-center">
          ←
        </button>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-800 truncate">{template.name}</h3>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-amber-400 text-xs">{'★'.repeat(Math.round(template.rating))}</span>
            <span className="text-xs text-gray-400">{template.rating} · {formatNumber(template.downloads)} downloads</span>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {template.isPremium && (
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">PRO</span>
          )}
          <button onClick={() => onSelect(template)} className="btn-primary text-xs px-4 py-2">
            {translate('btn.launch')}
          </button>
        </div>
      </div>

      {/* Preview Image */}
      <div className="px-4 pt-4 pb-2">
        <div className="template-frame relative">
          <div className="bg-gray-100 rounded-t-xl flex items-center gap-1.5 px-3 py-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <div className="flex-1 bg-white rounded-md px-3 py-0.5 text-[10px] text-gray-400 ml-2">
              {template.name.toLowerCase().replace(/\s/g,'-')}.uwg.app
            </div>
          </div>
          <img
            src={template.thumbnail}
            alt={template.name}
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="absolute inset-0 top-8 bg-gradient-to-t from-indigo-900/20 to-transparent pointer-events-none rounded-b-xl" />
        </div>
      </div>

      {/* Details */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-4 pb-4 space-y-3">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {template.tags.map((tag, i) => (
            <span key={i} className="bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full px-3 py-1 text-xs font-semibold">
              #{tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="gradient-card rounded-xl p-4">
          <h4 className="font-bold text-gray-700 text-sm mb-2">📝 About this Template</h4>
          <p className="text-sm text-gray-600 leading-relaxed">{template.description}</p>
        </div>

        {/* Features */}
        <div className="gradient-card rounded-xl p-4">
          <h4 className="font-bold text-gray-700 text-sm mb-3">✅ Template Features</h4>
          <div className="grid grid-cols-2 gap-2">
            {[
              'Fully Responsive', 'PWA Ready', 'Multi-language', 'WhatsApp Integration',
              'Social Media Links', 'SEO Optimized', 'Admin Panel', 'Custom Colors',
              'Animated Headers', 'Product Showcase', 'Contact Forms', 'Live Marquee',
            ].map((feat, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                <span className="text-emerald-500 font-bold">✓</span>
                {feat}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => onSelect(template)}
          className="btn-primary w-full py-3.5 text-base"
        >
          🚀 Use This Template — {translate('btn.launch')}
        </button>
      </div>
    </div>
  );
};

export default TemplatePreviewPage;
