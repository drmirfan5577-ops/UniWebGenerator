import React, { useState } from 'react';
import { checkAdminPassword, loginAdmin, logoutAdmin, isAdminLoggedIn, getSiteConfig, saveSiteConfig } from '@/lib/auth';
import { LANGUAGES } from '@/constants/languages';
import { GLOBAL_REGIONS } from '@/constants/socialMedia';

interface AdminPageProps {
  translate: (k: string) => string;
  dir: 'ltr' | 'rtl';
}

const AdminPage: React.FC<AdminPageProps> = ({ translate, dir }) => {
  const [loggedIn, setLoggedIn] = useState(isAdminLoggedIn);
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('site');
  const [saved, setSaved] = useState(false);

  const storedConfig = getSiteConfig() || {};
  const [cfg, setCfg] = useState({
    siteName: storedConfig.siteName || '',
    tagline: storedConfig.tagline || '',
    phone: storedConfig.phone || '',
    whatsapp: storedConfig.whatsapp || '',
    email: storedConfig.email || '',
    address: storedConfig.address || '',
    city: storedConfig.city || '',
    country: storedConfig.country || 'PK',
    currency: storedConfig.currency || 'PKR',
    language: storedConfig.language || 'en',
    primaryColor: storedConfig.primaryColor || '#6366f1',
    marqueeText: storedConfig.marqueeText || 'Welcome! • Free delivery available • Order now',
    logoUrl: storedConfig.logoUrl || '',
    adminPassword: '',
    newPassword: '',
  });

  const handleLogin = () => {
    if (checkAdminPassword(password)) {
      loginAdmin();
      setLoggedIn(true);
      setError('');
    } else {
      setError(translate('admin.wrong'));
      setPassword('');
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    setLoggedIn(false);
    setPassword('');
  };

  const handleSave = () => {
    saveSiteConfig(cfg);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const updateCfg = (key: string, val: string) => setCfg(prev => ({ ...prev, [key]: val }));

  // LOGIN SCREEN
  if (!loggedIn) {
    return (
      <div className={`h-full flex items-center justify-center px-6 ${dir === 'rtl' ? 'rtl' : 'ltr'}`}>
        <div className="w-full max-w-sm">
          {/* Lock icon */}
          <div className="text-center mb-6">
            <div
              className="w-20 h-20 rounded-3xl mx-auto flex items-center justify-center text-4xl shadow-2xl animate-pulse-glow"
              style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}
            >
              🔐
            </div>
            <h2 className="text-2xl font-black text-gray-800 mt-4">{translate('admin.title')}</h2>
            <p className="text-sm text-gray-500 mt-1">Secure access required</p>
          </div>

          <div className="gradient-card rounded-3xl p-6 space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-600 mb-2 block">🔑 {translate('admin.password')}</label>
              <div className="relative">
                <input
                  type={showPw ? 'text' : 'password'}
                  className="admin-input pr-12"
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleLogin()}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm px-1"
                >
                  {showPw ? '🙈' : '👁️'}
                </button>
              </div>
              {error && (
                <p className="text-xs text-red-500 mt-1.5 font-medium flex items-center gap-1">
                  ⚠️ {error}
                </p>
              )}
            </div>

            <button
              onClick={handleLogin}
              className="btn-primary w-full py-3 text-sm"
              disabled={!password}
            >
              🔓 Access Admin Panel
            </button>

            <p className="text-center text-[10px] text-gray-400">
              Password protected — Authorized personnel only
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ADMIN DASHBOARD
  const TABS = [
    { id: 'site', icon: '🌐', label: 'Site Settings' },
    { id: 'contact', icon: '📞', label: 'Contact Info' },
    { id: 'display', icon: '🎨', label: 'Display & Theme' },
    { id: 'marquee', icon: '📢', label: 'Announcements' },
    { id: 'security', icon: '🔒', label: 'Security' },
    { id: 'stats', icon: '📊', label: 'Statistics' },
  ];

  return (
    <div className={`h-full flex flex-col ${dir === 'rtl' ? 'rtl' : 'ltr'}`}>
      {/* Admin header */}
      <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-indigo-50">
        <div>
          <h2 className="text-xl font-black shimmer-text">🔐 {translate('admin.title')}</h2>
          <div className="status-live text-[10px] mt-1">Admin Session Active</div>
        </div>
        <div className="flex items-center gap-2">
          {saved && (
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 animate-fade-in">
              ✓ Saved!
            </span>
          )}
          <button onClick={handleSave} className="btn-primary text-xs px-4 py-2">💾 Save</button>
          <button onClick={handleLogout} className="glass-btn px-3 py-2 rounded-xl text-xs font-semibold text-red-500">🚪 Logout</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto no-scrollbar border-b border-indigo-50 px-4">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 px-3 py-2.5 text-xs font-semibold whitespace-nowrap border-b-2 transition-all ${activeTab === tab.id ? 'border-indigo-500 text-indigo-700' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-4">
        {/* Site Settings */}
        {activeTab === 'site' && (
          <div className="space-y-3 animate-fade-in">
            <div className="gradient-card rounded-2xl p-4 space-y-3">
              <h3 className="font-bold text-gray-700 text-sm">🌐 Website Identity</h3>
              <input className="admin-input text-sm" placeholder="Site / Brand Name" value={cfg.siteName} onChange={e=>updateCfg('siteName',e.target.value)} />
              <input className="admin-input text-sm" placeholder="Tagline / Slogan" value={cfg.tagline} onChange={e=>updateCfg('tagline',e.target.value)} />
              <input className="admin-input text-sm" placeholder="Logo Image URL" value={cfg.logoUrl} onChange={e=>updateCfg('logoUrl',e.target.value)} />
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Language</label>
                  <select className="admin-input text-sm" value={cfg.language} onChange={e=>updateCfg('language',e.target.value)}>
                    {LANGUAGES.map(l=><option key={l.code} value={l.code}>{l.flag} {l.nativeName}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Region</label>
                  <select className="admin-input text-sm" value={cfg.country} onChange={e=>updateCfg('country',e.target.value)}>
                    {GLOBAL_REGIONS.map(r=><option key={r.code} value={r.code}>{r.flag} {r.name}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact */}
        {activeTab === 'contact' && (
          <div className="space-y-3 animate-fade-in">
            <div className="gradient-card rounded-2xl p-4 space-y-3">
              <h3 className="font-bold text-gray-700 text-sm">📞 Contact Information</h3>
              <input className="admin-input text-sm" placeholder="📞 Phone Number" value={cfg.phone} onChange={e=>updateCfg('phone',e.target.value)} />
              <input className="admin-input text-sm" placeholder="💬 WhatsApp Number" value={cfg.whatsapp} onChange={e=>updateCfg('whatsapp',e.target.value)} />
              <input className="admin-input text-sm" placeholder="📧 Email Address" value={cfg.email} onChange={e=>updateCfg('email',e.target.value)} />
              <input className="admin-input text-sm" placeholder="🏙️ City" value={cfg.city} onChange={e=>updateCfg('city',e.target.value)} />
              <textarea className="admin-input text-sm resize-none" rows={2} placeholder="📍 Full Address" value={cfg.address} onChange={e=>updateCfg('address',e.target.value)} />
              <div className="grid grid-cols-2 gap-3">
                <input className="admin-input text-sm" placeholder="💰 Currency (e.g. PKR)" value={cfg.currency} onChange={e=>updateCfg('currency',e.target.value)} />
              </div>
              {cfg.whatsapp && (
                <button
                  onClick={() => window.open(`https://wa.me/${cfg.whatsapp.replace(/[^0-9]/g,'')}`, '_blank')}
                  className="w-full py-2.5 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2"
                  style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)' }}
                >
                  💬 Test WhatsApp Link
                </button>
              )}
            </div>
          </div>
        )}

        {/* Display & Theme */}
        {activeTab === 'display' && (
          <div className="space-y-3 animate-fade-in">
            <div className="gradient-card rounded-2xl p-4 space-y-3">
              <h3 className="font-bold text-gray-700 text-sm">🎨 Theme & Display</h3>
              <div>
                <label className="text-xs text-gray-500 mb-1.5 block">Primary Brand Color</label>
                <div className="flex items-center gap-3">
                  <input type="color" className="w-12 h-10 rounded-xl border border-gray-200 cursor-pointer" value={cfg.primaryColor} onChange={e=>updateCfg('primaryColor',e.target.value)} />
                  <input className="admin-input flex-1 text-sm font-mono" value={cfg.primaryColor} onChange={e=>updateCfg('primaryColor',e.target.value)} />
                </div>
              </div>
              <div
                className="rounded-xl p-4 text-white text-center font-bold text-sm shadow-lg"
                style={{ background: `linear-gradient(135deg, ${cfg.primaryColor}, ${cfg.primaryColor}bb)` }}
              >
                Preview: {cfg.siteName || 'Your Brand Name'}
              </div>
            </div>
          </div>
        )}

        {/* Marquee */}
        {activeTab === 'marquee' && (
          <div className="space-y-3 animate-fade-in">
            <div className="gradient-card rounded-2xl p-4 space-y-3">
              <h3 className="font-bold text-gray-700 text-sm">📢 Ticker & Announcements</h3>
              <textarea
                className="admin-input text-sm resize-none"
                rows={3}
                placeholder="Enter announcement text (separate items with • )"
                value={cfg.marqueeText}
                onChange={e=>updateCfg('marqueeText',e.target.value)}
              />
              <div className="text-xs text-gray-500">Tip: Use • to separate multiple announcements</div>
              <div className="rounded-xl overflow-hidden">
                <div
                  className="py-2 text-white text-xs font-semibold overflow-hidden"
                  style={{ background: 'linear-gradient(90deg,#6366f1,#8b5cf6,#ec4899,#f59e0b,#10b981,#6366f1)', backgroundSize: '300%' }}
                >
                  <div className="animate-marquee whitespace-nowrap">
                    {(cfg.marqueeText.split('•').join(' ✦ ') + '  ').repeat(4)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Security */}
        {activeTab === 'security' && (
          <div className="space-y-3 animate-fade-in">
            <div className="gradient-card rounded-2xl p-4 space-y-3">
              <h3 className="font-bold text-gray-700 text-sm">🔒 Security Settings</h3>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-700 font-medium">
                ⚠️ Current password is hidden for security. Enter new password to change it.
              </div>
              <input
                type="password"
                className="admin-input text-sm"
                placeholder="Current Password (to verify)"
                value={cfg.adminPassword}
                onChange={e=>updateCfg('adminPassword',e.target.value)}
              />
              <input
                type="password"
                className="admin-input text-sm"
                placeholder="New Admin Password"
                value={cfg.newPassword}
                onChange={e=>updateCfg('newPassword',e.target.value)}
              />
              <button
                onClick={() => {
                  if (checkAdminPassword(cfg.adminPassword) && cfg.newPassword) {
                    alert('Password change functionality requires backend integration. Contact admin.');
                  } else {
                    alert('Current password incorrect or new password empty.');
                  }
                }}
                className="w-full btn-primary text-sm"
              >
                🔐 Update Password
              </button>
            </div>
            <div className="gradient-card rounded-2xl p-4">
              <h3 className="font-bold text-gray-700 text-sm mb-3">🛡️ Session Info</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Status</span>
                  <span className="status-live text-[11px]">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Session Duration</span>
                  <span className="font-semibold text-gray-700">4 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Access Level</span>
                  <span className="font-semibold text-indigo-700">Super Admin</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats */}
        {activeTab === 'stats' && (
          <div className="space-y-3 animate-fade-in">
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Total Templates', value: '100', icon: '🎨', color: '#6366f1' },
                { label: 'Categories', value: '10', icon: '🗂️', color: '#8b5cf6' },
                { label: 'Languages', value: '13', icon: '🌐', color: '#ec4899' },
                { label: 'Countries', value: '15+', icon: '🌍', color: '#10b981' },
                { label: 'Social Platforms', value: '24', icon: '🔗', color: '#f59e0b' },
                { label: 'Premium Templates', value: '60+', icon: '⭐', color: '#06b6d4' },
              ].map((s, i) => (
                <div key={i} className="gradient-card rounded-2xl p-4 text-center">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="text-2xl font-black" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-[11px] text-gray-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="gradient-card rounded-2xl p-4">
              <h3 className="font-bold text-gray-700 text-sm mb-3">📊 Platform Status</h3>
              {['Template Engine', 'Multi-Language', 'WhatsApp Integration', 'Social Links', 'Admin Panel', 'PWA Support'].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                  <span className="text-sm text-gray-600">{item}</span>
                  <span className="status-live text-[10px]">Active</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
