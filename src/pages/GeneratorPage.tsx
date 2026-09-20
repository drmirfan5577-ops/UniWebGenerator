import React, { useState } from 'react';
import { TEMPLATE_CATEGORIES } from '@/constants/templates';
import { GLOBAL_REGIONS } from '@/constants/socialMedia';
import { LANGUAGES } from '@/constants/languages';
import { saveSiteConfig } from '@/lib/auth';
import WhatsAppWidget from '@/components/features/WhatsAppWidget';

interface GeneratorPageProps {
  translate: (k: string) => string;
  dir: 'ltr' | 'rtl';
}

const BUSINESS_TYPES = [
  { id: 'grocery', label: 'Grocery / Supermarket', icon: '🛒' },
  { id: 'pharmacy', label: 'Pharmacy / Medical', icon: '💊' },
  { id: 'restaurant', label: 'Restaurant / Food', icon: '🍔' },
  { id: 'fashion', label: 'Fashion / Clothing', icon: '👗' },
  { id: 'electronics', label: 'Electronics / Tech', icon: '📱' },
  { id: 'bakery', label: 'Bakery / Sweets', icon: '🧁' },
  { id: 'cosmetics', label: 'Cosmetics / Beauty', icon: '💄' },
  { id: 'delivery', label: 'Delivery Service', icon: '🚚' },
  { id: 'realestate', label: 'Real Estate / OLX', icon: '🏠' },
  { id: 'services', label: 'Local Services', icon: '🔧' },
  { id: 'wholesale', label: 'Wholesale / B2B', icon: '🏭' },
  { id: 'branding', label: 'Digital Branding', icon: '📣' },
];

const COLOR_PRESETS = [
  { name: 'Indigo', primary: '#6366f1', sec: '#8b5cf6' },
  { name: 'Emerald', primary: '#10b981', sec: '#059669' },
  { name: 'Rose', primary: '#f43f5e', sec: '#e11d48' },
  { name: 'Amber', primary: '#f59e0b', sec: '#d97706' },
  { name: 'Cyan', primary: '#06b6d4', sec: '#0891b2' },
  { name: 'Purple', primary: '#a855f7', sec: '#9333ea' },
];

