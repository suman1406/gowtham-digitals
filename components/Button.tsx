import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', isLoading = false, children, className = '', disabled, ...props }) => {
  const baseStyles = "px-8 py-3 font-bold tracking-wider uppercase transition-all duration-300 text-sm md:text-base flex items-center justify-center gap-2 relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none";
  
  // Updated RGBA values to match #FFD700 (255, 215, 0)
  const variants = {
    primary: "bg-gold-500 text-matte-black hover:bg-white hover:text-black shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] hover:-translate-y-1 active:translate-y-0",
    outline: "border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-matte-black hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:-translate-y-1 active:translate-y-0"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </button>
  );
};