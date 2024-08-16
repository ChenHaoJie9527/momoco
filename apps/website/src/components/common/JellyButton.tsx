import React from 'react';

interface JellyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'blue' | 'green' | 'red' | 'purple';
}

const JellyButton: React.FC<JellyButtonProps> = ({
  children,
  color = 'blue',
  className = '',
  ...props
}) => {
  const colorClasses: Record<string, string> = {
    blue: 'before:bg-blue-400 focus:ring-blue-400',
    green: 'before:bg-green-400 focus:ring-green-400',
    red: 'before:bg-red-400 focus:ring-red-400',
    purple: 'before:bg-purple-400 focus:ring-purple-400',
  };

  return (
    <button
      className={`jelly-button ${colorClasses[color]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default JellyButton;
