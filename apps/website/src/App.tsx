import { Button } from '@headlessui/react';
import './App.css';
import LayoutContainer from './layout';
import { ThemeManager } from '@theme-smooth/core';
import JellyButton from './components/common/JellyButton';

function App() {
  const themeManager = new ThemeManager({
    transitionDuration: 800,
    transitionEffect: 'circle',
  });
  return (
    <LayoutContainer>
      <header className="flex w-full items-center justify-between container mx-auto px-4 py-4">
        <h1 className="text-2xl font-bold">我的应用</h1>
        <div className=" space-x-2">
          <Button
            className="border p-2 rounded-md"
            onClick={() => {
              themeManager.setTheme('light');
            }}
          >
            Light Theme
          </Button>
          <Button
            className="border p-2 rounded-md"
            onClick={() => {
              themeManager.setTheme('dark');
            }}
          >
            Dark Theme
          </Button>
          <Button
            className="border p-2 rounded-md"
            onClick={() => {
              themeManager.toggleTheme();
            }}
          >
            toggle theme
          </Button>
        </div>
      </header>

      <section>
        <h2 className="text-xl mb-4">欢迎来到主页面</h2>
        <p>这里是主要内容区域。</p>
        <JellyButton>果冻</JellyButton>
      </section>

      <footer className='container mx-auto px-4 py-6'>
        <p>&copy; 2024 我的公司。保留所有权利。</p>
      </footer>
    </LayoutContainer>
  );
}

export default App;
