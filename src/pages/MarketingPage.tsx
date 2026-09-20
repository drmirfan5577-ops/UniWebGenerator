import React, { useState } from 'react';

interface MarketingPageProps {
  translate: (k: string) => string;
  dir: 'ltr' | 'rtl';
}

const MARKETING_SECTIONS = [
  {
    id: 'digital',
    icon: '📣',
    title: 'Digital Marketing',
    titleUrdu: 'ڈیجیٹل مارکیٹنگ',
    color: '#6366f1',
    items: ['SEO Optimization', 'Social Media Campaigns', 'Email Marketing', 'Google Ads Integration', 'Meta Ads Manager', 'Content Strategy', 'Influencer Outreach', 'Brand Awareness'],
  },
  {
    id: 'branding',
    icon: '🏷️',
    title: 'Branding & Identity',
    titleUrdu: 'برینڈنگ و شناخت',
    color: '#8b5cf6',
    items: ['Logo Design', 'Brand Guidelines', 'Business Cards', 'Packaging Design', 'Trademark Registration', 'Brand Voice', 'Visual Identity', 'Corporate Profile'],
  },
  {
    id: 'ecommerce',
    icon: '🛍️',
    title: 'E-Commerce & Sales',
    titleUrdu: 'ای کامرس و فروخت',
    color: '#10b981',
    items: ['Product Listings', 'Payment Gateway', 'Order Management', 'Inventory Tracking', 'COD Integration', 'Daraz Integration', 'Amazon Seller', 'Alibaba Store'],
  },
  {
    id: 'delivery',
    icon: '🚀',
    title: 'Delivery & Logistics',
    titleUrdu: 'ڈیلیوری و لاجسٹکس',
    color: '#f59e0b',
    items: ['Same Day Delivery', 'Express Courier', 'Tracking System', 'City-wide Coverage', 'WhatsApp Booking', 'COD Management', 'Return Policy', 'Packaging Standards'],
  },
  {
    id: 'automation',
    icon: '⚙️',
    title: 'Automation & AI',
    titleUrdu: 'آٹومیشن و اے آئی',
    color: '#ec4899',
    items: ['Chatbot Integration', 'Auto-Reply WhatsApp', 'Lead Generation', 'CRM Automation', 'AI Product Suggestions', 'Stock Alerts', 'Price Automation', 'Sales Reports'],
  },
  {
    id: 'appstore',
    icon: '📲',
    title: 'App Store & PWA',
    titleUrdu: 'ایپ اسٹور و پی ڈبلیو اے',
    color: '#06b6d4',
    items: ['Google Play Listing', 'Apple App Store', 'PWA Development', 'Push Notifications', 'App Marketing', 'ASO Optimization', 'User Ratings', 'Version Management'],
  },
];

const GLOBAL_MARKETS = [
  { country: '🇵🇰 Pakistan', platform: 'Daraz, OLX, Bykea', priority: 1 },
  { country: '🇨🇳 China', platform: 'Alibaba, WeChat, JD', priority: 2 },
  { country: '🇧🇩 Bangladesh', platform: 'Shajgoj, Chaldal, Daraz', priority: 3 },
  { country: '🇹🇷 Turkey', platform: 'Trendyol, Hepsiburada', priority: 4 },
  { country: '🇮🇳 India', platform: 'Flipkart, Amazon IN, Meesho', priority: 5 },
  { country: '🇺🇸 USA', platform: 'Amazon, eBay, Shopify', priority: 6 },
  { country: '🇦🇪 UAE', platform: 'Noon, Amazon AE, Carrefour', priority: 7 },
  { country: '🇬🇧 UK', platform: 'Amazon UK, ASOS, eBay UK', priority: 8 },
];

const MarketingPage: React.FC<MarketingPageProps> = ({ translate, dir }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className={`h-full flex flex-col ${dir === 'rtl' ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <div className="px-5 pt-4 pb-3 border-b border-indigo-50">
        <h2 className="text-xl font-black text-gray-800">
          📣 <span className="shimmer-text">{translate('nav.marketing')}</span>
        </h2>
        <p className="text-sm text-gray-500 mt-0.5">Global digital marketing & market capture strategies</p>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-4 space-y-4">
        {/* Marketing Sections */}
        {MARKETING_SECTIONS.map((sec) => (
          <div key={sec.id} className="gradient-card rounded-2xl overflow-hidden">
            <button
              className="w-full flex items-center gap-3 p-4 text-left"
              onClick={() => setActiveSection(activeSection === sec.id ? null : sec.id)}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: `${sec.color}18` }}
              >
                {sec.icon}
              </div>
              <div className="flex-1">
                <div className="font-bold text-[14px] text-gray-800">{sec.title}</div>
                <div className="text-[11px] text-gray-400" style={{ fontFamily: 'Noto Nastaliq Urdu, serif' }}>{sec.titleUrdu}</div>
              </div>
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm transition-transform"
                style={{
                  background: sec.color,
                  transform: activeSection === sec.id ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                ▾
              </div>
            </button>

            {activeSection === sec.id && (
              <div className="px-4 pb-4 pt-1 border-t border-gray-100 animate-fade-in">
                <div className="grid grid-cols-2 gap-2">
                  {sec.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-white/70 rounded-xl px-3 py-2.5 border border-gray-100"
                    >
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: sec.color }} />
                      <span className="text-xs font-medium text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <button
                  className="mt-3 w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
                  style={{ background: `linear-gradient(135deg,${sec.color},${sec.color}bb)` }}
                >
                  ⚡ Activate {sec.title}
                </button>
              </div>
            )}
          </div>
        ))}

        {/* Global Markets */}
        <div className="gradient-card rounded-2xl p-4">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            🌍 Global Market Coverage
            <span className="text-xs font-medium text-gray-400">Priority Targets</span>
          </h3>
          <div className="space-y-2">
            {GLOBAL_MARKETS.map((m) => (
              <div key={m.country} className="flex items-center gap-3 bg-white/60 rounded-xl px-3 py-2.5 border border-gray-100">
                <span className="text-[11px] font-bold text-indigo-600 w-5 text-center">#{m.priority}</span>
                <span className="text-sm font-semibold text-gray-700 flex-1">{m.country}</span>
                <span className="text-[10px] text-gray-400 hidden sm:block">{m.platform}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Competitor Analysis */}
        <div className="gradient-card rounded-2xl p-4">
          <h3 className="font-bold text-gray-800 mb-3">🏆 Inspired by Global Leaders</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { name: 'Amazon', icon: '📦', color: '#FF9900' },
              { name: 'Alibaba', icon: '🏪', color: '#FF6A00' },
              { name: 'Daraz', icon: '🛍️', color: '#F85606' },
              { name: 'OLX', icon: '🏷️', color: '#3DBE29' },
              { name: 'Shopify', icon: '🟢', color: '#96BF48' },
              { name: 'eBay', icon: '🔵', color: '#0064D2' },
              { name: 'Noon', icon: '🌙', color: '#FEEE00' },
              { name: 'Flipkart', icon: '⭐', color: '#2874F0' },
            ].map((brand) => (
              <div key={brand.name} className="flex flex-col items-center gap-1.5 bg-white/70 rounded-xl py-3 border border-gray-100">
                <div className="text-2xl">{brand.icon}</div>
                <span className="text-[11px] font-bold" style={{ color: brand.color }}>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;
