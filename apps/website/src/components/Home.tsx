import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import Logo from './common/Logo';
const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <Logo />
        <h1 className="text-4xl font-bold mb-4">Momoco Icons</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Beautiful, customizable icons for your next project
        </p>
        <div className="flex w-full max-w-sm items-center space-x-2 mx-auto">
          <Input type="text" placeholder="Search icons..." />
          <Button type="submit">Search</Button>
        </div>
      </header>
    </div>
  );
};

export default Home;
