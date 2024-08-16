import React, { useState } from 'react';

interface JellyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
}

const JellyButton: React.FC<JellyButtonProps> = ({
  children,
  color = 'blue',
  className = '',
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const baseStyle = `
    relative overflow-hidden rounded-full px-6 py-3 font-bold border
    transition-all duration-300 ease-out
    hover:shadow-lg hover:translate-y-[-2px]
    active:shadow-inner active:translate-y-[1px]
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-400
  `;

  const jellyStyle = `
    before:absolute before:inset-0
    before:bg-${color}-400 before:opacity-75 before:backdrop-blur-md
    before:transition-all before:duration-300 before:ease-out
    before:hover:scale-110 before:hover:opacity-85
    ${isPressed ? 'before:scale-95 before:opacity-90' : ''}
  `;
  return (
    <button
      className={`${baseStyle} ${jellyStyle} ${className}`}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>

  );
};

export default JellyButton;
