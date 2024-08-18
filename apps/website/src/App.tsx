import './App.css';
import LayoutContainer from './layout';
import Logo from './components/common/Logo';
import { ThemeProvider } from './components/theme/ThemeContextType';
import ThemeControls from './components/ThemeControls';
import JellyButton from './components/common/JellyButton';
import { Input } from './components/ui/input';
import { CircleBorder } from '@momoco/react';
import { useState } from 'react';

function App() {
  const [selectedCard, setSelectCard] = useState<number | null>(null);
  const cardList = [
    {
      type: 'circleBorder',
      color: 'secondary',
      name: 'circle-border',
      content: <CircleBorder size="small" color="secondary" />,
    },
    {
      type: 'circle',
      color: 'secondary',
      name: 'circle',
      content: <CircleBorder size="small" color="primary" />,
    },
    {
      type: 'circleBorder',
      color: 'secondary',
      name: 'circle-border',
      content: <CircleBorder size="small" color="secondary" />,
    },
    {
      type: 'circle',
      color: 'secondary',
      name: 'circle',
      content: <CircleBorder size="small" color="primary" />,
    },
    {
      type: 'circleBorder',
      color: 'secondary',
      name: 'circle-border',
      content: <CircleBorder size="small" color="secondary" />,
    },
    {
      type: 'circle',
      color: 'secondary',
      name: 'circle',
      content: <CircleBorder size="small" color="primary" />,
    },
    {
      type: 'circleBorder',
      color: 'secondary',
      name: 'circle-border',
      content: <CircleBorder size="small" color="secondary" />,
    },
    {
      type: 'circle',
      color: 'secondary',
      name: 'circle',
      content: <CircleBorder size="small" color="primary" />,
    },
    {
      type: 'circleBorder',
      color: 'secondary',
      name: 'circle-border',
      content: <CircleBorder size="small" color="secondary" />,
    },
    {
      type: 'circle',
      color: 'secondary',
      name: 'circle',
      content: <CircleBorder size="small" color="primary" />,
    },
    {
      type: 'circleBorder',
      color: 'secondary',
      name: 'circle-border',
      content: <CircleBorder size="small" color="secondary" />,
    },
    {
      type: 'circle',
      color: 'secondary',
      name: 'circle',
      content: <CircleBorder size="small" color="primary" />,
    },
    {
      type: 'circleBorder',
      color: 'secondary',
      name: 'circle-border',
      content: <CircleBorder size="small" color="secondary" />,
    },
    {
      type: 'circle',
      color: 'secondary',
      name: 'circle',
      content: <CircleBorder size="small" color="primary" />,
    },
    {
      type: 'circleBorder',
      color: 'secondary',
      name: 'circle-border',
      content: <CircleBorder size="small" color="secondary" />,
    },
    {
      type: 'circle',
      color: 'secondary',
      name: 'circle',
      content: <CircleBorder size="small" color="primary" />,
    },
    {
      type: 'circle',
      color: 'secondary',
      name: 'circle',
      content: <CircleBorder size="small" color="primary" />,
    },
  ];

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
        <section className="w-full flex-1 flex relative gap-2 ">
          <div className="flex-1">
            <div className="sticky top-0 pt-6 mb-6 z-10 w-full dark:bg-[#222429] bg-[#f4f6f8]">
              <Input
                placeholder="Search loading icons"
                className="shadow h-14 dark:bg-[#292f35] w-full dark:text-white"
              />
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {cardList.map((item, index) => (
                <li
                  key={index}
                  className={`card ${selectedCard === index ? 'border-2 border-[#8dc0f7] dark:border-[#fff]' : 'border-2 border-transparent'}`}
                  onClick={() => setSelectCard(index)}
                >
                  <div>{item.content}</div>
                  <div>{item.name}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        ™
        <footer className="container mx-auto px-4 py-6">
          <p>&copy; 2024 我的公司。保留所有权利。</p>
        </footer>
      </LayoutContainer>
    </ThemeProvider>
  );
}

export default App;
