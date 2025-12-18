
import React from 'react';

interface SparkleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const SparkleButton: React.FC<SparkleButtonProps> = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = "px-6 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2 overflow-hidden relative";
  const variants = {
    primary: "bg-[#005c57] text-white hover:bg-[#003537] shadow-[#005c57]/20",
    secondary: "bg-white text-[#005c57] border-2 border-[#005c57] hover:bg-[#f0fdfa]"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:animate-[shimmer_2s_infinite] pointer-events-none" />
      <span className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none group-hover:opacity-30">
        🥦
      </span>
    </button>
  );
};

export default SparkleButton;
