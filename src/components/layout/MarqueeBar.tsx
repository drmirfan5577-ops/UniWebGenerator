import React from 'react';

interface MarqueeBarProps {
  items: string[];
  reverse?: boolean;
  gradient?: string;
  textColor?: string;
  speed?: 'slow' | 'normal' | 'fast';
}

const SPEEDS = { slow: '40s', normal: '25s', fast: '15s' };

const MarqueeBar: React.FC<MarqueeBarProps> = ({
  items,
  reverse = false,
  gradient = 'linear-gradient(90deg,#6366f1,#8b5cf6,#ec4899,#f59e0b,#10b981,#06b6d4,#6366f1)',
  textColor = 'white',
  speed = 'normal',
}) => {
  const repeated = [...items, ...items, ...items, ...items];
  const duration = SPEEDS[speed];

  return (
    <div
      className="relative overflow-hidden py-1.5 px-0"
      style={{ background: gradient }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `${reverse ? 'marqueeReverse' : 'marquee'} ${duration} linear infinite`,
          width: 'max-content',
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide px-6"
            style={{ color: textColor }}
          >
            <span className="opacity-60">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBar;
