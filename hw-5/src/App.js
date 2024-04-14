import './App.css';
import UseEffectComponent from './UseEffectComponent';
import UseLayoutEffectComponent from './UseLayoutEffectComponent';
import UseReducerComponent from './UseReducerComponent';
import UseRefComponent from './UseRefComponent';
import UseStateComponent from './UseStateComponent';

function App() {
  return (
    <div className="App">
      <UseEffectComponent />
      <UseLayoutEffectComponent />
      <UseStateComponent />
      <UseReducerComponent />
      <UseRefComponent />
    </div>
  );
}

export default App;
