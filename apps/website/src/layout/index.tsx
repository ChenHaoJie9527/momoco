import React from 'react';

interface Props {
  children: React.ReactNode;
}

const LayoutContainer: React.FC<Props> = ({ children }) => {
  // 将元素分成三组
  const childrenArray = React.Children.toArray(children);
  const header = childrenArray.find(
    child => React.isValidElement(child) && child.type === 'header'
  );
  const main = childrenArray.filter(
    child => React.isValidElement(child) && child.type !== 'header' && child.type !== 'footer'
  );
  const footer = childrenArray.filter(
    child => React.isValidElement(child) && child.type === 'footer'
  );

  return (
    <div className="flex flex-col min-h-screen">
      {header && (
        <header className="bg-gray-800 text-white shadow-md">
          <div className="container mx-auto px-4 py-4">{header}</div>
        </header>
      )}

      {main && (
        <main className="flex-grow bg-gray-100">
          <div className="container mx-auto px-4 py-8">{main}</div>
        </main>
      )}

      {footer && (
        <footer className="bg-gray-800 text-white">
          <div className="container mx-auto px-4 py-6">{footer}</div>
        </footer>
      )}
    </div>
  );
};

export default LayoutContainer;
