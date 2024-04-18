import ReactMemoComponent from './ReactMemoComponent';
import './App.css';
import UseMemoComponent from './UseMemoComponent';
import CustomHookComponent from './CustomHookComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UseMemoComponent />
        <ReactMemoComponent />
        <CustomHookComponent />
      </header>
    </div>
  );
}

export default App;
