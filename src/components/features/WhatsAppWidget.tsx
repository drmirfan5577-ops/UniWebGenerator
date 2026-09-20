import React, { useState } from 'react';

interface WhatsAppWidgetProps {
  phoneNumber?: string;
}

const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ phoneNumber = '' }) => {
  const [phone, setPhone] = useState(phoneNumber);
  const [msg, setMsg] = useState('');
  const [saved, setSaved] = useState(false);

  const savedPhone = localStorage.getItem('uwg_whatsapp') || phone;

  const openWhatsApp = () => {
    const num = savedPhone.replace(/[^0-9]/g, '');
    const encoded = encodeURIComponent(msg || 'Hello! I want to place an order.');
    window.open(`https://wa.me/${num}?text=${encoded}`, '_blank');
  };

  const savePhone = () => {
    localStorage.setItem('uwg_whatsapp', phone);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="gradient-card rounded-2xl p-5 space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-2xl">💬</div>
        <div>
          <h3 className="font-bold text-gray-800">WhatsApp Orders</h3>
          <p className="text-xs text-gray-500">Direct voice & text ordering via WhatsApp</p>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <label className="text-xs font-semibold text-gray-600 mb-1 block">📞 WhatsApp Number</label>
          <div className="flex gap-2">
            <input
              className="admin-input flex-1 text-sm"
              placeholder="+92 300 0000000"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
            <button onClick={savePhone} className="btn-primary text-xs px-4 bg-green-500 hover:bg-green-600" style={{ background: '#22c55e' }}>
              {saved ? '✓' : 'Save'}
            </button>
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-600 mb-1 block">💬 Default Message</label>
          <textarea
            className="admin-input text-sm resize-none"
            rows={2}
            placeholder="Hello! I want to place an order..."
            value={msg}
            onChange={e => setMsg(e.target.value)}
          />
        </div>

        <button
          onClick={openWhatsApp}
          className="w-full py-3 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
          style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
        >
          <span className="text-lg">💬</span>
          Open WhatsApp Chat
        </button>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => { const n = (localStorage.getItem('uwg_whatsapp') || phone).replace(/[^0-9]/g, ''); window.open(`tel:+${n}`, '_blank'); }}
            className="py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-1.5 border-2 border-green-300 text-green-700 hover:bg-green-50 transition-all"
          >
            📞 Voice Call
          </button>
          <button
            onClick={() => { const n = (localStorage.getItem('uwg_whatsapp') || phone).replace(/[^0-9]/g, ''); window.open(`https://wa.me/${n}?text=Please+call+me+back`, '_blank'); }}
            className="py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-1.5 border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-50 transition-all"
          >
            🎤 Voice Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppWidget;
