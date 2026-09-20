import React from 'react';

const NotFound: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center text-center px-6">
    <div className="text-6xl mb-4">🌐</div>
    <h2 className="text-2xl font-black text-gray-800 mb-2">Page Not Found</h2>
    <p className="text-gray-500 text-sm">Use the sidebar navigation to explore the platform.</p>
  </div>
);

export default NotFound;
