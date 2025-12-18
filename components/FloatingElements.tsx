
import React from 'react';

const FloatingElements: React.FC = () => {
  const items = [
    { icon: '🥗', top: '12%', left: '8%', size: 'text-3xl', delay: '0s' },
    { icon: '🍎', top: '25%', left: '90%', size: 'text-4xl', delay: '1s' },
    { icon: '🥑', top: '75%', left: '12%', size: 'text-2xl', delay: '2s' },
    { icon: '🥦', top: '88%', left: '85%', size: 'text-3xl', delay: '0.5s' },
    { icon: '🥤', top: '45%', left: '3%', size: 'text-xl', delay: '1.5s' },
    { icon: '🌽', top: '18%', left: '42%', size: 'text-2xl', delay: '3s' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`absolute floating ${item.size} opacity-20`}
          style={{
            top: item.top,
            left: item.left,
            animationDelay: item.delay,
          }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
