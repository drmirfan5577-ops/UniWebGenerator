import React from 'react';

const AnimatedBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Layer 1: Base aurora */}
      <div className="absolute inset-0 aurora-bg" />
      {/* Layer 2: Radial color orbs */}
      <div className="absolute inset-0 aurora-bg-2" />
      {/* Layer 3: Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
      {/* Layer 4: Floating orbs */}
      <div
        className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full opacity-[0.04] animate-float"
        style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)', animationDelay: '0s' }}
      />
      <div
        className="absolute top-[40%] right-[8%] w-96 h-96 rounded-full opacity-[0.04] animate-float"
        style={{ background: 'radial-gradient(circle, #ec4899, transparent 70%)', animationDelay: '-3s' }}
      />
      <div
        className="absolute bottom-[10%] left-[20%] w-80 h-80 rounded-full opacity-[0.035] animate-float"
        style={{ background: 'radial-gradient(circle, #10b981, transparent 70%)', animationDelay: '-6s' }}
      />
      <div
        className="absolute top-[60%] left-[60%] w-64 h-64 rounded-full opacity-[0.04] animate-float"
        style={{ background: 'radial-gradient(circle, #f59e0b, transparent 70%)', animationDelay: '-9s' }}
      />
      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
