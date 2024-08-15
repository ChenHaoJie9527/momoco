import React from 'react';
import { cn } from '@/utils';

interface Props {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  containerClass?: string;
  headerClass?: string;
  footerClass?: string;
  mainClass?: string;
}

const LayoutContainer: React.FC<Props> = ({
  children,
  header,
  footer,
  containerClass,
}) => {
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
    <div className={`${cn('flex flex-col min-h-screen', containerClass)}`}>
      {isHeader && <>{isHeader}</>}

      {main && (
        <main className={`${cn('flex-grow')}`}>
          <div className="container mx-auto px-4 py-8">{main}</div>
        </main>
      )}

      {isFooter && <>{isFooter}</>}
    </div>
  );
};

export default LayoutContainer;
