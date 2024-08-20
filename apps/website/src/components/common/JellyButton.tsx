import React from 'react';

interface JellyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'blue' | 'green' | 'red' | 'purple' | 'gray' | 'fuchsia' | 'sky';
  size?: 'small' | 'medium' | 'large';
}

const JellyButton: React.FC<JellyButtonProps> = ({
  children,
  color = 'blue',
  size = 'medium',
  className = '',
  ...props
}) => {
  const colorClasses: Record<string, string> = {
    blue: 'before:bg-blue-600 focus:ring-blue-600',
    green: 'before:bg-green-400 focus:ring-green-400',
    red: 'before:bg-red-400 focus:ring-red-400',
    purple: 'before:bg-purple-400 focus:ring-purple-400',
    default: 'before:bg-blue-400 focus:ring-blue-400',
    gray: 'before:bg-gray-50 focus:ring-gray-50',
    fuchsia: 'before:bg-fuchsia-500 focus:ring-fuchsia-500',
    sky: 'before:bg-sky-400 focus:ring-sky-400'
  };

  const sizeClasses: Record<string, string> = {
    small: 'text-sm py-1 px-2',
    medium: 'text-base py-2 px-4',
    large: 'text-lg py-3 px-6'
  };

  return (
    <button
      className={`jelly-button dark:text-white ${colorClasses[color]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default JellyButton;
