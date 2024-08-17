import './App.css';
import LayoutContainer from './layout';
import Logo from './components/common/Logo';
import { ThemeProvider } from './components/theme/ThemeContextType';
import ThemeControls from './components/ThemeControls';
import JellyButton from './components/common/JellyButton';
import { Input } from './components/ui/input';

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

        <section className="w-full flex flex-col items-center justify-center space-y-4 xl:py-28 lg:py-28 md:py-28 sm:py-16">
          <h2 className="sm:text-3xl dark:text-[#fff] font-bold text-2xl">
            Out-of-the-box loading icons
          </h2>
          <div className="md:space-x-4">
            <JellyButton color="sky" className="dark:text-white">
              Get Started
            </JellyButton>
            <JellyButton color="gray" className="">
              Download all
            </JellyButton>
          </div>
        </section>
        <section className="w-full flex-1 flex">
          <div className=" flex flex-wrap gap-4 flex-[70%]">
            <Input placeholder="Search loading icons" className="h-14 sticky top-0 shadow gap-4 mr-3" />
            {Array.from({ length: 100 }, (_, index) => (
              <div
                className="size-44 rounded bg-white dark:bg-[#292f35] shadow flex items-center justify-center dark:text-white hover:scale-110 hover:opacity-85 transition-all cursor-pointer"
                key={index}
              >
                {index}
              </div>
            ))}
          </div>
          <div className="flex-[30%] dark:bg-[#292f35]  dark:text-white max-h-screen sticky top-0">
            hahah
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
