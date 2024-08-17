import './App.css';
import LayoutContainer from './layout';
import Logo from './components/common/Logo';
import { ThemeProvider } from './components/theme/ThemeContextType';
import ThemeControls from './components/ThemeControls';
import JellyButton from './components/common/JellyButton';

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

        <section className="w-full flex flex-col items-center justify-center space-y-4 xl:py-28 lg:py-28 md:py-28 sm:py-16 sx:py-8">
          <h2 className="sm:text-3xl dark:text-[#fff] font-bold sx:text-xl">
            Out-of-the-box loading icons
          </h2>
          <div className='space-x-4'>
            <JellyButton color='sky' className='dark:text-white'>Get Started</JellyButton>
            <JellyButton color='gray' className='dark:text-whit'>Download all</JellyButton>
          </div>
        </section>

        <footer className="container mx-auto px-4 py-6">
          <p>&copy; 2024 我的公司。保留所有权利。</p>
        </footer>
      </LayoutContainer>
    </ThemeProvider>
  );
}

export default App;
