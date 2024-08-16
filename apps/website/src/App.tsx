import './App.css';
import LayoutContainer from './layout';
import Logo from './components/common/Logo';
import { ThemeProvider } from './components/theme/ThemeContextType';
import ThemeControls from './components/ThemeControls';

function App() {

  return (
    <ThemeProvider>
      <LayoutContainer>
        <header className="flex w-full items-center justify-between container px-4">
          <h1 className="text-2xl font-bold">
            <Logo />
          </h1>
          <ThemeControls />
        </header>

        <section>
          <h2 className="text-xl mb-4">欢迎来到主页面</h2>
          <p>这里是主要内容区域。</p>
        </section>

        <footer className="container mx-auto px-4 py-6">
          <p>&copy; 2024 我的公司。保留所有权利。</p>
        </footer>
      </LayoutContainer>
    </ThemeProvider>
  );
}

export default App;
