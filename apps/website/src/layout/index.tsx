import React from "react";

interface Props {
  header: React.ReactNode;
  main: React.ReactNode;
  footer: React.ReactNode;
}

const LayoutContainer: React.FC<Props> = ({ header, main, footer }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          {header}
        </div>
      </header>

      <main className="flex-grow bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          {main}
        </div>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-6">
          {footer}
        </div>
      </footer>
    </div>
  );
};

export default LayoutContainer;