const GeneratorPage: React.FC<GeneratorPageProps> = ({ translate, dir }) => {
  const [step, setStep] = useState(1);
  const [config, setConfig] = useState({
    siteName: '',
    tagline: '',
    businessType: '',
    region: 'PK',
    language: 'en',
    phone: '',
    whatsapp: '',
    email: '',
    address: '',
    primaryColor: '#6366f1',
    currency: 'PKR',
    marqueeText: 'Welcome to our store! • Free delivery available • Order now on WhatsApp',
    templateId: '',
  });
  const [generated, setGenerated] = useState(false);

  const update = (key: string, val: string) => setConfig(prev => ({ ...prev, [key]: val }));

  const handleGenerate = () => {
    saveSiteConfig(config);
    setGenerated(true);
  };

  if (generated) {
    return (
      <div className={`h-full flex flex-col items-center justify-center px-6 text-center ${dir === 'rtl' ? 'rtl' : 'ltr'}`}>
        <div className="text-6xl mb-4 animate-bounce-gentle">🎉</div>
        <h2 className="text-2xl font-black text-gray-800 mb-2">Website Generated!</h2>
        <p className="text-gray-500 mb-6 max-w-sm">
          <strong className="text-indigo-600">{config.siteName || 'Your Website'}</strong> has been configured successfully. Customize further from the Admin Panel.
        </p>
        <div className="gradient-card rounded-2xl p-4 w-full max-w-sm text-left mb-6 space-y-2">
          {config.siteName && <div className="flex justify-between text-sm"><span className="text-gray-500">Site Name</span><span className="font-semibold text-gray-800">{config.siteName}</span></div>}
          {config.businessType && <div className="flex justify-between text-sm"><span className="text-gray-500">Business</span><span className="font-semibold text-gray-800">{config.businessType}</span></div>}
          {config.region && <div className="flex justify-between text-sm"><span className="text-gray-500">Region</span><span className="font-semibold text-gray-800">{config.region}</span></div>}
          {config.language && <div className="flex justify-between text-sm"><span className="text-gray-500">Language</span><span className="font-semibold text-gray-800">{LANGUAGES.find(l=>l.code===config.language)?.nativeName}</span></div>}
        </div>
        <div className="flex gap-3 flex-wrap justify-center">
          <button onClick={() => { setGenerated(false); setStep(1); }} className="glass-btn px-5 py-2.5 rounded-xl text-sm font-semibold text-indigo-600">
            ← Create Another
          </button>
          <button className="btn-primary text-sm px-5 py-2.5">
            🚀 {translate('btn.launch')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`h-full flex flex-col ${dir === 'rtl' ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <div className="px-5 pt-4 pb-3 border-b border-indigo-50">
        <h2 className="text-xl font-black shimmer-text">⚡ Website Generator</h2>
        <p className="text-sm text-gray-500 mt-0.5">Build your enterprise site in 4 easy steps</p>
        {/* Step indicator */}
        <div className="flex items-center gap-1.5 mt-3">
          {[1,2,3,4].map(s => (
            <React.Fragment key={s}>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${step >= s ? 'text-white shadow-sm' : 'bg-gray-100 text-gray-400'}`}
                style={step >= s ? { background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' } : {}}
              >
                {s}
              </div>
              {s < 4 && <div className={`flex-1 h-1 rounded-full transition-all ${step > s ? 'bg-indigo-500' : 'bg-gray-200'}`} />}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-4 space-y-5">
        {/* Step 1: Basic Info */}
        {step >= 1 && (
          <div className="gradient-card rounded-2xl p-4 space-y-3 animate-fade-in">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center">1</span>
              Business Identity
            </h3>
            <input className="admin-input text-sm" placeholder="Site / Brand Name *" value={config.siteName} onChange={e=>update('siteName',e.target.value)} />
            <input className="admin-input text-sm" placeholder="Tagline / Slogan" value={config.tagline} onChange={e=>update('tagline',e.target.value)} />
            <input className="admin-input text-sm" placeholder="📧 Email Address" value={config.email} onChange={e=>update('email',e.target.value)} />
            <textarea className="admin-input text-sm resize-none" rows={2} placeholder="📍 Full Address" value={config.address} onChange={e=>update('address',e.target.value)} />
          </div>
        )}

        {/* Step 2: Business Type */}
        {step >= 2 && (
          <div className="gradient-card rounded-2xl p-4 animate-fade-in">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 text-xs font-bold flex items-center justify-center">2</span>
              Business Type
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {BUSINESS_TYPES.map(bt => (
                <button
                  key={bt.id}
                  onClick={() => update('businessType', bt.id)}
                  className={`flex items-center gap-2 p-2.5 rounded-xl border-2 text-xs font-semibold transition-all ${config.businessType === bt.id ? 'border-indigo-400 bg-indigo-50 text-indigo-700' : 'border-transparent bg-white/60 text-gray-600 hover:border-indigo-200'}`}
                >
                  <span className="text-lg">{bt.icon}</span>
                  <span className="leading-tight">{bt.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Region & Language */}
        {step >= 3 && (
          <div className="gradient-card rounded-2xl p-4 space-y-3 animate-fade-in">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-1">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center">3</span>
              Region & Language
            </h3>
            <div>
              <label className="text-xs text-gray-500 font-semibold mb-1 block">🌍 Target Region</label>
              <select className="admin-input text-sm" value={config.region} onChange={e=>update('region',e.target.value)}>
                {GLOBAL_REGIONS.map(r => (
                  <option key={r.code} value={r.code}>{r.flag} {r.name} ({r.currency})</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-500 font-semibold mb-1 block">🗣️ Primary Language</label>
              <select className="admin-input text-sm" value={config.language} onChange={e=>update('language',e.target.value)}>
                {LANGUAGES.map(l => (
                  <option key={l.code} value={l.code}>{l.flag} {l.nativeName} ({l.name})</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-500 font-semibold mb-1 block">🎨 Brand Color</label>
              <div className="flex gap-2 flex-wrap">
                {COLOR_PRESETS.map(c => (
                  <button
                    key={c.name}
                    onClick={() => update('primaryColor', c.primary)}
                    className={`w-9 h-9 rounded-full border-2 transition-transform hover:scale-110 ${config.primaryColor === c.primary ? 'border-gray-800 scale-110' : 'border-transparent'}`}
                    style={{ background: `linear-gradient(135deg,${c.primary},${c.sec})` }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Contact & Marquee */}
        {step >= 4 && (
          <div className="gradient-card rounded-2xl p-4 space-y-3 animate-fade-in">
            <h3 className="font-bold text-gray-800 flex items-center gap-2 mb-1">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center">4</span>
              Contact & Marquee
            </h3>
            <input className="admin-input text-sm" placeholder="📞 Phone Number" value={config.phone} onChange={e=>update('phone',e.target.value)} />
            <input className="admin-input text-sm" placeholder="💬 WhatsApp Number" value={config.whatsapp} onChange={e=>update('whatsapp',e.target.value)} />
            <input className="admin-input text-sm" placeholder="📢 Marquee / Announcement Text" value={config.marqueeText} onChange={e=>update('marqueeText',e.target.value)} />
            <WhatsAppWidget phoneNumber={config.whatsapp} />
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="px-4 py-4 border-t border-indigo-50 flex justify-between gap-3">
        {step > 1 ? (
          <button onClick={() => setStep(s => s - 1)} className="glass-btn px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-600 min-h-[44px]">
            ← Back
          </button>
        ) : <div />}
        {step < 4 ? (
          <button
            onClick={() => setStep(s => s + 1)}
            disabled={step === 1 && !config.siteName}
            className="btn-primary text-sm px-6 disabled:opacity-40"
          >
            Next →
          </button>
        ) : (
          <button onClick={handleGenerate} className="btn-primary text-sm px-6 bg-emerald-500">
            🚀 Generate Website
          </button>
        )}
      </div>
    </div>
  );
};

export default GeneratorPage;
