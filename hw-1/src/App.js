// 1)Ініціалізувати проект за допомогою CRA
// 2)Видалити зайві файли

// 3)Створити власні класові і функціональні компоненти

// 4)Додати їх до ротового файлу

import './App.css';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

function App() {
  return (
    <div className="App">
      <FunctionalComponent />
      <ClassComponent />
    </div>
  );
}

export default App;
