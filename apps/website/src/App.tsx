import './App.css';
import LayoutContainer from './layout';

function App() {
  return (
    <LayoutContainer
      header={<h1 className="text-2xl font-bold">我的应用</h1>}
      main={
        <div>
          <h2 className="text-xl mb-4">欢迎来到主页面</h2>
          <p>这里是主要内容区域。</p>
        </div>
      }
      footer={<p>&copy; 2024 我的公司。保留所有权利。</p>}
    />
  );
}

export default App;
