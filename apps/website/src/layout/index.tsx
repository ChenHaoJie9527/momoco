import React from 'react';

interface Props {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

const LayoutContainer: React.FC<Props> = ({ children, header, footer }) => {
  // 将元素分成三组
  const childrenArray = React.Children.toArray(children);
  const isHeader = header
    ? header
    : childrenArray.find(child => React.isValidElement(child) && child.type === 'header');
  const main = childrenArray.filter(
    child => React.isValidElement(child) && child.type !== 'header' && child.type !== 'footer'
  );
  const isFooter = footer
    ? footer
    : childrenArray.filter(child => React.isValidElement(child) && child.type === 'footer');

  return (
    <div className="flex flex-col min-h-screen">
      {isHeader && <div className="container mx-auto px-4 py-4">{isHeader}</div>}

      {main && (
        <main className="flex-grow ">
          <div className="container mx-auto px-4 py-8">{main}</div>
        </main>
      )}

      {isFooter && <div className="container mx-auto px-4 py-6">{isFooter}</div>}
    </div>
  );
};

export default LayoutContainer;
